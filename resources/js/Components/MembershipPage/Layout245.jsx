import React from "react";
import PropTypes from "prop-types";
import { ChevronRight, Award, Users, Clock, Trophy } from "lucide-react";

const Button = ({ variant = "primary", children, size, iconRight, ...props }) => {
  const baseClasses = "px-6 py-3 font-semibold rounded-lg transition-colors";
  const variants = {
    primary: "bg-tahitigold text-white hover:bg-midtahitigold",
    secondary: "bg-viridiangreen text-white hover:bg-darkviridiangreen",
    link: "text-tahitigold hover:text-midtahitigold p-0 flex items-center gap-2"
  };

  const sizeClasses = size === "link" ? "" : baseClasses;

  return (
    <button className={`${sizeClasses} ${variants[variant]}`} {...props}>
      {children}
      {iconRight && iconRight}
    </button>
  );
};

const IconWrapper = ({ icon: Icon }) => (
  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-lowtahitigold md:mb-6">
    <Icon className="h-6 w-6 text-tahitigold" />
  </div>
);

export const Layout245 = (props) => {
  const { tagline, heading, description, sections, buttons } = {
    ...Layout245Defaults,
    ...props,
  };
  return (
    <section id="relume" className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold text-tahitigold md:mb-4">{tagline}</p>
              <h2 className="text-5xl font-bold text-darkerviridiangreen md:text-7xl lg:text-8xl">{heading}</h2>
            </div>
            <p className="text-darkviridiangreen md:text-md">{description}</p>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {sections.map((section, index) => (
              <div key={index}>
                <IconWrapper icon={section.icon} />
                <h3 className="mb-5 text-2xl font-bold text-darkerviridiangreen md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {section.heading}
                </h3>
                <p className="text-darkviridiangreen">{section.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Layout245.propTypes = {
  tagline: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      variant: PropTypes.oneOf(["primary", "secondary", "link"]),
      size: PropTypes.string,
      iconRight: PropTypes.element,
      onClick: PropTypes.func
    })
  )
};

export const Layout245Defaults = {
  tagline: "Membership Benefits",
  heading: "Why Join Our Club?",
  description:
    "Our membership program offers an unparalleled golfing experience with exclusive benefits designed to enhance your game and lifestyle. From priority access to world-class facilities to special member events, we've crafted a membership that delivers exceptional value.",
  sections: [
    {
      icon: Award,
      heading: "Premium Access",
      description:
        "Enjoy priority tee times, exclusive access to member-only events, and special privileges at our championship golf course and premium facilities.",
    },
    {
      icon: Users,
      heading: "Vibrant Community",
      description:
        "Join a community of passionate golfers. Participate in member tournaments, social events, and networking opportunities throughout the year.",
    },
    {
      icon: Clock,
      heading: "Flexible Options",
      description:
        "Choose from various membership categories designed to fit your lifestyle, whether you're an individual, family, or corporate member.",
    },
  ],
  buttons: [
    { 
      title: "View Membership Plans", 
      variant: "secondary" 
    },
    {
      title: "Learn More",
      variant: "link",
      size: "link",
      iconRight: <ChevronRight className="h-5 w-5" />,
    },
  ],
};
