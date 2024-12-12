 import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Testimonial16 = ({ testimonials }) => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-darkviridiangreen sm:text-4xl"
          >
            Player Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Hear what past participants have to say about their tournament experience.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl shadow-lg p-8 ring-1 ring-gray-200"
            >
              <div className="flex items-center gap-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full bg-gray-50"
                />
                <div>
                  <div className="font-semibold text-darkviridiangreen">
                    {testimonial.name}
                  </div>
                  <div className="text-sm leading-6 text-gray-600">
                    {testimonial.year} Participant
                  </div>
                </div>
              </div>
              <div className="mt-8 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-tahitigold"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-6 text-base leading-7 text-gray-600">
                <p>"{testimonial.quote}"</p>
              </blockquote>
              {testimonial.achievement && (
                <div className="mt-6 flex items-center gap-x-2 text-sm text-tahitigold">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 00-.894.553L7.382 6H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V8a1 1 0 100-2h-3.382l-1.724-3.447A1 1 0 0010 2zm0 2.618L11.724 8H8.276L10 4.618z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{testimonial.achievement}</span>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

Testimonial16.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      quote: PropTypes.string.isRequired,
      achievement: PropTypes.string,
    })
  ).isRequired,
};

export default Testimonial16;
