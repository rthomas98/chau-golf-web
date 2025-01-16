import React, { useState } from "react";
import PropTypes from "prop-types";
import { Check } from "lucide-react";
import { Link, router } from '@inertiajs/react';

const PricingCard = ({ plan, isPopular, auth }) => {
  const [isLoading, setIsLoading] = useState(false);
  const price = plan.price;
  
  const handleSubscribe = async () => {
    setIsLoading(true);
    try {
      const response = await router.post(route('stripe.checkout'), {
        price_id: plan.stripe_price_id,
      });
      
      if (response.error) {
        console.error('Error:', response.error);
        return;
      }
      
      // Redirect to Stripe Checkout
      window.location.href = response.url;
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className={`flex flex-col rounded-lg p-8 ${isPopular ? 'bg-chaugreen/10 border-2 border-chaugreen' : 'bg-gray'}`}>
      {isPopular && (
        <div className="mb-8">
          <span className="rounded-full bg-chaugreen px-3 py-1 text-sm font-semibold text-white">
            Most Popular
          </span>
        </div>
      )}
      <div className="mb-6">
        <h3 className="mb-2 text-xl font-bold text-black">{plan.name}</h3>
        <p className="text-black/70">{plan.description}</p>
      </div>
      <div className="mb-6">
        <span className="text-5xl font-bold text-black">${price}</span>
        <span className="text-black/70">/year</span>
      </div>
      <div className="mb-8 space-y-4">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <Check className="h-5 w-5 text-chaugreen" />
            <span className="text-black/70">{feature}</span>
          </div>
        ))}
      </div>
      {auth?.user ? (
        <button
          onClick={handleSubscribe}
          disabled={isLoading}
          className={`mt-auto rounded-lg px-6 py-3 font-semibold text-center transition-colors ${
            isPopular
              ? 'bg-chaugreen text-white hover:bg-black'
              : 'bg-chaugreen text-white hover:bg-black'
          } ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Processing...' : plan.buttonText}
        </button>
      ) : (
        <div className="space-y-3">
          <Link
            href={route('login')}
            className={`block w-full rounded-lg px-6 py-3 font-semibold text-center transition-colors ${
              isPopular
                ? 'bg-chaugreen text-white hover:bg-black'
                : 'bg-chaugreen text-white hover:bg-black'
            }`}
          >
            Log in to Subscribe
          </Link>
          <Link
            href={route('register')}
            className="block w-full rounded-lg px-6 py-3 font-semibold text-center border-2 border-chaugreen text-chaugreen hover:bg-chaugreen hover:text-white transition-colors"
          >
            Register Now
          </Link>
        </div>
      )}
    </div>
  );
};

export const Pricing3 = (props) => {
  const { tagline, heading, description, plans, auth } = {
    ...Pricing3Defaults,
    ...props,
  };

  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold text-darkerviridiangreen md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-darkviridiangreen md:text-lg">
            {description}
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {plans.map((plan, index) => (
              <PricingCard 
                key={index} 
                plan={plan} 
                isPopular={plan.isPopular}
                auth={auth}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Pricing3.propTypes = {
  tagline: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  auth: PropTypes.object,
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      stripe_price_id: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      buttonText: PropTypes.string.isRequired,
      isPopular: PropTypes.bool,
    })
  ),
};

export const Pricing3Defaults = {
  tagline: "Membership Plans",
  heading: "Choose Your Perfect Membership",
  description:
    "Select from our carefully crafted membership options, each designed to provide you with the ultimate golfing experience.",
  plans: [
    {
      name: "Individual Membership",
      description: "Perfect for the solo golfer looking to improve their game",
      price: 79,
      stripe_price_id: 'price_individual', // Replace with your Stripe Price ID
      features: [
        "Get a golf gift or a polo golf shirt when sign up",
        "Secure your spot in tournaments",
        "Participate in members-only events, championships, and competitive play",
        "Enjoy reduced rates on tournament fees",
        "Connect with fellow golf enthusiasts, business professionals, and club members",
        "Enjoy member-only discounts on ChauChauGolf merchandise, equipment, apparel"
      ],
      buttonText: "Subscribe Now",
      isPopular: false,
    },
    {
      name: "Business Membership",
      description: "For 8 employees",
      price: 550,
      stripe_price_id: 'price_business', // Replace with your Stripe Price ID
      features: [
        "Get a golf gift or a polo golf shirt for each member when sign up",
        "Secure spots in tournaments",
        "Participate in members-only events, championships, and competitive play",
        "Enjoy reduced rates on tournament fees",
        "Connect with fellow golf enthusiasts, business professionals, and club members",
        "Enjoy member-only discounts on ChauChauGolf merchandise, equipment, apparel"
      ],
      buttonText: "Subscribe Now",
      isPopular: true,
    },
  ],
};
