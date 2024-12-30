import React from 'react';
import { ChevronRight } from 'lucide-react';

const Button = ({ variant = "primary", children, className = "", ...props }) => {
  const baseClasses = "px-6 py-3 font-semibold rounded-lg transition-colors";
  const variants = {
    primary: "bg-white text-chaugreen hover:bg-gray",
    secondary: "bg-transparent border-2 border-white text-white hover:bg-white/10",
    link: "text-white hover:text-gray inline-flex items-center gap-2"
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
      {variant === 'link' && <ChevronRight className="h-5 w-5" />}
    </button>
  );
};

export const Layout216 = (props) => {
  const { tagline, heading, description, buttons, image, stats, ...rest } = {
    ...Layout216Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-chaugreen" {...rest}>
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img src={image.src} className="w-full rounded-lg object-cover shadow-lg" alt={image.alt} />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold text-white/80 md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <p className="mb-6 text-white/90 md:mb-8 md:text-md">{description}</p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="mb-2 text-5xl font-bold text-white md:text-7xl lg:text-8xl">{stat.title}</h3>
                  <p className="text-white/80">{stat.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout216Defaults = {
  tagline: "Member Benefits",
  heading: "Exclusive Access & Perks",
  description:
    "Enjoy premium benefits across our partner network. From priority tee times to practice facility access, our partnerships ensure you get the most out of your Dallas golfing experience. Take advantage of member-only events and special rates at top-tier courses.",
  buttons: [
    { 
      title: "View Partner Clubs", 
      variant: "primary" 
    },
    {
      title: "Member Benefits",
      variant: "link"
    },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=3270&auto=format&fit=crop",
    alt: "Premium Dallas golf club facilities",
  },
  stats: [
    {
      title: "24/7",
      description: "Online tee time booking access",
    },
    {
      title: "15+",
      description: "Exclusive member events yearly",
    },
  ],
};
