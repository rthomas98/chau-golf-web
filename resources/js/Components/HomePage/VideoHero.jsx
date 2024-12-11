import React from "react";
import PropTypes from "prop-types";
import { ChevronRight, Trophy, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

export const VideoHero = (props) => {
  const { sections, tagline, heading, description, buttons, video, videoType } = {
    ...VideoHeroDefaults,
    ...props,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    const iconProps = { className: "h-12 w-12 text-white" };
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
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <motion.div 
          className="mb-12 max-w-lg text-start text-white md:mb-18 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            className="mb-3 font-semibold text-tahitigold md:mb-4"
            variants={itemVariants}
          >
            {tagline}
          </motion.p>
          <motion.h2 
            className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl"
            variants={itemVariants}
          >
            {heading}
          </motion.h2>
          <motion.p 
            className="md:text-md text-highpearlbush"
            variants={itemVariants}
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sections.map((section, index) => (
            <motion.div 
              key={index} 
              className="w-full"
              variants={itemVariants}
            >
              <div className="mb-5 inline-block rounded-lg bg-white/10 p-3 backdrop-blur-sm md:mb-6">
                {renderIcon(section.icon)}
              </div>

              <div>
                <h3 className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {section.heading}
                </h3>
                <p className="text-highpearlbush">
                  {section.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 flex flex-wrap gap-4 md:mt-18 lg:mt-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {buttons.map((button, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              className={
                index === 0
                  ? "rounded-lg bg-tahitigold px-6 py-3 font-semibold text-white transition-colors hover:bg-midtahitigold"
                  : "flex items-center gap-2 text-white transition-colors hover:text-highpearlbush"
              }
              onClick={button.onClick}
            >
              {button.title}
              {index !== 0 && <ChevronRight className="h-5 w-5" />}
            </motion.button>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {video ? (
          <>
            <video 
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src={video} type={videoType} />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
          </>
        ) : (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("/images/golf-course.jpg")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
          </>
        )}
      </div>
    </section>
  );
};

VideoHero.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ),
  tagline: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      onClick: PropTypes.func
    })
  ),
  video: PropTypes.string.isRequired,
  videoType: PropTypes.string.isRequired
};

export const VideoHeroDefaults = {
  sections: [
    {
      heading: "Professional Tournaments",
      description: "Experience the thrill of competitive golf in our meticulously organized tournaments designed for players of all skill levels.",
      icon: "trophy"
    },
    {
      heading: "Community Events",
      description: "Join our vibrant community of golf enthusiasts and participate in regular social events, networking opportunities, and friendly competitions.",
      icon: "users"
    },
    {
      heading: "Skill Development",
      description: "Improve your game with access to expert coaching, training resources, and specialized workshops tailored to your skill level.",
      icon: "target"
    }
  ],
  tagline: "Experience Golf Like Never Before",
  heading: "Where Passion Meets Competition",
  description: "Join ChauChau Golf for an unmatched tournament experience that combines professional organization with a welcoming community atmosphere.",
  video: "/videos/golf-hero.mp4",
  videoType: "video/mp4",
  buttons: [
    { 
      title: "Join Our Community",
    },
    {
      title: "View Upcoming Events",
    }
  ]
};
