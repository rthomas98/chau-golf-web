import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const CTA7 = ({ tournament }) => {
  return (
    <div className="bg-darkviridiangreen">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Ready to Join the Tournament?
            <br />
            Register now to secure your spot!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300"
          >
            {tournament.registrationMessage}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <a
              href="#register"
              className="rounded-md bg-tahitigold px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tahitigold"
            >
              Register Now
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold leading-6 text-white"
            >
              Contact Us <span aria-hidden="true">→</span>
            </a>
          </motion.div>

          {tournament.earlyBirdOffer && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 inline-flex items-center rounded-full bg-tahitigold/10 px-6 py-3 text-sm font-medium text-tahitigold ring-1 ring-inset ring-tahitigold/20"
            >
              <svg
                className="mr-3 h-5 w-5 text-tahitigold"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              Early Bird Offer: {tournament.earlyBirdOffer}
            </motion.div>
          )}

          {tournament.spotsRemaining && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-4 text-sm text-gray-300"
            >
              Only {tournament.spotsRemaining} spots remaining!
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

CTA7.propTypes = {
  tournament: PropTypes.shape({
    registrationMessage: PropTypes.string.isRequired,
    earlyBirdOffer: PropTypes.string,
    spotsRemaining: PropTypes.number,
  }).isRequired,
};

export default CTA7;
