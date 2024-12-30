import React from 'react';
import { ChevronRight } from 'lucide-react';

const Button = ({ variant = "primary", children, className = "", ...props }) => {
  const baseClasses = "px-6 py-3 font-semibold rounded-lg transition-colors";
  const variants = {
    primary: "bg-chaugreen text-white hover:bg-black",
    secondary: "bg-transparent border-2 border-black text-black hover:bg-gray",
    link: "text-black hover:text-chaugreen inline-flex items-center gap-2"
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
      {variant === 'link' && <ChevronRight className="h-5 w-5" />}
    </button>
  );
};

export const Layout239 = (props) => {
  const { tagline, heading, description, sections, buttons } = {
    ...Layout239Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-lowviridiangreen">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold text-tahitigold md:mb-4">{tagline}</p>
              <h2 className="mb-5 text-5xl font-bold text-darkerviridiangreen md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
              <p className="text-darkviridiangreen md:text-md">{description}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {sections.map((section, index) => (
              <div key={index} className="flex w-full flex-col items-center text-center">
                <div className="mb-6 md:mb-8 h-64 w-full">
                  <img 
                    src={section.image.src} 
                    alt={section.image.alt} 
                    className="rounded-lg shadow-lg w-full h-full object-cover" 
                  />
                </div>
                <h3 className="mb-5 text-2xl font-bold text-darkerviridiangreen md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {section.heading}
                </h3>
                <p className="text-darkviridiangreen">{section.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout239Defaults = {
  tagline: "Partner Course Types",
  heading: "Diverse Golf Experiences",
  description:
    "From championship courses to executive layouts, our network offers a variety of golfing experiences to suit every player's preferences and skill level.",
  sections: [
    {
      image: {
        src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=3270&auto=format&fit=crop",
        alt: "Championship course",
      },
      heading: "Championship Courses",
      description:
        "Test your skills on PGA-caliber courses designed by renowned architects, featuring challenging layouts and pristine conditions.",
    },
    {
      image: {
        src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2970&auto=format&fit=crop",
        alt: "Resort course",
      },
      heading: "Resort Courses",
      description:
        "Enjoy the perfect blend of challenge and relaxation at our partner resort courses, complete with premium amenities and scenic views.",
    },
    {
      image: {
        src: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=3276&auto=format&fit=crop",
        alt: "Executive course",
      },
      heading: "Executive Courses",
      description:
        "Perfect for quick rounds or improving your short game, these courses offer quality golf experiences in a time-efficient format.",
    },
  ],
  buttons: [
    { title: "Explore All Courses", variant: "primary" },
    {
      title: "Learn About Membership",
      variant: "link",
    },
  ],
};
