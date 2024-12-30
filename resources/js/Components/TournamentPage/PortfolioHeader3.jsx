import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const PortfolioHeader3Defaults = {
  heading: "Tournament name here",
  description: "Join us for an exceptional golf tournament experience.",
  tags: [
    {
      label: "Professional",
      url: "#professional",
    },
    {
      label: "Amateur",
      url: "#amateur",
    },
    {
      label: "Championship",
      url: "#championship",
    },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2970&auto=format&fit=crop",
    alt: "Tournament banner image",
  },
};

const PortfolioHeader3 = (props) => {
  const { heading, description, tags, image } = {
    ...PortfolioHeader3Defaults,
    ...props,
  };

  return (
    <section id="tournament-header" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-18 lg:mb-20"
        >
          <h1 className="mb-5 text-5xl font-bold text-black md:text-6xl lg:text-7xl">
            {heading}
          </h1>
          <p className="mb-6 text-lg text-black/70 md:text-xl">{description}</p>
          <ul className="flex flex-wrap justify-center gap-2">
            {tags.map((tag, index) => (
              <motion.li 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex"
              >
                <a
                  href={tag.url}
                  className="rounded-full bg-gray px-4 py-2 text-sm font-semibold text-black hover:bg-chaugreen hover:text-white transition-colors duration-200"
                >
                  {tag.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[21/9] w-full overflow-hidden rounded-lg">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

PortfolioHeader3.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }),
};

export default PortfolioHeader3;
