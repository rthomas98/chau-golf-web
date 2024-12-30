import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TimelineEvent = ({ event, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="relative"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-chaugreen ring-4 ring-white">
          <div className="h-2 w-2 rounded-full bg-white"></div>
        </div>
      </div>
      {/* Connecting Lines */}
      {index > 0 && (
        <div className="absolute left-1/2 top-[-4rem] h-16 w-px -translate-x-1/2 bg-gray/20" />
      )}
      <div className={`grid grid-cols-2 items-center gap-8 ${index % 2 === 0 ? '' : 'direction-rtl'}`}>
        <div className={index % 2 === 0 ? 'text-right' : 'order-2'}>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={controls}
            variants={{
              visible: {
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.3 }
              }
            }}
            className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={event.image?.src || "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=3270&auto=format&fit=crop"}
              alt={event.image?.alt || "Golf course"}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </div>
        <motion.div 
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 }
            }
          }}
          initial={{ opacity: 0, y: 20 }}
          className={index % 2 === 0 ? 'pl-8' : 'pr-8 order-1 text-right'}
        >
          <p className="mb-1 text-sm font-semibold text-chaugreen">{event.time}</p>
          <h3 className="mb-2 text-xl font-bold text-black">{event.title}</h3>
          <p className="text-black/70">{event.description}</p>
          <div className={`mt-3 flex items-center gap-2 text-sm text-black/50 ${
            index % 2 === 0 ? '' : 'justify-end'
          }`}>
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                clipRule="evenodd"
              />
            </svg>
            {event.location}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Timeline13 = ({ tournament }) => {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold text-chaugreen">Tagline</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-4xl font-bold text-black md:text-5xl lg:text-6xl"
          >
            Tournament Schedule
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 text-black/70 md:mb-16 lg:mb-20 md:text-lg"
          >
            A detailed timeline of events for the tournament.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto max-w-5xl"
        >
          <div className="relative">
            <div className="absolute left-[50%] top-0 h-full w-px -translate-x-[50%] bg-gray/20" />
            <div className="space-y-12 md:space-y-16">
              {tournament.schedule.map((event, index) => (
                <TimelineEvent key={index} event={event} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

TimelineEvent.propTypes = {
  event: PropTypes.shape({
    time: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

Timeline13.propTypes = {
  tournament: PropTypes.shape({
    schedule: PropTypes.arrayOf(
      PropTypes.shape({
        time: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.shape({
          src: PropTypes.string.isRequired,
          alt: PropTypes.string.isRequired,
        }),
      })
    ).isRequired,
  }).isRequired,
};

export default Timeline13;
