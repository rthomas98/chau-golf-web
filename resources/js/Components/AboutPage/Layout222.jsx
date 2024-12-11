import React from "react";
import PropTypes from "prop-types";
import { ChevronRight, Trophy, Users, Target, Calendar } from "lucide-react";

const FEATURE_ICONS = {
  trophy: Trophy,
  users: Users,
  target: Target,
  calendar: Calendar
};

export const Layout222 = (props) => {
  const { image, features } = {
    ...Layout222Defaults,
    ...props,
  };
  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <img 
                src={image.src} 
                className="h-full w-full object-cover" 
                alt={image.alt} 
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              {features.map((feature, index) => {
                const IconComponent = FEATURE_ICONS[feature.icon];
                return (
                  <div key={index} className="group">
                    <div className="mb-3 md:mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-lowtahitigold">
                        <IconComponent className="h-6 w-6 text-tahitigold" />
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-darkerviridiangreen md:mb-4 md:text-2xl">
                      {feature.heading}
                    </h3>
                    <p className="text-darkviridiangreen">{feature.description}</p>
                    <div className="mt-5 flex items-center gap-x-4 md:mt-6">
                      {feature.buttons.map((button, index) => (
                        <button
                          key={index}
                          onClick={button.onClick}
                          className="flex items-center gap-2 text-tahitigold transition-colors group-hover:text-midtahitigold"
                        >
                          {button.title}
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Layout222.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  }),
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOf(['trophy', 'users', 'target', 'calendar']).isRequired,
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

export const Layout222Defaults = {
  image: {
    src: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=2070",
    alt: "Golf club facilities",
  },
  features: [
    {
      icon: 'trophy',
      heading: "Premier Tournaments",
      description:
        "Experience the thrill of competition in our professionally organized golf tournaments, designed for players of all skill levels.",
      buttons: [
        {
          title: "View Tournaments"
        },
      ],
    },
    {
      icon: 'users',
      heading: "Vibrant Community",
      description:
        "Join a passionate community of golf enthusiasts who share your love for the game and commitment to excellence.",
      buttons: [
        {
          title: "Meet Our Members"
        },
      ],
    },
    {
      icon: 'target',
      heading: "Skill Development",
      description:
        "Access expert instruction and training resources to improve your game and achieve your golfing goals.",
      buttons: [
        {
          title: "Learn More"
        },
      ],
    },
    {
      icon: 'calendar',
      heading: "Regular Events",
      description:
        "Participate in our regular events, from casual meetups to structured competitions, designed to keep you engaged.",
      buttons: [
        {
          title: "View Calendar"
        },
      ],
    },
  ],
};
