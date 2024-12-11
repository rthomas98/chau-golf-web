import React from "react";
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const FeaturedEvent = ({
  url,
  image,
  date,
  category,
  title,
  location,
  description,
  button,
}) => {
  return (
    <motion.div 
      className="group flex flex-col items-start"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <a href={url} className="relative mb-5 block aspect-[3/2] w-full overflow-hidden rounded-lg md:mb-6">
        <motion.img 
          src={image.src} 
          alt={image.alt} 
          className="absolute size-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute right-4 top-4 flex min-w-28 flex-col items-center rounded-lg bg-white/95 px-1 py-3 text-sm backdrop-blur-sm">
          <span className="text-darkviridiangreen">{date.weekday}</span>
          <span className="text-2xl font-bold text-tahitigold md:text-3xl lg:text-4xl">{date.day}</span>
          <span className="text-darkviridiangreen">{date.monthYear}</span>
        </div>
      </a>
      <span className="mb-3 rounded-full bg-lowtahitigold px-3 py-1 text-sm font-semibold text-tahitigold md:mb-4">
        {category}
      </span>
      <a 
        href={url}
        className="group-hover:text-tahitigold"
      >
        <h2 className="text-xl font-bold text-darkerviridiangreen transition-colors md:text-2xl">{title}</h2>
      </a>
      <p className="mb-2 text-darkviridiangreen">{location}</p>
      <p className="text-darkviridiangreen">{description}</p>
      <button
        className="mt-5 flex items-center gap-2 text-tahitigold transition-colors hover:text-midtahitigold md:mt-6"
        onClick={button.onClick}
      >
        {button.title}
        <ChevronRight className="h-5 w-5" />
      </button>
    </motion.div>
  );
};

export const Events = (props) => {
  const { tagline, heading, description, button, featuredEvents } = {
    ...EventsDefaults,
    ...props,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <motion.div 
          className="mb-12 md:mb-18 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="mx-auto max-w-lg text-center">
            <motion.h4 
              className="font-semibold text-tahitigold"
              variants={itemVariants}
            >
              {tagline}
            </motion.h4>
            <motion.h1 
              className="mt-3 text-5xl font-bold text-darkerviridiangreen md:mt-4 md:text-7xl lg:text-8xl"
              variants={itemVariants}
            >
              {heading}
            </motion.h1>
            <motion.p 
              className="mt-5 text-base text-darkviridiangreen md:mt-6 md:text-lg"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {featuredEvents.map((event, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeaturedEvent {...event} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 flex justify-center md:mt-18 lg:mt-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            variants={itemVariants}
            className="rounded-lg bg-tahitigold px-6 py-3 font-semibold text-white transition-colors hover:bg-midtahitigold"
            onClick={button.onClick}
          >
            {button.title}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

Events.propTypes = {
  tagline: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape({
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
  }),
  featuredEvents: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string
      }),
      date: PropTypes.shape({
        weekday: PropTypes.string.isRequired,
        day: PropTypes.string.isRequired,
        monthYear: PropTypes.string.isRequired
      }),
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      button: PropTypes.shape({
        title: PropTypes.string.isRequired,
        onClick: PropTypes.func
      })
    })
  )
};

export const EventsDefaults = {
  tagline: "Upcoming Events",
  heading: "Join Our Next Tournament",
  description: "Don't miss out on our exciting upcoming golf tournaments and events. Register now to secure your spot and compete with fellow enthusiasts.",
  button: {
    title: "View All Events"
  },
  featuredEvents: [
    {
      url: "#",
      image: {
        src: "/images/event-1.jpg",
        alt: "Spring Championship Tournament"
      },
      date: {
        weekday: "Sat",
        day: "23",
        monthYear: "Mar 2024"
      },
      category: "Championship",
      title: "Spring Championship Tournament",
      location: "Pine Valley Golf Club",
      description: "Join us for our annual Spring Championship Tournament featuring players from all skill levels competing for exciting prizes.",
      button: {
        title: "Register Now"
      }
    },
    {
      url: "#",
      image: {
        src: "/images/event-2.jpg",
        alt: "Networking Golf Day"
      },
      date: {
        weekday: "Sun",
        day: "07",
        monthYear: "Apr 2024"
      },
      category: "Networking",
      title: "Business Networking Golf Day",
      location: "Oakmont Country Club",
      description: "Connect with professionals and business leaders while enjoying a relaxed round of golf and networking opportunities.",
      button: {
        title: "Learn More"
      }
    },
    {
      url: "#",
      image: {
        src: "/images/event-3.jpg",
        alt: "Junior Golf Camp"
      },
      date: {
        weekday: "Mon",
        day: "15",
        monthYear: "Apr 2024"
      },
      category: "Training",
      title: "Junior Golf Development Camp",
      location: "Augusta National Golf Club",
      description: "A week-long training camp for young golfers to develop their skills under the guidance of professional instructors.",
      button: {
        title: "Register Interest"
      }
    }
  ]
};
