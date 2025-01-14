import React from 'react';
import { ChevronRight } from 'lucide-react';

const Button = ({ variant = "primary", children, className = "", ...props }) => {
  const baseClasses = "px-6 py-3 font-semibold rounded-lg transition-colors";
  const variants = {
    primary: "bg-tahitigold text-white hover:bg-midtahitigold",
    secondary: "bg-transparent border-2 border-viridiangreen text-viridiangreen hover:bg-lowviridiangreen",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const Header127 = (props) => {
  const { heading, description, buttons, firstImage, secondImage, thirdImage } = {
    ...Header127Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-merino">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="mb-5 text-6xl font-bold text-darkerviridiangreen md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
            <p className="text-darkviridiangreen md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <a key={index} {...button}>
                  {button.title}
                </a>
              ))}
            </div>
          </div>
          <div className="relative flex w-full">
            <div className="absolute bottom-[10%] left-0 right-auto top-auto w-[45%]">
              <img
                src={firstImage.src}
                className="aspect-[3/2] size-full rounded-lg object-cover shadow-lg"
                alt={firstImage.alt}
              />
            </div>
            <div className="mx-[15%] w-full">
              <img
                src={secondImage.src}
                className="aspect-[2/3] size-full rounded-lg object-cover shadow-lg"
                alt={secondImage.alt}
              />
            </div>
            <div className="absolute bottom-auto left-auto right-0 top-[10%] w-[40%]">
              <img
                src={thirdImage.src}
                className="aspect-square size-full rounded-lg object-cover shadow-lg"
                alt={thirdImage.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header127Defaults = {
  heading: "Get in Touch",
  description:
    "Have questions about membership, partnerships, or our golf network? We're here to help you discover the perfect golfing experience in Dallas.",
  buttons: [
   
    { 
      title: "Become A Member", 
      variant: "secondary", 
      href: "/membership"

    }
  ],
  firstImage: {
    src: "/images/ChauChau/shutterstock_388687852.jpg",
    alt: "Golf course fairway view",
  },
  secondImage: {
    src: "/images/ChauChau/shutterstock_2458218737.jpg",
    alt: "Golf course landscape",
  },
  thirdImage: {
    src: "/images/ChauChau/shutterstock_2028535712.jpg",
    alt: "Golf course green",
  },
};
