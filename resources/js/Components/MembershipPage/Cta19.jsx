import React from "react";
import PropTypes from "prop-types";

const Button = ({ variant = "primary", children, ...props }) => {
  const baseClasses = "px-6 py-3 font-semibold rounded-lg transition-colors";
  const variants = {
    primary: "bg-tahitigold text-white hover:bg-midtahitigold",
    secondary: "bg-transparent border-2 border-viridiangreen text-viridiangreen hover:bg-lowviridiangreen"
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export const Cta19 = (props) => {
  const { heading, description, buttons } = {
    ...Cta19Defaults,
    ...props,
  };
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold text-darkerviridiangreen md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="text-darkviridiangreen md:text-md">{description}</p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
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

Cta19.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.object),
};

export const Cta19Defaults = {
  heading: "Ready to Join?",
  description:
    "Take the first step towards becoming a member of Chau Golf Club. Contact us today to discuss membership options and begin your journey to exceptional golf.",
  buttons: [
    { 
      title: "Apply Now",
      variant: "primary"
    }, 
    { 
      title: "Contact Us",
      variant: "secondary"
    }
  ],
};
