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
            <p className="mb-3 font-semibold text-tahitigold md:mb-4">{tagline}</p>
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
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    onClick={button.onClick}
                    className={`flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-colors ${
                      index === 0
                        ? 'bg-tahitigold text-white hover:bg-midtahitigold'
                        : 'text-tahitigold hover:text-midtahitigold flex items-center gap-1'
                    }`}
                  >
                    {button.title}
                    {button.iconRight && <ChevronRight className="h-4 w-4" />}
                  </button>
                ))}
              </div>
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
  buttons: [
    { title: "Explore Venues" },
    {
      title: "Book Now",
      iconRight: true
    }
  ],
  firstImage: {
    src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=2070",
    alt: "Championship golf course",
  },
  secondImage: {
    src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=2070",
    alt: "Golf course facilities",
  },
};
