import React from 'react';
import { Trophy, Users, DollarSign, Calendar } from 'lucide-react';

const IconWrapper = ({ icon: Icon }) => (
  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-tahitigold text-white md:mb-4">
    <Icon className="h-6 w-6" />
  </div>
);

export const Layout12 = (props) => {
  const { heading, description, image, subHeadings } = {
    ...Layout12Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-lowviridiangreen">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-4xl font-bold leading-[1.2] text-darkerviridiangreen md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="mb-6 text-darkviridiangreen md:mb-8 md:text-md">{description}</p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {subHeadings.map((subHeading, index) => (
                <div key={index}>
                  <IconWrapper icon={subHeading.icon} />
                  <h6 className="mb-3 text-md font-bold leading-[1.4] text-darkerviridiangreen md:mb-4 md:text-xl">
                    {subHeading.title}
                  </h6>
                  <p className="text-darkviridiangreen">{subHeading.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={image.src} className="w-full rounded-lg object-cover shadow-lg" alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout12Defaults = {
  heading: "Why Partner With Chau Golf",
  description:
    "Join our network of premier golf courses and unlock new opportunities for growth, exposure, and enhanced member experiences. Our partnership program is designed to benefit both courses and golfers.",
  subHeadings: [
    {
      icon: Trophy,
      title: "Enhanced Prestige",
      description:
        "Join an exclusive network of Dallas's finest golf courses, elevating your course's reputation and visibility.",
    },
    {
      icon: Users,
      title: "Expanded Network",
      description:
        "Access a broader community of passionate golfers and potential members through our extensive network.",
    },
    {
      icon: DollarSign,
      title: "Revenue Growth",
      description:
        "Increase revenue through our partnership program with preferred rates and exclusive booking arrangements.",
    },
    {
      icon: Calendar,
      title: "Event Opportunities",
      description:
        "Host prestigious tournaments and events, drawing more visitors to your course throughout the year.",
    },
  ],
  image: {
    src: "/images/ChauChau/pexels-mickhaupt-5644641.jpg",
    alt: "Scenic golf course fairway with water feature",
  },
};
