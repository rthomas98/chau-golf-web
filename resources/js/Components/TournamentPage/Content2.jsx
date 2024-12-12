import React from "react";
import PropTypes from "prop-types";

const Content2Defaults = {
  heading: "Tournament Details",
  children: (
    <div>
      <p>
        Join us for an exceptional golf tournament that combines professional competition with 
        the spirit of sportsmanship. Experience world-class facilities, challenging courses, 
        and unforgettable moments.
      </p>
      <p>
        Our tournament features multiple rounds of competitive play, professional scoring, 
        and extensive practice facilities. Players will have access to premium amenities 
        and expert staff throughout the event.
      </p>
      <p>
        Whether you're a seasoned professional or an ambitious amateur, this tournament 
        offers the perfect platform to showcase your skills and compete against top talent. 
        Don't miss this opportunity to be part of a prestigious golfing event.
      </p>
    </div>
  ),
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Tournament highlights",
  },
};

const Content2 = (props) => {
  const { heading, children, image } = {
    ...Content2Defaults,
    ...props,
  };

  return (
    <section id="tournament-content" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <img 
              src={image.src} 
              className="w-full object-cover rounded-lg shadow-lg" 
              alt={image.alt} 
            />
          </div>
          <div>
            <h2 className="mb-5 text-5xl font-bold text-darkviridiangreen md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <div className="prose prose-lg prose-darkviridiangreen">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content2.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }),
};

export default Content2;
