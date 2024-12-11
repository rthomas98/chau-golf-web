import React from "react";
import PropTypes from "prop-types";

export const Layout3 = (props) => {
  const { heading, description, image } = {
    ...Layout3Defaults,
    ...props,
  };
  return (
    <section className="bg-gradient-to-br from-lowtahitigold/20 to-lowviridiangreen/20 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-4xl font-bold text-darkerviridiangreen md:mb-6 md:text-5xl lg:text-6xl">
              <span className="text-tahitigold">{heading.split(' ')[0]}</span>{' '}
              {heading.split(' ').slice(1).join(' ')}
            </h1>
            <p className="text-darkviridiangreen md:text-lg">{description}</p>
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image.src} 
              className="h-full w-full object-cover" 
              alt={image.alt} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Layout3.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  })
};

export const Layout3Defaults = {
  heading: "Experience Golf Like Never Before",
  description:
    "Join our vibrant golf community where passion meets excellence. Whether you're a beginner or a seasoned pro, our world-class facilities and expert instruction will help elevate your game to new heights.",
  image: {
    src: "https://images.unsplash.com/photo-1535132011086-b8818f016104?auto=format&fit=crop&q=80&w=2070",
    alt: "Professional golf course with stunning landscape",
  },
};
