import React from "react";
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";

const Button = ({ variant = "primary", children, size, iconRight, ...props }) => {
  const baseClasses = "px-6 py-3 font-semibold rounded-lg transition-colors";
  const variants = {
    primary: "bg-chaugreen text-white hover:bg-black",
    secondary: "bg-chaugreen text-white hover:bg-black",
    link: "text-chaugreen hover:text-black p-0 flex items-center gap-2"
  };

  const sizeClasses = size === "link" ? "" : baseClasses;

  return (
    <button className={`${sizeClasses} ${variants[variant]}`} {...props}>
      {children}
      {iconRight && iconRight}
    </button>
  );
};

export const Layout192 = (props) => {
  const { tagline, heading, description, buttons, image } = {
    ...Layout192Defaults,
    ...props,
  };
  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={image.src}
                className="w-full rounded-lg object-cover shadow-lg" 
                alt={image.alt} 
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 font-semibold text-chaugreen md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-5xl font-bold text-black md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="text-black/70 md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Layout192.propTypes = {
  tagline: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
};

export const Layout192Defaults = {
  tagline: "Member Benefits",
  heading: "Elevate Your Game",
  description:
    "Join our exclusive community of golf enthusiasts and experience the perfect blend of luxury, sport, and social connection. Our membership offers unparalleled access to premium facilities and exclusive events.",
  buttons: [
    { 
      title: "Join Now", 
      variant: "primary"
    },
    {
      title: "Learn More",
      variant: "link",
      size: "link",
      iconRight: <ChevronRight className="h-5 w-5" />
    },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2970&auto=format&fit=crop",
    alt: "Golfer at Chau Golf Club",
  },
};
