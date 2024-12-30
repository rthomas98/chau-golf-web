import React, { useState } from "react";
import PropTypes from "prop-types";
import { Check } from "lucide-react";
import { Link } from '@inertiajs/react';

const PricingToggle = ({ isYearly, onToggle }) => (
  <div className="mb-8 flex justify-center">
    <div className="inline-flex items-center rounded-lg bg-gray p-1">
      <button
        className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
          !isYearly ? 'bg-chaugreen text-white' : 'text-black hover:text-black/70'
        }`}
        onClick={() => onToggle(false)}
      >
        Monthly
      </button>
      <button
        className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
          isYearly ? 'bg-chaugreen text-white' : 'text-black hover:text-black/70'
        }`}
        onClick={() => onToggle(true)}
      >
        Yearly
        <span className="ml-1 text-xs">Save 20%</span>
      </button>
    </div>
  </div>
);

const PricingCard = ({ plan, isPopular, isYearly, auth }) => {
  const price = isYearly ? plan.price : Math.round(plan.price / 0.8 / 12);
  const isApplicationPage = window.location.pathname === '/membership/apply';
  
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
        <span className="text-black/70">/{isYearly ? 'year' : 'month'}</span>
        {isYearly && (
          <div className="mt-2 text-sm text-chaugreen">
            Save ${Math.round((plan.price / 0.8) - plan.price)} per year
          </div>
        )}
      </div>
      <div className="mb-8 space-y-4">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <Check className="h-5 w-5 text-chaugreen" />
            <span className="text-black/70">{feature}</span>
          </div>
        ))}
      </div>
      {isApplicationPage ? (
        <button
          type="button"
          onClick={() => document.getElementById('membership-form').scrollIntoView({ behavior: 'smooth' })}
          className={`mt-auto rounded-lg px-6 py-3 font-semibold text-center transition-colors ${
            isPopular
              ? 'bg-chaugreen text-white hover:bg-black'
              : 'bg-chaugreen text-white hover:bg-black'
          }`}
        >
          Select This Plan
        </button>
      ) : auth?.user ? (
        <Link
          href={route('membership.apply')}
          className={`mt-auto rounded-lg px-6 py-3 font-semibold text-center transition-colors ${
            isPopular
              ? 'bg-chaugreen text-white hover:bg-black'
              : 'bg-chaugreen text-white hover:bg-black'
          }`}
        >
          {plan.buttonText}
        </Link>
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
            Log in to Apply
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

  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-chaugreen md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-4xl font-bold text-black md:mb-6 md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="text-black/70 md:text-lg">{description}</p>
        </div>
        <PricingToggle isYearly={isYearly} onToggle={setIsYearly} />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index} 
              plan={plan} 
              isPopular={plan.isPopular} 
              isYearly={isYearly}
              auth={auth}
            />
          ))}
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
      name: "Individual",
      description: "Perfect for the solo golfer looking to improve their game",
      price: 2499,
      features: [
        "Unlimited course access",
        "Priority tee times",
        "Access to practice facilities",
        "Member-only events",
        "Locker room access",
        "10% off pro shop purchases"
      ],
      buttonText: "Select Individual Plan",
      isPopular: false,
    },
    {
      name: "Family",
      description: "Share the joy of golf with your loved ones",
      price: 3999,
      features: [
        "All Individual benefits",
        "Coverage for spouse and children",
        "Family golf clinics",
        "Junior program access",
        "Guest privileges",
        "Social events access"
      ],
      buttonText: "Select Family Plan",
      isPopular: true,
    },
    {
      name: "Corporate",
      description: "Ideal for business networking and client entertainment",
      price: 5999,
      features: [
        "All Family benefits",
        "Corporate tournament options",
        "Meeting room access",
        "Client guest passes",
        "Networking events",
        "Customized packages available"
      ],
      buttonText: "Select Corporate Plan",
      isPopular: false,
    },
  ],
};
