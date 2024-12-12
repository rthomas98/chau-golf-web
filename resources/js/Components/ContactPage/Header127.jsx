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
                <Button key={index} {...button}>
                  {button.title}
                </Button>
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
      title: "Contact Us", 
      variant: "primary" 
    }, 
    { 
      title: "View FAQs", 
      variant: "secondary" 
    }
  ],
  firstImage: {
    src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=3270&auto=format&fit=crop",
    alt: "Golf course fairway view",
  },
  secondImage: {
    src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2970&auto=format&fit=crop",
    alt: "Golf course landscape",
  },
  thirdImage: {
    src: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=3276&auto=format&fit=crop",
    alt: "Golf course green",
  },
};
