import React from 'react';
import { Trophy } from 'lucide-react';

export const Layout24 = (props) => {
  const { icon, heading, description, image } = {
    ...Layout24Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="mb-5 md:mb-6">
              <div className="size-12 flex items-center justify-center rounded-lg bg-chaugreen text-white">
                <Trophy className="size-6" />
              </div>
            </div>
            <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-black md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h3>
            <p className="text-black md:text-md">{description}</p>
          </div>
          <div>
            <img src="/images/ChauChau/pexels-kindelmedia-6572988.jpg" className="w-full rounded-lg object-cover shadow-lg" alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout24Defaults = {
  heading: "Tournament Access & Special Events",
  description:
    "Gain exclusive access to member-only tournaments and special events across our Dallas partner network. Compete in club championships, participate in inter-club matches, and enjoy social golf events throughout the year. Our diverse calendar of events ensures there's always something exciting happening on the course.",
  image: {
    src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=3270&auto=format&fit=crop",
    alt: "Golf tournament setup with flags and pristine greens",
  },
};
