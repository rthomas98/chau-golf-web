import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Star, Trophy } from "lucide-react";

const getAvatarUrl = (name) => {
  const encodedName = encodeURIComponent(name);
  return `https://ui-avatars.com/api/?name=${encodedName}&background=059669&color=fff&size=128&bold=true`;
};

const defaultTestimonials = [
  {
    name: "Michael Chen",
    title: "PGA Professional",
    year: "2023",
    quote: "Exceptionally well-organized tournament with top-notch facilities. The attention to detail and professional atmosphere made this event truly memorable.",
    rating: 5,
    achievement: "Tournament Champion 2023"
  },
  {
    name: "Sarah Rodriguez",
    title: "Amateur Champion",
    year: "2023",
    quote: "The competition level was outstanding, and the course was in perfect condition. From registration to the awards ceremony, everything ran smoothly.",
    rating: 5,
    achievement: "Runner-up 2023"
  },
  {
    name: "David Thompson",
    title: "Golf Enthusiast",
    year: "2023",
    quote: "An incredible experience that exceeded all expectations. The practice facilities, tournament organization, and networking opportunities were exceptional.",
    rating: 5
  },
  {
    name: "Emma Wilson",
    title: "Junior Division Winner",
    year: "2023",
    quote: "As a young golfer, this tournament provided the perfect platform to compete at a high level. The inclusive atmosphere and support from organizers was amazing.",
    rating: 5,
    achievement: "Junior Division Champion 2023"
  }
];

const Testimonial16 = ({ testimonials = defaultTestimonials }) => {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-4xl font-bold text-black md:text-5xl lg:text-6xl"
          >
            Player Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 text-lg text-black/70 md:mb-16 lg:mb-20 md:text-xl"
          >
            Hear what past participants have to say about their tournament experience.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex h-full flex-col rounded-2xl border border-gray/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-6 flex items-center gap-4">
                <img
                  src={getAvatarUrl(testimonial.name)}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover shadow-sm"
                />
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-black/70">
                    {testimonial.title} • {testimonial.year}
                  </p>
                </div>
              </div>

              <div className="mb-6 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-chaugreen text-chaugreen"
                  />
                ))}
              </div>

              <blockquote className="mb-6 flex-grow text-base text-black/70">
                "{testimonial.quote}"
              </blockquote>

              {testimonial.achievement && (
                <div className="flex items-center gap-2 rounded-lg bg-chaugreen/5 p-3 text-sm text-chaugreen">
                  <Trophy className="h-5 w-5" />
                  <span>{testimonial.achievement}</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-base text-black/70">
            Join our next tournament and be part of our growing community of passionate golfers.
            <br />
            <a href="#register" className="mt-2 inline-flex items-center gap-1 text-chaugreen hover:text-black">
              Register for upcoming tournaments →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

Testimonial16.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      quote: PropTypes.string.isRequired,
      achievement: PropTypes.string,
    })
  ),
};

export default Testimonial16;
