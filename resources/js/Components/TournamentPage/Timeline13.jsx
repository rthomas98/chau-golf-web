import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Timeline13 = ({ tournament }) => {
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
            Tournament Schedule
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            A detailed timeline of events for the tournament.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-16 max-w-2xl lg:mx-0"
        >
          <div className="space-y-6">
            {tournament.schedule.map((event, index) => (
              <div
                key={index}
                className="relative flex gap-x-4"
              >
                <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                  <div className="w-px bg-gray-200"></div>
                </div>
                <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                  <div className="h-1.5 w-1.5 rounded-full bg-tahitigold ring-1 ring-tahitigold"></div>
                </div>
                <div className="flex-auto py-0.5 text-sm leading-5">
                  <div className="flex justify-between gap-x-4">
                    <div className="py-0.5 text-gray-500">
                      <span className="font-medium text-darkviridiangreen">
                        {event.time}
                      </span>
                      {" - "}
                      <span className="font-semibold text-tahitigold">
                        {event.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <div className="flex items-center gap-x-1 text-gray-400">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm">
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-600">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

Timeline13.propTypes = {
  tournament: PropTypes.shape({
    schedule: PropTypes.arrayOf(
      PropTypes.shape({
        time: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Timeline13;
