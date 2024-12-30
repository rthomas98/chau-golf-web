import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Content2Defaults = {
  heading: "Tournament Details",
  children: (
    <div>
      <p className="mb-4">
        Join us for an exceptional golf tournament that combines professional competition with 
        the spirit of sportsmanship. Experience world-class facilities, challenging courses, 
        and unforgettable moments.
      </p>
      <p className="mb-4">
        Our tournament features multiple rounds of competitive play, professional scoring, 
        and extensive practice facilities. Players will have access to premium amenities 
        and expert staff throughout the event.
      </p>
      <p>
        Whether you're a seasoned professional or an ambitious amateur, this tournament 
        offers the perfect platform to showcase your skills and compete against top talent. 
        Don't miss this opportunity to be part of a prestigious golfing event.
      </p>
    </div>
  ),
  image: {
    src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=3270&auto=format&fit=crop",
    alt: "Tournament highlights",
  },
  stats: [
    { label: "Players", value: "144+" },
    { label: "Prize Pool", value: "$50K" },
    { label: "Rounds", value: "4" },
  ]
};

const Content2 = (props) => {
  const { heading, children, image, stats } = {
    ...Content2Defaults,
    ...props,
  };

  return (
    <section id="tournament-content" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img 
                src={image.src} 
                className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" 
                alt={image.alt} 
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl font-bold text-white md:text-3xl">{stat.value}</p>
                      <p className="text-sm text-white/80">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold text-black md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <div className="prose prose-lg prose-black">
              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

Content2.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }),
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

export default Content2;
