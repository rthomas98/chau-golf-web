import React from "react";
import PropTypes from "prop-types";

export const Cta7 = (props) => {
  const { heading, description, buttons } = {
    ...Cta7Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-chaugreen">
      <div className="container mx-auto grid w-full grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full max-w-lg">
            <h2 className="mb-3 text-4xl font-bold leading-[1.2] text-white md:mb-4 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="text-white/90 md:text-lg">{description}</p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`rounded-lg px-6 py-3 font-semibold transition-colors ${
                index === 0
                  ? 'bg-chaugreen text-white hover:bg-chaugreen/80'
                  : 'bg-white text-viridiangreen hover:bg-pearlbush'
              }`}
            >
              {button.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

Cta7.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      onClick: PropTypes.func
    })
  )
};

export const Cta7Defaults = {
  heading: "Ready to Join Our Golf Community?",
  description: "Experience premier golf tournaments and events designed for players of all skill levels.",
  buttons: [
    { 
      title: "Join Now",
      href: "membership",
    }, 
    { 
      title: "Learn More",
      heref: "about",
    }
  ],
};
