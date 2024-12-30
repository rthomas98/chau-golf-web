import React from "react";
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const FeaturedEvent = ({ event }) => {
  return (
    <div className="group flex size-full flex-col overflow-hidden rounded-lg border border-midviridiangreen bg-white shadow-md transition-shadow hover:shadow-xl">
      <a href={event.url} className="relative w-full overflow-hidden">
        <img
          src={event.image.src}
          alt={event.image.alt}
          className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </a>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="mb-6 flex w-full items-center justify-between">
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-darkviridiangreen">{event.date.weekday}</p>
            <p className="text-3xl font-bold text-darkerviridiangreen">{event.date.day}</p>
            <p className="text-sm font-semibold text-darkviridiangreen">{event.date.monthYear}</p>
          </div>
          <span className="rounded-full bg-lowtahitigold px-4 py-1.5 text-sm font-semibold text-tahitigold">
            {event.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="space-y-4">
            <a 
              className="block w-full transition-colors hover:text-tahitigold" 
              href={event.url}
            >
              <h3 className="truncate text-xl font-bold text-darkerviridiangreen md:text-2xl">
                {event.title}
              </h3>
            </a>
            <p className="text-sm font-semibold text-darkviridiangreen">
              {event.location}
            </p>
            <p className="line-clamp-3 text-base text-darkviridiangreen/70">
              {event.description}
            </p>
          </div>
          <div className="pt-6">
            <button
              className={`flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-colors ${
                event.button.variant === "secondary"
                  ? "border-2 border-chaugreen text-chaugreen hover:bg-chaugreen hover:text-white"
                  : "bg-chaugreen text-white hover:bg-black"
              }`}
              onClick={event.button.onClick}
            >
              {event.button.title}
              {event.button.variant === "secondary" && <ChevronRight className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
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
              <FeaturedEvent event={event} />
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center">
          <button
            className="mt-16 flex items-center gap-2 rounded-lg border-2 border-chaugreen px-6 py-3 font-semibold text-chaugreen transition-colors hover:bg-chaugreen hover:text-white"
            onClick={() => {}}
          >
            View All Events
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
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
        src: "https://images.pexels.com/photos/914682/pexels-photo-914682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
        src: "https://images.pexels.com/photos/914682/pexels-photo-914682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
        src: "https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?q=80&w=1974&auto=format&fit=crop",
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
