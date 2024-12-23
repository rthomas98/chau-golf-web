import React, { useState } from "react";
import PropTypes from "prop-types";
import { Check } from "lucide-react";

const PricingToggle = ({ isYearly, onToggle }) => (
  <div className="mb-8 flex justify-center">
    <div className="inline-flex items-center rounded-lg bg-lowviridiangreen p-1">
      <button
        className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
          !isYearly ? 'bg-tahitigold text-white' : 'text-darkviridiangreen hover:text-darkerviridiangreen'
        }`}
        onClick={() => onToggle(false)}
      >
        Monthly
      </button>
      <button
        className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
          isYearly ? 'bg-tahitigold text-white' : 'text-darkviridiangreen hover:text-darkerviridiangreen'
        }`}
        onClick={() => onToggle(true)}
      >
        Yearly
        <span className="ml-1 text-xs">Save 20%</span>
      </button>
    </div>
  </div>
);

const PricingCard = ({ plan, isPopular, isYearly }) => {
  const price = isYearly ? plan.price : Math.round(plan.price / 0.8 / 12);
  
  return (
    <div className={`flex flex-col rounded-lg p-8 ${isPopular ? 'bg-tahitigold/10 border-2 border-tahitigold' : 'bg-lowviridiangreen'}`}>
      {isPopular && (
        <div className="mb-8">
          <span className="rounded-full bg-tahitigold px-3 py-1 text-sm font-semibold text-white">
            Most Popular
          </span>
        </div>
      )}
      <div className="mb-6">
        <h3 className="mb-2 text-xl font-bold text-darkerviridiangreen">{plan.name}</h3>
        <p className="text-darkviridiangreen">{plan.description}</p>
      </div>
      <div className="mb-6">
        <span className="text-5xl font-bold text-darkerviridiangreen">${price}</span>
        <span className="text-darkviridiangreen">/{isYearly ? 'year' : 'month'}</span>
        {isYearly && (
          <div className="mt-2 text-sm text-tahitigold">
            Save ${Math.round((plan.price / 0.8) - plan.price)} per year
          </div>
        )}
      </div>
      <div className="mb-8 space-y-4">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <Check className="h-5 w-5 text-tahitigold" />
            <span className="text-darkviridiangreen">{feature}</span>
          </div>
        ))}
      </div>
      <button
        className={`mt-auto rounded-lg px-6 py-3 font-semibold transition-colors ${
          isPopular
            ? 'bg-tahitigold text-white hover:bg-midtahitigold'
            : 'bg-viridiangreen text-white hover:bg-darkviridiangreen'
        }`}
      >
        {plan.buttonText}
      </button>
    </div>
  );
};

export const Pricing3 = (props) => {
  const { tagline, heading, description, plans } = {
    ...Pricing3Defaults,
    ...props,
  };

  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-tahitigold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-4xl font-bold text-darkerviridiangreen md:mb-6 md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="text-darkviridiangreen md:text-lg">{description}</p>
        </div>
        <PricingToggle isYearly={isYearly} onToggle={setIsYearly} />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index} 
              plan={plan} 
              isPopular={plan.isPopular} 
              isYearly={isYearly}
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
