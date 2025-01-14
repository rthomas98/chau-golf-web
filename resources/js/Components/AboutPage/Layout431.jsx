import React from "react";
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";

export const Layout431 = (props) => {
  const { tagline, heading, description, buttons, firstImage, secondImage } = {
    ...Layout431Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-white via-pearlbush to-merino">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-md">
            <p className="mb-3 font-semibold text-chaugreen md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-5xl font-bold text-darkerviridiangreen md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-end gap-x-16 gap-y-12 md:grid-cols-[1fr_0.75fr]">
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src={firstImage.src} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
                alt={firstImage.alt} 
              />
            </div>
            <div className="mt-[25%] overflow-hidden rounded-xl shadow-lg">
              <img 
                src={secondImage.src} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
                alt={secondImage.alt} 
              />
            </div>
          </div>
          <div>
            <div className="ml-[5%] mr-[10%]">
              <p className="text-darkviridiangreen md:text-lg">{description}</p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Layout431.propTypes = {
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
  firstImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  }),
  secondImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  })
};

export const Layout431Defaults = {
  tagline: "Our Venues",
  heading: "Premium Golf Experiences",
  description:
    "Experience golf at its finest with our carefully selected championship courses and world-class facilities. Each venue is chosen to provide the perfect blend of challenge and enjoyment for players of all skill levels.",

  firstImage: {
    src: "/images/ChauChau/pexels-mickhaupt-5644645.jpg",
    alt: "Championship golf course",
  },
  secondImage: {
    src: "/images/ChauChau/pexels-jopwell-1325681.jpg",
    alt: "Golf course facilities",
  },
};
