import React from "react";
import PropTypes from "prop-types";

export const Header26 = (props) => {
  const { heading, description, buttons, image } = {
    ...Header26Defaults,
    ...props,
  };
  return (
    <section className="bg-gradient-to-b from-lowpearlbush to-merino px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="mx-auto w-full max-w-2xl">
              <h1 className="mb-5 font-headers text-6xl font-bold text-darkerviridiangreen md:mb-6 md:text-8xl lg:text-9xl">
                <span className="text-chaugreen">{heading.split(' ')[0]}</span>{' '}
                {heading.split(' ').slice(1).join(' ')}
              </h1>
              <p className="text-darkviridiangreen md:text-lg">{description}</p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                {buttons.map((button, index) => (
                  <a
                    key={index}
                    href={button.href}
                    className={`rounded-lg px-6 py-3 font-semibold transition-colors ${
                      index === 0
                        ? 'bg-chaugreen text-white hover:bg-chaugreen/80'
                        : 'border border-chaugreen text-chaugreen hover:bg-chaugreen/10'
                    }`}
                  >
                    {button.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="aspect-[21/9] w-full overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image.src} 
              className="h-full w-full object-cover" 
              alt={image.alt} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Header26.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string
    })
  ),
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  })
};

export const Header26Defaults = {
  heading: "About Chau Chau Golf",
  description:
    "Discover the story behind our passion for golf and our commitment to creating exceptional experiences for golf enthusiasts. From organizing premier tournaments to fostering a vibrant community, we're dedicated to elevating the game.",
  buttons: [
    { 
      title: "Join Our Community",
      href: "#"
    }, 
    { 
      title: "Learn More",
      href: "#"
    }
  ],
  image: {
    src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=2070",
    alt: "Stunning golf course panorama",
  },
};
