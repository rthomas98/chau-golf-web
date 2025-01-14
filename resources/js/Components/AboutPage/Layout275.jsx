import React from "react";
import PropTypes from "prop-types";
import { ChevronRight, Trophy, Users, Target, Calendar } from "lucide-react";

const SECTION_ICONS = {
  trophy: Trophy,
  users: Users,
  target: Target,
  calendar: Calendar
};

export const Layout275 = (props) => {
  const { sections, image, tagline, heading, description, buttons } = {
    ...Layout275Defaults,
    ...props,
  };
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 max-w-lg text-start text-white md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-chaugreen md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-lg">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {sections.map((section, index) => {
            const IconComponent = SECTION_ICONS[section.icon];
            return (
              <div key={index} className="flex w-full gap-6">
                <div className="mb-5 flex size-12 flex-none items-center justify-center rounded-lg bg-white/20 self-start md:mb-6">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {section.heading}
                  </h3>
                  <p className="text-white/90">{section.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 flex flex-wrap justify-start gap-4 md:mt-18 lg:mt-20">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-colors ${
                index === 0
                  ? 'bg-chaugreen text-white hover:bg-chaugreen/80'
                  : 'text-white hover:text-chaugreen'
              }`}
            >
              {button.title}
              {button.iconRight && <ChevronRight className="h-4 w-4" />}
            </a>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
        <div className="absolute inset-0 bg-darkerviridiangreen/80" />
      </div>
    </section>
  );
};

Layout275.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.oneOf(['trophy', 'users', 'target', 'calendar']).isRequired
    })
  ),
  tagline: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      iconRight: PropTypes.bool
    })
  ),
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  })
};

export const Layout275Defaults = {
  sections: [
    {
      heading: "Tournament Organization",
      description:
        "We specialize in organizing professional-grade golf tournaments that cater to players of all skill levels, ensuring fair competition and memorable experiences.",
      icon: "trophy"
    },
    {
      heading: "Exclusive Community Building",
      description:
        "Our events foster a strong sense of community, bringing together golf enthusiasts who share a passion for the sport and competitive spirit.",
      icon: "users"
    },
    {
      heading: "Skill Development Programs",
      description:
        "Through our tournaments and events, players can develop their skills, learn from others, and track their progress in a competitive environment.",
      icon: "target"
    }
  ],
  tagline: "Why Choose Us",
  heading: "Excellence in Golf Event Management",
  description:
    "We bring years of experience in organizing and managing golf tournaments that combine professional standards with a welcoming atmosphere for all participants.",
  image: {
    src: "/images/ChauChau/pexels-mikhail-nilov-9207742.jpg",
    alt: "Professional golf tournament",
  },
  buttons: [
    { 
      title: "Events Coming Soon"
    },
    {
      title: "Learn More",
      iconRight: true
    }
  ]
};
