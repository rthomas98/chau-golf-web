import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Comparison4 = ({ tiers }) => {
  return (
    <div className="bg-merino py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-darkviridiangreen sm:text-4xl"
          >
            Tournament Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Choose the perfect package that suits your tournament experience.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3"
        >
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
                tier.featured
                  ? "relative z-10 sm:-mx-8 sm:rounded-xl lg:mx-0"
                  : ""
              }`}
            >
              {tier.featured && (
                <div className="absolute inset-x-0 -top-px flex justify-center">
                  <div className="inline-flex items-center rounded-full bg-tahitigold px-4 py-1 text-sm font-semibold text-white ring-1 ring-inset ring-tahitigold">
                    Most Popular
                  </div>
                </div>
              )}
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-darkviridiangreen">
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-darkviridiangreen">
                    ${tier.price}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /player
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-tahitigold"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#register"
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? "bg-tahitigold text-white hover:bg-opacity-90 focus-visible:outline-tahitigold"
                    : "bg-darkviridiangreen text-white hover:bg-opacity-90 focus-visible:outline-darkviridiangreen"
                }`}
              >
                Register Now
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

Comparison4.propTypes = {
  tiers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      featured: PropTypes.bool,
    })
  ).isRequired,
};

export default Comparison4;
