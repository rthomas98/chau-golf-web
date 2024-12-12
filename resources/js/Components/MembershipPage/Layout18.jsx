import React from "react";
import PropTypes from "prop-types";
import { Flag, Store, Utensils } from "lucide-react";

export const Layout18 = (props) => {
  const { heading, description, features, image } = {
    ...Layout18Defaults,
    ...props,
  };
  return (
    <section className="bg-tahitigold/10 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-darkerviridiangreen md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h3>
            <p className="mb-5 text-darkviridiangreen md:mb-6 md:text-md">{description}</p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="flex-none">
                    {feature.icon}
                  </div>
                  <p className="text-darkviridiangreen">{feature.paragraph}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <img 
              src="https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=3270&auto=format&fit=crop" 
              className="w-full rounded-lg object-cover shadow-lg" 
              alt={image.alt} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Layout18.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      paragraph: PropTypes.string,
    })
  ),
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
};

export const Layout18Defaults = {
  heading: "World-Class Facilities at Your Service",
  description:
    "Our state-of-the-art facilities are designed to enhance your golfing experience and provide the perfect environment for both practice and leisure.",
  features: [
    {
      icon: <Flag className="h-6 w-6 text-tahitigold" />,
      paragraph: "Advanced practice facilities including driving range, putting greens, and short game area",
    },
    {
      icon: <Store className="h-6 w-6 text-tahitigold" />,
      paragraph: "Fully stocked pro shop with the latest equipment and professional fitting services",
    },
    {
      icon: <Utensils className="h-6 w-6 text-tahitigold" />,
      paragraph: "Elegant clubhouse with fine dining restaurant and casual lounge areas",
    },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=3270&auto=format&fit=crop",
    alt: "Chau Golf Club Facilities",
  },
};
