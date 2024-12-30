import React, { useState, useEffect } from "react";
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex w-full flex-col items-start justify-between border border-viridiangreen/20 rounded-lg bg-white p-6 md:p-8">
      <div className="mb-5 flex text-tahitigold md:mb-6">
        {Array(testimonial.numberOfStars)
          .fill(null)
          .map((_, starIndex) => (
            <Star key={starIndex} className="size-6 fill-current" />
          ))}
      </div>
      <blockquote className="text-darkviridiangreen md:text-md">{testimonial.quote}</blockquote>
      <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
        <div>
          <img
            src={testimonial.avatar.src}
            alt={testimonial.avatar.alt}
            className="size-12 min-h-12 min-w-12 rounded-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-darkerviridiangreen">{testimonial.name}</p>
          <p className="text-darkviridiangreen">
            <span>{testimonial.position}</span>
            {testimonial.companyName && <span>, {testimonial.companyName}</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Testimonial19 = (props) => {
  const { heading, description, testimonials } = {
    ...Testimonial19Defaults,
    ...props,
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 bg-lowpearlbush">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold text-darkerviridiangreen md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="text-darkviridiangreen md:text-md">{description}</p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="rounded-full bg-chaugreen p-2 text-white hover:bg-black"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="rounded-full bg-chaugreen p-2 text-white hover:bg-black"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Testimonial19Defaults = {
  heading: "Member Experiences",
  description: "Hear what our members have to say about their experiences with our partner golf courses.",
  testimonials: [
    {
      numberOfStars: 5,
      quote: "Access to such a diverse network of courses has completely transformed my golfing experience. The ability to play at different venues while maintaining the same high level of service is invaluable.",
      avatar: {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
        alt: "John testimonial",
      },
      name: "John Anderson",
      position: "Member since 2022",
    },
    {
      numberOfStars: 5,
      quote: "The tournament access alone makes membership worthwhile. I've met amazing people and improved my game significantly through the competitive opportunities available.",
      avatar: {
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop",
        alt: "Sarah testimonial",
      },
      name: "Sarah Martinez",
      position: "Member since 2021",
    },
    {
      numberOfStars: 5,
      quote: "Being able to book tee times at multiple premium courses through a single membership has made golfing so much more convenient and enjoyable.",
      avatar: {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop",
        alt: "David testimonial",
      },
      name: "David Chen",
      position: "Member since 2023",
    },
    {
      numberOfStars: 5,
      quote: "The variety of courses available keeps the game exciting. Each course offers a unique challenge, and the staff at every location is exceptionally welcoming.",
      avatar: {
        src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2940&auto=format&fit=crop",
        alt: "Emily testimonial",
      },
      name: "Emily Thompson",
      position: "Member since 2022",
    },
  ],
};
