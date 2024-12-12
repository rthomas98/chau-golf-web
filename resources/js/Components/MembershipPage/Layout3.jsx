import React from "react";
import PropTypes from "prop-types";

export const Layout3 = (props) => {
  const { heading, description, image } = {
    ...Layout3Defaults,
    ...props,
  };
  return (
    <section className="bg-lowviridiangreen px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-4xl font-bold text-darkerviridiangreen md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="md:text-md text-darkviridiangreen">{description}</p>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <img 
              src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=3270&auto=format&fit=crop" 
              className="w-full rounded-lg object-cover shadow-lg" 
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
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
};

export const Layout3Defaults = {
  heading: "Experience Golf Excellence at Chau Golf Club",
  description:
    "Welcome to Chau Golf Club, where tradition meets modern excellence. Our championship course offers a challenging yet rewarding experience for golfers of all skill levels, complemented by world-class facilities and exceptional service.",
  image: {
    src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=3270&auto=format&fit=crop",
    alt: "Aerial view of Chau Golf Club",
  },
};
