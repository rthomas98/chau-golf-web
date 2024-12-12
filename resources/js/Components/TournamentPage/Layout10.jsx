import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Layout10 = ({ sponsors }) => {
  return (
    <div className="bg-merino py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-darkviridiangreen sm:text-4xl"
          >
            Our Sponsors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            We're proud to partner with these amazing organizations to bring you an exceptional tournament experience.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-16 max-w-7xl px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 items-top gap-x-8 gap-y-10 lg:grid-cols-3">
            {sponsors.tiers.map((tier, tierIndex) => (
              <div key={tierIndex} className="space-y-8">
                <div className="text-center">
                  <h3 className="text-lg font-semibold leading-8 text-darkviridiangreen">
                    {tier.name}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-2">
                  {tier.sponsors.map((sponsor, sponsorIndex) => (
                    <motion.div
                      key={sponsorIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 * sponsorIndex,
                      }}
                      className="flex flex-col items-center gap-y-4"
                    >
                      <img
                        className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        src={sponsor.logo}
                        alt={sponsor.name}
                      />
                      <div className="text-center">
                        <h4 className="text-sm font-semibold text-darkviridiangreen">
                          {sponsor.name}
                        </h4>
                        {sponsor.contribution && (
                          <p className="mt-1 text-xs text-gray-600">
                            {sponsor.contribution}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {sponsors.becomeASponsor && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 text-center"
            >
              <h3 className="text-lg font-semibold text-darkviridiangreen">
                Interested in Becoming a Sponsor?
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {sponsors.becomeASponsor.description}
              </p>
              <a
                href={sponsors.becomeASponsor.contactLink}
                className="mt-6 inline-flex items-center rounded-md bg-tahitigold px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tahitigold"
              >
                Contact Us About Sponsorship
                <svg
                  className="ml-2 -mr-0.5 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

Layout10.propTypes = {
  sponsors: PropTypes.shape({
    tiers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        sponsors: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            logo: PropTypes.string.isRequired,
            contribution: PropTypes.string,
          })
        ).isRequired,
      })
    ).isRequired,
    becomeASponsor: PropTypes.shape({
      description: PropTypes.string.isRequired,
      contactLink: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Layout10;
