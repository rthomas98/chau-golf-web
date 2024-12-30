import React from "react";
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";
import { Link } from '@inertiajs/react';

const FeaturedEvent = ({
  id,
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
      <Link 
        href={`/tournaments/${id}`} 
        className="relative mb-5 block aspect-[3/2] w-full overflow-hidden rounded-lg md:mb-6"
      >
        <img 
          src={image.src} 
          alt={image.alt} 
          className="absolute size-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute right-4 top-4 flex min-w-28 flex-col items-center rounded-lg bg-white/95 backdrop-blur-sm px-1 py-3 text-sm">
          <span className="text-chaugreen">{date.weekday}</span>
          <span className="text-2xl font-bold text-black md:text-3xl lg:text-4xl">{date.day}</span>
          <span className="text-black">{date.monthYear}</span>
        </div>
      </Link>
      <span className="mb-3 bg-chaugreen/10 text-chaugreen px-2 py-1 text-sm font-semibold rounded-md md:mb-4">
        {category}
      </span>
      <Link 
        href={`/tournaments/${id}`} 
        className="group"
      >
        <h2 className="text-xl font-bold text-black hover:text-chaugreen transition-colors md:text-2xl">{title}</h2>
      </Link>
      <p className="mb-2 text-chaugreen">{location}</p>
      <p className="text-black">{description}</p>
      <Link
        href={`/tournaments/${id}`}
        className="mt-5 flex items-center gap-1 text-chaugreen hover:text-black transition-colors md:mt-6"
      >
        {button.title}
        <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

export const Event7 = (props) => {
  const { tagline, heading, description, button, featuredEvents } = {
    ...Event7Defaults,
    ...props,
  };

  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="mb-4 inline-block text-sm font-semibold text-chaugreen">
            {tagline}
          </span>
          <h2 className="mb-4 text-3xl font-bold text-black md:text-5xl">
            {heading}
          </h2>
          <p className="text-black">{description}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredEvents.map((event, index) => (
            <FeaturedEvent key={index} {...event} />
          ))}
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
    title: PropTypes.string,
    iconRight: PropTypes.bool,
  }),
  featuredEvents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
      }),
      date: PropTypes.shape({
        weekday: PropTypes.string,
        day: PropTypes.string,
        monthYear: PropTypes.string,
      }),
      category: PropTypes.string,
      title: PropTypes.string,
      location: PropTypes.string,
      description: PropTypes.string,
      button: PropTypes.shape({
        title: PropTypes.string,
        iconRight: PropTypes.bool,
      }),
    })
  ),
};

export const Event7Defaults = {
  tagline: "Featured Events",
  heading: "Upcoming Tournaments",
  description:
    "Join us for these exciting tournaments and showcase your skills on the green.",
  button: {
    title: "Learn More",
    iconRight: true,
  },
  featuredEvents: [
    {
      id: 1,
      image: {
        src: "../images/blog-1.jpg",
        alt: "Spring Championship",
      },
      date: {
        weekday: "SAT",
        day: "23",
        monthYear: "MAR 2024",
      },
      category: "Championship",
      title: "Spring Championship Tournament",
      location: "Pine Valley Golf Club",
      description:
        "Join us for our annual Spring Championship Tournament featuring players from all skill levels competing for exciting prizes.",
      button: {
        title: "View Details",
        iconRight: true,
      },
    },
    {
      id: 2,
      image: {
        src: "../images/event-1.jpg",
        alt: "Business Networking Event",
      },
      date: {
        weekday: "SUN",
        day: "07",
        monthYear: "APR 2024",
      },
      category: "Networking",
      title: "Business Networking Golf Day",
      location: "Oakmont Country Club",
      description:
        "Connect with professionals and business leaders while enjoying a relaxed round of golf and networking opportunities.",
      button: {
        title: "View Details",
        iconRight: true,
      },
    },
    {
      id: 3,
      image: {
        src: "../images/golf-course.jpg",
        alt: "Junior Development Event",
      },
      date: {
        weekday: "MON",
        day: "15",
        monthYear: "APR 2024",
      },
      category: "Training",
      title: "Junior Golf Development Camp",
      location: "Augusta National Golf Club",
      description:
        "A week-long training camp for young golfers to develop their skills under the guidance of professional instructors.",
      button: {
        title: "View Details",
        iconRight: true,
      },
    },
  ],
};
