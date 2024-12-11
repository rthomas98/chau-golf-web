import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Header26 } from '../Components/AboutPage/Header26';
import { Layout222 } from '../Components/AboutPage/Layout222';
import { Layout275 } from '../Components/AboutPage/Layout275';
import { Layout360 } from '../Components/AboutPage/Layout360';
import { Layout408 } from '../Components/AboutPage/Layout408';
import { Layout4 } from '../Components/AboutPage/Layout4';
import { Layout431 } from '../Components/AboutPage/Layout431';
import { Cta7 } from '../Components/AboutPage/Cta7';

export default function About() {
    return (
        <MainLayout>
            <Header26 
                heading="About Chau Chau Golf Events"
                description="Welcome to Chau Chau Golf Events, where passion for golf meets exceptional event organization. We're dedicated to creating memorable golf experiences that bring together players of all skill levels in a vibrant, competitive, and friendly environment."
                buttons={[
                    { 
                        title: "Join Our Community",
                        onClick: () => console.log("Join clicked")
                    },
                    { 
                        title: "Contact Us",
                        onClick: () => console.log("Contact clicked")
                    }
                ]}
                image={{
                    src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=2070",
                    alt: "Beautiful golf course overview"
                }}
            />
            <Layout222 
                image={{
                    src: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=2070",
                    alt: "Golf club facilities"
                }}
                features={[
                    {
                        icon: 'trophy',
                        heading: "Premier Tournaments",
                        description: "Experience expertly organized tournaments that cater to all skill levels, from beginners to seasoned players.",
                        buttons: [
                            {
                                title: "View Tournaments",
                                onClick: () => console.log("Tournaments clicked")
                            }
                        ]
                    },
                    {
                        icon: 'users',
                        heading: "Community Focus",
                        description: "Join a thriving community of golf enthusiasts who share your passion for the game and competitive spirit.",
                        buttons: [
                            {
                                title: "Meet Our Members",
                                onClick: () => console.log("Members clicked")
                            }
                        ]
                    },
                    {
                        icon: 'target',
                        heading: "Professional Events",
                        description: "Participate in meticulously planned events that showcase the best in golf competition and sportsmanship.",
                        buttons: [
                            {
                                title: "View Events",
                                onClick: () => console.log("Events clicked")
                            }
                        ]
                    },
                    {
                        icon: 'calendar',
                        heading: "Year-Round Action",
                        description: "Stay engaged with our comprehensive calendar of events, tournaments, and social gatherings throughout the year.",
                        buttons: [
                            {
                                title: "See Calendar",
                                onClick: () => console.log("Calendar clicked")
                            }
                        ]
                    }
                ]}
            />
            <Layout275 
                tagline="Our Impact"
                heading="Creating Golf Excellence"
                description="We're committed to elevating the standard of golf tournaments through professional organization, community engagement, and exceptional player experiences."
                buttons={[
                    { 
                        title: "View Tournament Schedule",
                        onClick: () => console.log("Schedule clicked")
                    },
                    { 
                        title: "Learn About Our Process",
                        onClick: () => console.log("Process clicked"),
                        iconRight: true
                    }
                ]}
                image={{
                    src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=2070",
                    alt: "Professional golf tournament"
                }}
            />
            <Layout360 
                tagline="Our Commitment"
                heading="Excellence in Every Detail"
                description="Discover how we're revolutionizing golf tournament experiences through professional management and premium facilities."
                sections={[
                    {
                        tagline: "Tournament Excellence",
                        heading: "Professional Management",
                        description: "Our experienced team ensures every tournament runs smoothly, from registration to the final awards ceremony.",
                        buttons: [
                            { 
                                title: "Explore Services",
                                onClick: () => console.log("Services clicked")
                            },
                            {
                                title: "Contact Us",
                                onClick: () => console.log("Contact clicked"),
                                iconRight: true
                            }
                        ],
                        image: {
                            src: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=2070",
                            alt: "Golf tournament management"
                        }
                    },
                    {
                        tagline: "Premium Experience",
                        heading: "World-Class Venues",
                        description: "Partner with top golf courses to provide exceptional playing conditions and facilities for all our events.",
                        buttons: [
                            { 
                                title: "View Venues",
                                onClick: () => console.log("Venues clicked")
                            },
                            {
                                title: "Book Now",
                                onClick: () => console.log("Book clicked"),
                                iconRight: true
                            }
                        ],
                        image: {
                            src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=2070",
                            alt: "Premium golf course"
                        }
                    }
                ]}
            />
            <Layout408 />
            <Layout4 />
            <Layout431 />
            <Cta7 />
        </MainLayout>
    );
}
