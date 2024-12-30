import React from "react";
import PropTypes from "prop-types";
import { Trophy, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

export const Benefits = (props) => {
  const { image, featureSections } = { ...BenefitsDefaults, ...props };

  const renderIcon = (iconName) => {
    const iconProps = { className: "h-5 w-5 text-chaugreen" };
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
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            {featureSections.map((section, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gray p-2.5 shadow-lg md:mb-6">
                  {renderIcon(section.icon)}
                </div>
                <h3 className="mb-3 text-2xl font-bold text-darkerviridiangreen md:mb-4 md:text-3xl">
                  {section.heading}
                </h3>
                <p className="mb-4 text-darkviridiangreen md:mb-5">
                  {section.description}
                </p>
                <div className="flex gap-4">
                  {section.buttons.map((button, buttonIndex) => (
                    <button
                      key={buttonIndex}
                      className={`rounded-lg px-6 py-3 font-semibold transition-colors ${
                        button.variant === "primary"
                          ? "bg-chaugreen text-white hover:bg-black"
                          : "border-2 border-chaugreen text-chaugreen hover:bg-chaugreen hover:text-white"
                      }`}
                    >
                      {button.title}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
