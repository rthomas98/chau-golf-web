import React from "react";
import PropTypes from "prop-types";
import { Trophy, Users, Calendar, Medal } from "lucide-react";

const IconWrapper = ({ icon: Icon }) => (
  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-lowtahitigold md:mb-4">
    <Icon className="h-6 w-6 text-tahitigold" />
  </div>
);

export const Layout12 = (props) => {
  const { heading, description, image, subHeadings } = {
    ...Layout12Defaults,
    ...props,
  };
  return (
    <section id="relume" className="bg-lowviridiangreen px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-4xl font-bold leading-[1.2] text-darkerviridiangreen md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="mb-6 text-darkviridiangreen md:mb-8 md:text-md">{description}</p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {subHeadings.map((subHeading, index) => (
                <div key={index}>
                  <IconWrapper icon={subHeading.icon} />
                  <h6 className="mb-3 text-md font-bold leading-[1.4] text-darkerviridiangreen md:mb-4 md:text-xl">
                    {subHeading.title}
                  </h6>
                  <p className="text-darkviridiangreen">{subHeading.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={image.src} className="w-full rounded-lg object-cover shadow-lg" alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

Layout12.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  subHeadings: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ),
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  })
};

export const Layout12Defaults = {
  heading: "Why Choose Our Tournaments?",
  description:
    "Our golf tournaments are designed to provide an exceptional experience for players of all skill levels. We combine professional organization with a welcoming atmosphere to create memorable competitions.",
  subHeadings: [
    {
      icon: Trophy,
      title: "Professional Standards",
      description:
        "Experience tournaments organized to PGA standards, with meticulous attention to rules and fair play.",
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description:
        "Join a welcoming community of golfers who share your passion for the game and competitive spirit.",
    },
    {
      icon: Calendar,
      title: "Year-Round Events",
      description:
        "Choose from a variety of tournaments throughout the year, each offering unique challenges and formats.",
    },
    {
      icon: Medal,
      title: "Recognition & Rewards",
      description:
        "Compete for prestigious awards, prizes, and the opportunity to build your golfing legacy.",
    },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=2070",
    alt: "Golf tournament awards ceremony",
  },
};
