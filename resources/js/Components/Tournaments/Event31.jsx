import React, { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";

const EventAccordion = ({ day, events, isOpen, onClick }) => {
  return (
    <div className="border-b border-black/10">
      <button
        className="flex w-full items-center justify-between py-6 text-left"
        onClick={onClick}
      >
        <h3 className="text-xl font-bold text-black md:text-2xl">
          {day}
        </h3>
        <ChevronDown
          className={`h-5 w-5 text-chaugreen transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-6 pb-6">
            {events.map((event, index) => (
              <div key={index} className="flex gap-6 md:gap-8">
                <div className="min-w-24 text-black md:min-w-32">
                  {event.time}
                </div>
                <div>
                  <h4 className="font-bold text-black">
                    {event.title}
                  </h4>
                  <p className="mt-1 text-chaugreen">{event.speaker}</p>
                  <p className="mt-1 text-black">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Event31 = (props) => {
  const { tagline, heading, description, scheduleItems } = {
    ...Event31Defaults,
    ...props,
  };

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h4 className="font-semibold text-chaugreen">{tagline}</h4>
            <h2 className="mt-3 text-4xl font-bold text-black md:mt-4 md:text-5xl">
              {heading}
            </h2>
            <p className="mt-5 text-base text-black md:mt-6 md:text-lg">
              {description}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl">
          {scheduleItems.map((item, index) => (
            <EventAccordion
              key={index}
              day={item.day}
              events={item.events}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

Event31.propTypes = {
  tagline: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  scheduleItems: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      events: PropTypes.arrayOf(
        PropTypes.shape({
          time: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          speaker: PropTypes.string.isRequired,
          location: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export const Event31Defaults = {
  tagline: "Event Schedule",
  heading: "Tournament Timeline",
  description:
    "View our detailed tournament schedule to plan your participation effectively.",
  scheduleItems: [
    {
      day: "Day 1",
      events: [
        {
          time: "8:00 AM",
          title: "Registration",
          speaker: "Tournament Staff",
          location: "Main Clubhouse",
        },
        {
          time: "9:00 AM",
          title: "Opening Ceremony",
          speaker: "Tournament Director",
          location: "Main Course",
        },
      ],
    },
    {
      day: "Day 2",
      events: [
        {
          time: "8:00 AM",
          title: "Tournament Rounds",
          speaker: "All Participants",
          location: "Championship Course",
        },
      ],
    },
  ],
};
