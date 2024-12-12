import React from 'react';

export const Layout27 = (props) => {
  const { heading, description, image, stats, ...rest } = {
    ...Layout27Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" {...rest}>
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="mb-5 text-4xl font-bold leading-[1.2] text-darkerviridiangreen md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="mb-6 text-darkviridiangreen md:mb-8 md:text-md">{description}</p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="mb-2 text-5xl font-bold text-tahitigold md:text-7xl lg:text-8xl">{stat.title}</h3>
                  <p className="text-darkviridiangreen">{stat.description}</p>
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

export const Layout27Defaults = {
  heading: "Premier Dallas Golf Network",
  description:
    "Join a network of prestigious Dallas golf clubs offering diverse playing experiences. From championship courses to hidden gems, our partnerships give you access to the best golf Dallas has to offer, all at preferred member rates.",
  stats: [
    {
      title: "12+",
      description: "Partner courses across Dallas",
    },
    {
      title: "30%",
      description: "Average savings on green fees",
    },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=3270&auto=format&fit=crop",
    alt: "Aerial view of Dallas golf course",
  },
};
