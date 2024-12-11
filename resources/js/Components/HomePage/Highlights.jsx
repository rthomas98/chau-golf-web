import React from "react";
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const Highlights = (props) => {
  const { sections } = { ...HighlightsDefaults, ...props };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <motion.div 
          className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sections.map((section, index) => (
            <motion.div 
              key={index} 
              className="group flex flex-col items-center justify-start text-center"
              variants={itemVariants}
            >
              <div className="mb-6 overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 group-hover:shadow-xl md:mb-8">
                <motion.img 
                  src={section.image.src} 
                  alt={section.image.alt}
                  className="aspect-video w-full object-cover"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold text-darkerviridiangreen md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {section.heading}
              </h3>
              <p className="text-darkviridiangreen">{section.description}</p>
              <div className="mt-6 flex gap-4 md:mt-8">
                <button
                  className="flex items-center gap-2 text-tahitigold transition-colors hover:text-midtahitigold"
                  onClick={section.button.onClick}
                >
                  {section.button.title}
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

Highlights.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string
      }),
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      button: PropTypes.shape({
        title: PropTypes.string.isRequired,
        variant: PropTypes.string,
        onClick: PropTypes.func
      })
    })
  )
};

export const HighlightsDefaults = {
  sections: [
    {
      image: {
        src: "/images/tournament.jpg",
        alt: "Golf tournament in action",
      },
      heading: "Experience Thrilling Tournaments",
      description:
        "Join our expertly organized golf tournaments designed for players of all skill levels. Compete, improve, and enjoy the camaraderie of fellow golf enthusiasts.",
      button: {
        title: "View Tournament Schedule",
        variant: "link",
      },
    },
    {
      image: {
        src: "/images/membership.jpg",
        alt: "Exclusive golf club benefits",
      },
      heading: "Exclusive Member Benefits",
      description:
        "Unlock premium perks with our membership program. Enjoy priority access to events, special discounts, and connect with a community of passionate golfers.",
      button: {
        title: "Explore Membership Options",
        variant: "link",
      },
    },
  ],
};
