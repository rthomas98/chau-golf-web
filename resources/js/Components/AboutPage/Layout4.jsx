import React from "react";
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";

export const Layout4 = (props) => {
  const { tagline, heading, description, buttons, image, subHeadings } = {
    ...Layout4Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-pearlbush via-merino to-pearlbush">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-chaugreen md:mb-4">{tagline}</p>
            <h1 className="mb-5 text-5xl font-bold text-darkerviridiangreen md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h1>
            <p className="mb-6 text-darkviridiangreen md:mb-8 md:text-lg">{description}</p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {subHeadings.map((subHeading, index) => (
                <div key={index} className="bg-white/50 p-6 rounded-lg border border-viridiangreen/10">
                  <h6 className="mb-3 text-lg font-bold leading-[1.4] text-viridiangreen md:mb-4 md:text-xl">
                    {subHeading.title}
                  </h6>
                  <p className="text-darkviridiangreen">{subHeading.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={`flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-colors ${
                    index === 0
                      ? 'bg-chaugreen text-white hover:bg-chaugreen/80'
                      : 'text-chaugreen hover:text-chaugreen/80 flex items-center gap-1'
                  }`}
                >
                  {button.title}
                  {button.iconRight && <ChevronRight className="h-4 w-4" />}
                </a>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img src={image.src} className="w-full object-cover" alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

Layout4.propTypes = {
  tagline: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  subHeadings: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ),
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      iconRight: PropTypes.bool
    })
  ),
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  })
};

export const Layout4Defaults = {
  tagline: "Our Philosophy",
  heading: "Elevating Golf Events",
  description:
    "At Chau Chau Golf Events, we believe in creating exceptional tournament experiences that combine professional standards with a welcoming community atmosphere.",
  subHeadings: [
    {
      title: "Professional Excellence",
      description:
        "Our tournaments are managed with meticulous attention to detail, ensuring a smooth and enjoyable experience for all participants.",
    },
    {
      title: "Community Spirit",
      description:
        "We foster a vibrant golf community where players can connect, compete, and grow together in their passion for the game.",
    },
  ],
  buttons: [
    { title: "Join Our Community", href: "/register" },
    
  ],
  image: {
    src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=2070",
    alt: "Golf tournament experience",
  },
};
