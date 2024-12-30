import React, { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";

const calculateScales = (totalSections, scrollYProgress) => {
  return Array.from({ length: totalSections }, (_, index) => {
    const sectionFraction = 1 / totalSections;
    const start = sectionFraction * index;
    const end = sectionFraction * (index + 1);

    return index < totalSections - 1
      ? useTransform(scrollYProgress, [start, end], [1, 0.8])
      : useMotionValue(1);
  });
};

const FeatureSectionContent = ({ isEven, ...featureSection }) => (
  <React.Fragment>
    <div
      className={clsx(
        "order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 bg-white",
        isEven ? "md:order-first" : "md:order-last"
      )}
    >
      <p className="mb-2 font-semibold text-chaugreen">{featureSection.tagline}</p>
      <h2 className="mb-5 text-4xl font-bold leading-[1.2] text-black md:mb-6 md:text-5xl lg:text-6xl">
        {featureSection.heading}
      </h2>
      <p className="text-black">{featureSection.description}</p>
      <div className="mt-6 flex items-center gap-x-4 md:mt-8">
        {featureSection.buttons.map((button, index) => (
          <button
            key={index}
            onClick={button.onClick}
            className={`flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-colors ${
              index === 0
                ? 'bg-chaugreen text-white hover:bg-black'
                : 'text-chaugreen hover:text-black flex items-center gap-1'
            }`}
          >
            {button.title}
            {button.iconRight && <ChevronRight className="h-4 w-4" />}
          </button>
        ))}
      </div>
    </div>
    <div
      className={clsx(
        "order-last flex flex-col items-center justify-center overflow-hidden",
        isEven ? "md:order-last" : "md:order-first"
      )}
    >
      <img 
        src={featureSection.image.src} 
        alt={featureSection.image.alt}
        className="w-full h-full object-cover"
      />
    </div>
  </React.Fragment>
);

const FeatureSection = ({ scale, index, ...featureSection }) => {
  const isMobile = window.innerWidth <= 767;
  const isEven = index % 2 === 0;

  return (
    <React.Fragment>
      {isMobile ? (
        <div className="static grid grid-cols-1 content-center overflow-hidden border border-chaugreen/20 bg-white">
          <FeatureSectionContent isEven={isEven} {...featureSection} />
        </div>
      ) : (
        <motion.div
          className="static grid grid-cols-1 content-center overflow-hidden border border-chaugreen/20 bg-white md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2"
          style={{ scale }}
        >
          <FeatureSectionContent isEven={isEven} {...featureSection} />
        </motion.div>
      )}
    </React.Fragment>
  );
};

export const Layout408 = (props) => {
  const { tagline, heading, description, featureSections } = {
    ...Layout408Defaults,
    ...props,
  };

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 60%"],
  });

  const scales = calculateScales(featureSections.length, scrollYProgress);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-b from-gray to-gray">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-chaugreen md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold text-black md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="text-black md:text-lg">{description}</p>
        </div>
        <div ref={containerRef} className="sticky top-0 grid grid-cols-1 gap-6 md:gap-0">
          {featureSections.map((featureSection, index) => (
            <FeatureSection key={index} {...featureSection} scale={scales[index]} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

Layout408.propTypes = {
  tagline: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  featureSections: PropTypes.arrayOf(
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

export const Layout408Defaults = {
  tagline: "Our Journey",
  heading: "Growing the Game",
  description: "Experience the evolution of golf tournament management through our innovative approach and dedication to excellence.",
  featureSections: [
    {
      tagline: "Professional Standards",
      heading: "Tournament Excellence",
      description:
        "Our tournaments are designed to provide a professional experience for players of all skill levels, with meticulous attention to every detail.",
      buttons: [
        { title: "View Tournaments" },
        {
          title: "Learn More",
          iconRight: true
        }
      ],
      image: {
        src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=2070",
        alt: "Professional golf tournament"
      }
    },
    {
      tagline: "Community Impact",
      heading: "Building Connections",
      description:
        "We create more than just tournaments - we build a community of passionate golfers who share our love for the sport and competitive spirit.",
      buttons: [
        { title: "Join Community" },
        {
          title: "See Events",
          iconRight: true
        }
      ],
      image: {
        src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=2070",
        alt: "Golf community event"
      }
    },
    {
      tagline: "Future Vision",
      heading: "Innovation in Golf",
      description:
        "We're constantly innovating to enhance the tournament experience, incorporating new technologies and methods to improve every aspect of our events.",
      buttons: [
        { title: "Explore Innovation" },
        {
          title: "Contact Us",
          iconRight: true
        }
      ],
      image: {
        src: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=2070",
        alt: "Modern golf technology"
      }
    }
  ]
};
