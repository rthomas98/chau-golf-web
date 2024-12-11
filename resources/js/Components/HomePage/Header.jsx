import { useState } from "react";
import PropTypes from "prop-types";
import { motion, easeOut } from "framer-motion";

export const Header = (props) => {
  const { heading, description, buttons, firstImage, secondImage, thirdImage } = {
    ...HeaderDefaults,
    ...props,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="bg-viridiangreen px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-12 lg:mb-20 lg:gap-20">
          <h1 className="text-6xl font-bold text-white md:text-8xl lg:text-9xl">{heading}</h1>
          <div className="mx-[7.5%] flex flex-col justify-end md:mt-48">
            <p className="text-lg text-white/90 md:text-xl">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={`rounded-md px-6 py-3 font-medium transition-colors ${
                    button.variant === "secondary"
                      ? "border-2 border-white text-white hover:bg-white hover:text-viridiangreen"
                      : "bg-tahitigold text-white hover:bg-tahitigold/90"
                  }`}
                >
                  {button.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-[1fr_1.5fr_1fr] items-start gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mt-[70%] w-full" variants={imageVariants}>
            <motion.img
              className="aspect-square size-full rounded-lg object-cover shadow-lg ring-2 ring-white/10"
              src={firstImage.src}
              alt={firstImage.alt}
              whileHover={{ 
                scale: 1.05,
                transition: { 
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
            />
          </motion.div>
          <motion.div className="w-full" variants={imageVariants}>
            <motion.img
              className="aspect-[2/3] size-full rounded-lg object-cover shadow-lg ring-2 ring-white/10"
              src={secondImage.src}
              alt={secondImage.alt}
              whileHover={{ 
                scale: 1.05,
                transition: { 
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
            />
          </motion.div>
          <motion.div className="w-full" variants={imageVariants}>
            <motion.img
              className="aspect-[2/3] size-full rounded-lg object-cover shadow-lg ring-2 ring-white/10"
              src={thirdImage.src}
              alt={thirdImage.alt}
              whileHover={{ 
                scale: 1.05,
                transition: { 
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

Header.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      variant: PropTypes.oneOf(["primary", "secondary"])
    })
  ),
  firstImage: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  }),
  secondImage: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  }),
  thirdImage: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  })
};

export const HeaderDefaults = {
  heading: "Experience Golf Like Never",
  description:
    "Join our exclusive golf community and elevate your game with access to premier courses, expert instruction, and a network of passionate golfers.",
  buttons: [
    { title: "Join Now", variant: "primary" }, 
    { title: "Learn More", variant: "secondary" }
  ],
  firstImage: {
    src: "/images/golf-1.jpg",
    alt: "Golfer teeing off at sunset",
  },
  secondImage: {
    src: "/images/golf-2.jpg",
    alt: "Beautiful golf course landscape",
  },
  thirdImage: {
    src: "/images/golf-3.jpg",
    alt: "Professional golf instruction",
  },
};
