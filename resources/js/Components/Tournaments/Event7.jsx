import React from "react";
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";

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
    <div className="flex flex-col items-start group">
      <a href={url} className="relative mb-5 block aspect-[3/2] w-full overflow-hidden rounded-lg md:mb-6">
        <img 
          src={image.src} 
          alt={image.alt} 
          className="absolute size-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute right-4 top-4 flex min-w-28 flex-col items-center rounded-lg bg-white/95 backdrop-blur-sm px-1 py-3 text-sm">
          <span className="text-tahitigold">{date.weekday}</span>
          <span className="text-2xl font-bold text-darkerviridiangreen md:text-3xl lg:text-4xl">{date.day}</span>
          <span className="text-darkviridiangreen">{date.monthYear}</span>
        </div>
      </a>
      <span className="mb-3 bg-tahitigold/10 text-tahitigold px-2 py-1 text-sm font-semibold rounded-md md:mb-4">
        {category}
      </span>
      <a href={url} className="group">
        <h2 className="text-xl font-bold text-darkerviridiangreen hover:text-tahitigold transition-colors md:text-2xl">{title}</h2>
      </a>
      <p className="mb-2 text-viridiangreen">{location}</p>
      <p className="text-darkviridiangreen">{description}</p>
      <button
        onClick={button.onClick}
        className="mt-5 flex items-center gap-1 text-tahitigold hover:text-midtahitigold transition-colors md:mt-6"
      >
        {button.title}
        {button.iconRight && <ChevronRight className="h-4 w-4" />}
      </button>
    </div>
  );
};

export const Event7 = (props) => {
  const { tagline, heading, description, button, featuredEvents } = {
    ...Event7Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-white via-pearlbush to-merino">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h4 className="font-semibold text-tahitigold">{tagline}</h4>
            <h1 className="mt-3 text-5xl font-bold text-darkerviridiangreen md:mt-4 md:text-7xl lg:text-8xl">{heading}</h1>
            <p className="mt-5 text-base text-darkviridiangreen md:mt-6 md:text-lg">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {featuredEvents.map((event, index) => (
            <FeaturedEvent key={index} {...event} />
          ))}
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <button
            onClick={button.onClick}
            className="rounded-lg bg-tahitigold px-6 py-3 font-semibold text-white hover:bg-midtahitigold transition-colors"
          >
            {button.title}
          </button>
        </div>
      </div>
    </section>
  );
};

Event7.propTypes = {
  tagline: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
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
        onClick: PropTypes.func,
        iconRight: PropTypes.bool
      })
    })
  )
};

export const Event7Defaults = {
  tagline: "Featured Tournaments",
  heading: "Upcoming Events",
  description: "Join us for these exciting golf tournaments designed for players of all skill levels.",
  button: {
    title: "View All Tournaments",
    onClick: () => console.log("View all clicked")
  },
  featuredEvents: [
    {
      url: "#",
      image: {
        src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=2070",
        alt: "Spring Championship Tournament",
      },
      date: {
        weekday: "Sat",
        day: "15",
        monthYear: "Mar 2024",
      },
      category: "Championship",
      title: "Spring Championship Tournament",
      location: "Royal Pine Golf Club",
      description:
        "Our flagship spring tournament featuring both amateur and professional divisions with substantial prizes.",
      button: { 
        title: "Tournament Details", 
        iconRight: true,
        onClick: () => console.log("Details clicked")
      },
    },
    {
      url: "#",
      image: {
        src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=2070",
        alt: "Junior Golf Classic",
      },
      date: {
        weekday: "Sun",
        day: "23",
        monthYear: "Mar 2024",
      },
      category: "Junior",
      title: "Junior Golf Classic",
      location: "Meadowbrook Golf Course",
      description:
        "A special tournament designed for young golfers to showcase their skills and compete with peers.",
      button: { 
        title: "Tournament Details", 
        iconRight: true,
        onClick: () => console.log("Details clicked")
      },
    },
    {
      url: "#",
      image: {
        src: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=2070",
        alt: "Senior Masters Cup",
      },
      date: {
        weekday: "Sat",
        day: "30",
        monthYear: "Mar 2024",
      },
      category: "Senior",
      title: "Senior Masters Cup",
      location: "Oakridge Country Club",
      description:
        "An exclusive tournament for senior golfers featuring multiple divisions and age categories.",
      button: { 
        title: "Tournament Details", 
        iconRight: true,
        onClick: () => console.log("Details clicked")
      },
    },
  ],
};
