import React from "react";
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";

const Button = ({ variant = "primary", children, size, iconRight, ...props }) => {
  const baseClasses = "px-6 py-3 font-semibold rounded-lg transition-colors";
  const buttonStyles = {
    primary: "bg-chaugreen text-white hover:bg-black",
    secondary: "bg-chaugreen text-white hover:bg-black",
    link: "text-chaugreen hover:text-black p-0 flex items-center gap-2"
  };

  const sizeClasses = size === "link" ? "" : baseClasses;

  return (
    <button className={`${sizeClasses} ${buttonStyles[variant]}`} {...props}>
      {children}
      {iconRight && iconRight}
    </button>
  );
};

export const Layout437 = (props) => {
  const { tagline, heading, description, buttons, firstImage, secondImage } = {
    ...Layout437Defaults,
    ...props,
  };

  return (
    <section id="relume" className="bg-gray px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-12 md:grid-cols-[1fr_0.5fr]">
          <div className="order-last flex flex-col justify-center md:order-first">
            <div className="grid grid-cols-[0.75fr_1fr] gap-6 sm:gap-8">
              <img
                src={firstImage.src}
                className="aspect-square w-full rounded-lg object-cover shadow-lg"
                alt={firstImage.alt}
              />
              <img
                src={secondImage.src}
                className="aspect-[2/3] w-full rounded-lg object-cover shadow-lg"
                alt={secondImage.alt}
              />
            </div>
          </div>
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="mb-3 font-semibold text-chaugreen md:mb-4">{tagline}</p>
              <h2 className="mb-5 text-5xl font-bold text-black md:mb-6 md:text-7xl lg:text-8xl">
                {heading}
              </h2>
            </div>
            <div className="ml-[7.5%]">
              <p className="text-black md:text-md">{description}</p>
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
      </div>
    </section>
  );
};

Layout437.propTypes = {
  tagline: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      variant: PropTypes.oneOf(["primary", "secondary", "link"]),
      size: PropTypes.string,
      iconRight: PropTypes.element,
      onClick: PropTypes.func
    })
  ),
  firstImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  }),
  secondImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  })
};

export const Layout437Defaults = {
  tagline: "Exclusive Membership",
  heading: "Join Our Golf Community",
  description:
    "Experience golf at its finest with our exclusive membership options. Enjoy priority access to tournaments, premium facilities, and a vibrant community of fellow golf enthusiasts.",
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
  firstImage: {
    src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=2070",
    alt: "Professional golfer making a perfect swing",
  },
  secondImage: {
    src: "https://images.unsplash.com/photo-1535132011086-b8818f016104?auto=format&fit=crop&q=80&w=2070",
    alt: "Golfer putting on a pristine green",
  },
};
