import React from 'react';
import { Button } from "@relume_io/relume-ui";

export const Layout414 = () => {
    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
                    <div className="w-full max-w-lg">
                        <p className="mb-3 font-semibold text-chaugreen md:mb-4">Golf Tournaments</p>
                        <h1 className="mb-3 text-5xl font-bold text-darkerviridiangreen md:mb-4 md:text-7xl lg:text-8xl">
                            Experience the Thrill of Competition
                        </h1>
                        <p className="text-darkviridiangreen md:text-md">
                            Join us for exciting golf tournaments throughout the year. From amateur events to professional championships, we offer competitions for all skill levels.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-start gap-4">
                        <Button variant="primary" href="#schedule">View Schedule</Button>
                        <Button variant="secondary" href="#register">Register Now</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
