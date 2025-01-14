import React from "react";
import PropTypes from "prop-types";

export const Cta3 = (props) => {
  const { heading, description, buttons, image } = {
    ...Cta3Defaults,
    ...props,
  };
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="text-white/90 md:text-lg">{description}</p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            {buttons.map((button, index) => (
              <a 
                key={index} 
                href={button.href}
                className={`rounded-lg px-6 py-3 font-semibold transition-colors ${
                  index === 0 
                    ? 'bg-tahitigold hover:bg-midtahitigold text-white' 
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                } ${button.className || ''}`}
              >
                {button.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img 
          src={image.src} 
          className="size-full object-cover" 
          alt={image.alt} 
        />
        <div className="absolute inset-0 bg-darkerviridiangreen/70" />
      </div>
    </section>
  );
};

Cta3.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string,
      className: PropTypes.string
    })
  ),
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  })
};

export const Cta3Defaults = {
  heading: "Ready to Join Our Golf Community?",
  description:
    "Take the first step towards improving your game and joining a community of passionate golfers. Sign up today for exclusive access to events, training, and more.",
  buttons: [
    { 
      title: "Join Now",
      href: "#"
    }, 
    { 
      title: "Learn More",
      href: "#"
    }
  ],
  image: {
    src: "https://images.unsplash.com/photo-1611374243147-44a702c2d44c?auto=format&fit=crop&q=80&w=2070",
    alt: "Beautiful golf course at sunset",
  },
};
