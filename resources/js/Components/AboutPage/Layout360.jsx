import React from "react";
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";

export const Layout360 = (props) => {
  const { tagline, heading, description, sections } = {
    ...Layout360Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-b from-pearlbush to-merino">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold text-viridiangreen md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-5xl font-bold text-darkerviridiangreen md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-lg text-darkviridiangreen">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          {sections.map((section, index) => (
            <div key={index} className="overflow-hidden rounded-xl border border-viridiangreen/20 bg-white shadow-lg transition-transform hover:scale-[1.02]">
              <div className="p-6 md:p-8 lg:p-12">
                <p className="mb-2 text-sm font-semibold text-chaugreen">{section.tagline}</p>
                <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-darkerviridiangreen md:mb-6 md:text-5xl lg:text-6xl">
                  {section.heading}
                </h3>
                <p className="text-darkviridiangreen">{section.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  {section.buttons.map((button, index) => (
                    <a
                      key={index}
                      href={button.href}
                      className={`flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-colors ${
                        index === 0
                          ? 'bg-viridiangreen text-white hover:bg-darkviridiangreen'
                          : 'text-viridiangreen hover:text-darkviridiangreen'
                      }`}
                    >
                      {button.title}
                      {button.iconRight && <ChevronRight className="h-4 w-4" />}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex h-64 items-center justify-center overflow-hidden">
                <img
                  src={section.image.src}
                  className="h-full w-full object-cover"
                  alt={section.image.alt}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Layout360.propTypes = {
  tagline: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      tagline: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
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
    })
  )
};

export const Layout360Defaults = {
  tagline: "Our Services",
  heading: "What We Offer",
  description: "Discover our comprehensive range of golf tournament services designed to elevate your golfing experience.",
  sections: [
    {
      tagline: "Tournament Management",
      heading: "Professional Events",
      description:
        "We handle every aspect of tournament organization, from registration to scoring, ensuring a seamless experience for all participants.",
      buttons: [
        { title: "View Services" },
        {
          title: "Learn More",
          iconRight: true
        }
      ],
      image: {
        src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=2070",
        alt: "Golf tournament event"
      }
    },
    {
      tagline: "Player Experience",
      heading: "Premium Facilities",
      description:
        "Access to top-tier golf courses and facilities, complete with professional staff and amenities for an exceptional golfing experience.",
      buttons: [
        { title: "Explore Venues" },
        {
          title: "Contact Us",
          iconRight: true
        }
      ],
      image: {
        src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=2070",
        alt: "Golf course facilities"
      }
    }
  ]
};
