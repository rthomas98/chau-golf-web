import React from "react";
import PropTypes from "prop-types";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "framer-motion";
import { Trophy, CalendarDays, Handshake } from "lucide-react";

export const Features = (props) => {
  const { tagline, heading, description, sections, buttons } = {
    ...FeaturesDefaults,
    ...props,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const renderIcon = (iconName) => {
    const iconProps = {
      className: "size-8 text-tahitigold",
      strokeWidth: 1.5
    };

    switch (iconName) {
      case 'trophy':
        return <Trophy {...iconProps} />;
      case 'calendar':
        return <CalendarDays {...iconProps} />;
      case 'handshake':
        return <Handshake {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-lowviridiangreen px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <motion.div 
            className="rb-12 mb-12 md:mb-18 lg:mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold text-tahitigold md:mb-4">{tagline}</p>
              <h2 className="mb-5 text-5xl font-bold text-black md:mb-6 md:text-7xl lg:text-8xl">
                {heading}
              </h2>
              <p className="text-darkviridiangreen md:text-lg">{description}</p>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {sections.map((section, index) => (
              <motion.div 
                key={index} 
                className="flex w-full flex-col"
                variants={itemVariants}
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-lg bg-white p-3 shadow-lg ring-1 ring-viridiangreen/10 md:mb-6">
                  {renderIcon(section.iconName)}
                </div>
                <h3 className="mb-5 text-2xl font-bold text-tahitigold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {section.heading}
                </h3>
                <p className="text-darkviridiangreen">{section.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`flex items-center gap-2 rounded-md px-6 py-3 font-medium transition-colors ${
                  button.variant === "secondary"
                    ? "border-2 border-tahitigold text-tahitigold hover:bg-tahitigold hover:text-white"
                    : button.variant === "link"
                    ? "text-tahitigold hover:text-tahitigold/80"
                    : "bg-tahitigold text-white hover:bg-tahitigold/90"
                }`}
              >
                {button.title}
                {button.variant === "link" && <RxChevronRight className="h-5 w-5" />}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

Features.propTypes = {
  tagline: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string,
      heading: PropTypes.string,
      description: PropTypes.string
    })
  ),
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      variant: PropTypes.oneOf(["primary", "secondary", "link"])
    })
  )
};

export const FeaturesDefaults = {
  tagline: "Why Choose Us",
  heading: "Elevate Your Golf Journey",
  description:
    "We offer comprehensive solutions to enhance your golfing experience, from expert instruction to premium equipment and exclusive events.",
  sections: [
    {
      iconName: "trophy",
      heading: "Expert Instruction",
      description:
        "Learn from certified golf professionals who provide personalized coaching to improve your technique and game strategy.",
    },
    {
      iconName: "calendar",
      heading: "Exclusive Events",
      description:
        "Participate in members-only tournaments, social gatherings, and networking events designed for golf enthusiasts.",
    },
    {
      iconName: "handshake",
      heading: "Premium Equipment",
      description:
        "Access high-quality golf equipment and accessories through our partnerships with leading brands in the industry.",
    },
  ],
  buttons: [
    { title: "View All Features", variant: "secondary" },
    {
      title: "Learn More",
      variant: "link",
    },
  ],
};
