import React from "react";
import PropTypes from "prop-types";

const PortfolioHeader3Defaults = {
  heading: "Tournament name here",
  description: "Join us for an exceptional golf tournament experience.",
  tags: [
    {
      label: "Professional",
      url: "#professional",
    },
    {
      label: "Amateur",
      url: "#amateur",
    },
    {
      label: "Championship",
      url: "#championship",
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "Tournament banner image",
  },
};

const PortfolioHeader3 = (props) => {
  const { heading, description, tags, image } = {
    ...PortfolioHeader3Defaults,
    ...props,
  };

  return (
    <section id="tournament-header" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-6xl font-bold text-darkviridiangreen md:mb-6 md:text-9xl lg:text-10xl">
            {heading}
          </h1>
          <p className="md:text-md text-gray-600">{description}</p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2 md:mt-6">
            {tags.map((tag, index) => (
              <li key={index} className="flex">
                <a
                  href={tag.url}
                  className="bg-merino px-2 py-1 text-sm font-semibold text-darkviridiangreen hover:bg-tahitigold hover:text-white transition-colors duration-200"
                >
                  {tag.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

PortfolioHeader3.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }),
};

export default PortfolioHeader3;
