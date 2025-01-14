import React from 'react';
import { ChevronRight } from 'lucide-react';

const Button = ({ variant = "primary", children, className = "", href, ...props }) => {
  const baseClasses = "px-6 py-3 font-semibold rounded-lg transition-colors";
  const variants = {
    primary: "bg-chaugreen text-white hover:bg-black",
    secondary: "bg-transparent border-2 border-black text-black hover:bg-gray",
    link: "text-black hover:text-chaugreen inline-flex items-center gap-2"
  };

  const Component = href ? 'a' : 'button';
  return (
    <Component 
      className={`${baseClasses} ${variants[variant]} ${className}`} 
      href={href} 
      {...props}
    >
      {children}
      {variant === 'link' && <ChevronRight className="h-5 w-5" />}
    </Component>
  );
};

export const Layout439 = (props) => {
  const { tagline, heading, description, buttons, firstImage, secondImage, ...rest } = {
    ...Layout439Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-merino" {...rest}>
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-6 sm:gap-y-8 md:grid-cols-2">
          <div className="order-last flex h-full flex-col justify-between md:order-first">
            <img
              src={firstImage.src}
              className="mb-6 w-full rounded-lg object-cover shadow-lg md:mb-8"
              alt={firstImage.alt}
            />
            <div className="ml-[10%] mr-[5%]">
              <p className="text-darkviridiangreen md:text-md">{description}</p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="mb-3 font-semibold text-tahitigold md:mb-4">{tagline}</p>
              <h2 className="text-5xl font-bold text-darkerviridiangreen md:text-7xl lg:text-8xl">{heading}</h2>
            </div>
            <img
              src={secondImage.src}
              className="mt-12 aspect-square w-full rounded-lg object-cover shadow-lg md:mt-18 lg:mt-20"
              alt={secondImage.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout439Defaults = {
  tagline: "Your Gateway to Local Golf",
  heading: "Explore Dallas Golf Courses and Partnerships",
  description:
    "Discover the finest golf courses in the Dallas area, where lush greens and challenging layouts await. Our partnerships with local clubs ensure you have access to exclusive rates and exceptional experiences.",
  buttons: [
    { 
      title: "Become a Member", 
      variant: "primary", 
      href: "/membership"
    },
    {
      title: "learn more about ChauChau Golf",
      variant: "link",
      href: "/about"
    },
  ],
  firstImage: {
    src: "/images/ChauChau/pexels-jeffrey-1697421387-27904140.jpg",
    alt: "Golf course fairway view",
  },
  secondImage: {
    src: "/images/ChauChau/pexels-cottonbro-6256760.jpg",
    alt: "Golf course landscape view",
  },
};
