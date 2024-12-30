import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, useAnimationControls } from "framer-motion";

export const Header = (props) => {
  const { heading, description, buttons, images } = {
    ...HeaderDefaults,
    ...props,
  };

  const controls = useAnimationControls();

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: "-100%",
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };
    
    startAnimation();
  }, [controls]);

  // Double the images array to create seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section id="hero" className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="text-6xl font-bold text-black md:text-8xl lg:text-9xl max-w-4xl mb-8"
          >
            {heading}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2 
            }}
            className="text-lg text-black/90 md:text-xl max-w-2xl mb-8"
          >
            {description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.4 
            }}
            className="flex flex-wrap justify-center gap-4"
          >
            {buttons.map((button, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={`rounded-lg px-6 py-3 font-semibold transition-colors ${
                  button.variant === "secondary"
                    ? "border-2 border-chaugreen text-chaugreen hover:bg-chaugreen hover:text-white"
                    : "bg-chaugreen text-white hover:bg-black"
                }`}
              >
                {button.title}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <motion.div 
            className="flex gap-6"
            animate={controls}
          >
            {duplicatedImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative min-w-[calc(33.333%-1rem)] aspect-[4/3]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1 
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 h-full w-full object-cover rounded-xl shadow-lg"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
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
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string
    })
  )
};

export const HeaderDefaults = {
  heading: "Experience Golf Like Never",
  description:
    "Join our exclusive golf community and elevate your game with access to premier courses, expert instruction, and a network of passionate golfers.",
  buttons: [
    { title: "Join Now", variant: "primary" }, 
    { title: "Learn More", variant: "secondary" }
  ],
  images: [
    {
      src: "/images/golf-sunset.jpg",
      alt: "Golfer at sunset on a beautiful course",
    },
    {
      src: "/images/golf-course.jpg",
      alt: "Scenic golf course view",
    },
    {
      src: "/images/golf-player.jpg",
      alt: "Professional golfer in action",
    },
    {
      src: "/images/tournament.jpg",
      alt: "Tournament action shot",
    },
    {
      src: "/images/membership.jpg",
      alt: "Golf club membership benefits",
    },
    {
      src: "/images/golf-benefits.jpg",
      alt: "Golf lifestyle benefits",
    }
  ]
};
