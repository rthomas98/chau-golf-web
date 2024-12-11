import React from "react";
import PropTypes from "prop-types";
import { ChevronRight, Trophy, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

export const Benefits = (props) => {
  const { image, featureSections } = { ...BenefitsDefaults, ...props };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      x: -20
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const renderIcon = (iconName) => {
    const iconProps = { className: "h-12 w-12 text-tahitigold" };
    switch (iconName) {
      case "trophy":
        return <Trophy {...iconProps} />;
      case "users":
        return <Users {...iconProps} />;
      case "target":
        return <Target {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-lowmerino px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <motion.img 
                src={image.src} 
                className="w-full object-cover" 
                alt={image.alt}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
              {featureSections.map((section, index) => (
                <motion.div 
                  key={index} 
                  className="flex self-start"
                  variants={itemVariants}
                >
                  <div className="mr-6 flex-none self-start">
                    <div className="rounded-lg bg-lowtahitigold p-3">
                      {renderIcon(section.icon)}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-darkerviridiangreen md:mb-4 md:text-2xl">
                      {section.heading}
                    </h3>
                    <p className="text-darkviridiangreen">{section.description}</p>
                    <div className="mt-5 flex items-center gap-x-4 md:mt-6">
                      {section.buttons.map((button, index) => (
                        <button
                          key={index}
                          className="flex items-center gap-2 text-tahitigold transition-colors hover:text-midtahitigold"
                          onClick={button.onClick}
                        >
                          {button.title}
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

Benefits.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  }),
  featureSections: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      buttons: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          onClick: PropTypes.func
        })
      )
    })
  )
};

export const BenefitsDefaults = {
  image: {
    src: "/images/golf-benefits.jpg",
    alt: "Professional golf tournament experience",
  },
  featureSections: [
    {
      icon: "trophy",
      heading: "Professional Tournament Organization",
      description: "Experience meticulously planned tournaments with professional scoring systems, live leaderboards, and expert course management.",
      buttons: [
        {
          title: "View Tournament Schedule",
        },
      ],
    },
    {
      icon: "users",
      heading: "Vibrant Golf Community",
      description: "Connect with fellow golf enthusiasts, share experiences, and participate in exclusive member-only events and networking opportunities.",
      buttons: [
        {
          title: "Join Our Community",
        },
      ],
    },
    {
      icon: "target",
      heading: "Skill Development Programs",
      description: "Access specialized training programs, workshops, and resources designed to help you improve your game and reach your golfing goals.",
      buttons: [
        {
          title: "Explore Programs",
        },
      ],
    },
  ],
};
