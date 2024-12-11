import React from "react";
import PropTypes from "prop-types";

const Button = ({ variant = "primary", children, ...props }) => {
  const baseClasses = "px-6 py-3 font-semibold rounded-lg transition-colors";
  const variants = {
    primary: "bg-tahitigold text-white hover:bg-midtahitigold",
    "secondary-alt": "bg-white/10 text-white hover:bg-white/20",
    outline: "border-2 border-white text-white hover:bg-white/10"
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export const Cta9 = (props) => {
  const { heading, description, buttons, image } = {
    ...Cta9Defaults,
    ...props,
  };
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid w-full grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full max-w-lg">
            <h2 className="mb-3 text-4xl font-bold leading-[1.2] text-white md:mb-4 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="text-white/90 md:text-md">{description}</p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
        <div className="absolute inset-0 bg-darkerviridiangreen/70" />
      </div>
    </section>
  );
};

Cta9.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      variant: PropTypes.oneOf(["primary", "secondary-alt", "outline"]),
      onClick: PropTypes.func
    })
  ),
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  })
};

export const Cta9Defaults = {
  heading: "Ready to Join Our Next Tournament?",
  description: "Register now to secure your spot in our upcoming championship events. Early registration benefits available.",
  buttons: [
    { 
      title: "Register Now",
      onClick: () => console.log("Register clicked")
    },
    { 
      title: "View Schedule",
      variant: "secondary-alt",
      onClick: () => console.log("Schedule clicked")
    }
  ],
  image: {
    src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=2070",
    alt: "Golf tournament action shot",
  },
};
