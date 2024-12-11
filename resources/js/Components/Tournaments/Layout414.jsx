import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useScroll, useTransform, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export const Layout414 = (props) => {
  const { tagline, heading, description, buttons, imagesPartOne, imagesPartTwo } = {
    ...Layout414Defaults,
    ...props,
  };

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const xPartOne = useTransform(scrollYProgress, [0, 1], ["1%", "5%"]);
  const xPartTwo = useTransform(scrollYProgress, [0, 1], ["-1%", "-5%"]);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden px-[5%] py-16 bg-gradient-to-b from-pearlbush to-merino md:py-24 lg:py-28"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold text-tahitigold md:mb-4">{tagline}</p>
              <h2 className="text-5xl font-bold text-darkerviridiangreen md:text-7xl lg:text-8xl">{heading}</h2>
            </div>
            <div>
              <p className="text-darkviridiangreen md:text-lg">{description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
          <div className="flex w-screen flex-col items-center gap-4 overflow-hidden">
            <motion.div
              className="flex size-full flex-nowrap items-center justify-center gap-4"
              style={{ translateX: xPartOne }}
            >
              {imagesPartOne.map((image, index) => (
                <div key={index} className="w-[40vw] flex-none overflow-hidden rounded-lg shadow-lg md:w-[30vw]">
                  <img
                    className="aspect-[4/3] w-full object-cover transform hover:scale-105 transition-transform duration-500"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              ))}
            </motion.div>
            <motion.div
              className="flex size-full flex-nowrap items-center justify-center gap-4"
              style={{ translateX: xPartTwo }}
            >
              {imagesPartTwo.map((image, index) => (
                <div key={index} className="w-[40vw] flex-none overflow-hidden rounded-lg shadow-lg md:w-[30vw]">
                  <img
                    className="aspect-[4/3] w-full object-cover transform hover:scale-105 transition-transform duration-500"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

Layout414.propTypes = {
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
  imagesPartOne: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string
    })
  ),
  imagesPartTwo: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string
    })
  )
};

export const Layout414Defaults = {
  tagline: "Tournament Highlights",
  heading: "Unforgettable Golf Moments",
  description:
    "Experience the thrill and prestige of our premier golf tournaments. From amateur competitions to professional events, we create memorable experiences for players of all skill levels.",
  buttons: [
    { title: "View Upcoming Tournaments" },
    { title: "Learn More", iconRight: true },
  ],
  imagesPartOne: [
    {
      src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=2070",
      alt: "Golf tournament action shot 1",
    },
    {
      src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=2070",
      alt: "Golf tournament action shot 2",
    },
    {
      src: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=2070",
      alt: "Golf tournament action shot 3",
    },
    {
      src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=2070",
      alt: "Golf tournament action shot 4",
    },
  ],
  imagesPartTwo: [
    {
      src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=2070",
      alt: "Golf tournament venue 1",
    },
    {
      src: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=2070",
      alt: "Golf tournament venue 2",
    },
    {
      src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=2070",
      alt: "Golf tournament venue 3",
    },
    {
      src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=2070",
      alt: "Golf tournament venue 4",
    },
  ],
};
