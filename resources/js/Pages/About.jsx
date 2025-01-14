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
                        href: "/register",
                    },
                    { 
                        title: "Contact Us",
                        href: "/contact",
                    }
                ]}
                image={{
                    src: "/images/ChauChau/pexels-mikhail-nilov-9207747.jpg",
                    alt: "Beautiful golf course overview"
                }}
            />
            <Layout222 
                image={{
                    src: "/images/ChauChau/pexels-pixabay-164250.jpg",
                    alt: "Golf club facilities"
                }}
                features={[
                    {
                        icon: 'trophy',
                        heading: "Premier Tournaments",
                        description: "Experience expertly organized tournaments that cater to all skill levels, from beginners to seasoned players.",
                        
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
                        title: "Tournament Schedule Coming Soon",
                       href: "",
                    },
                    { 
                        title: "Learn About Our Process",
                        href: "/membership",
                        iconRight: true
                    }
                ]}
                image={{
                    src: "/images/ChauChau/pexels-mikhail-nilov-9207742.jpg",
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
                                href: "/contact",
                                iconRight: true
                            }
                        ],
                        image: {
                            src: "/images/ChauChau/pexels-jopwell-1325662.jpg",
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
                                href: "/membership",
                            },
                            {
                                title: "Book Now",
                                href: "/membership",
                                iconRight: true
                            }
                        ],
                        image: {
                            src: "/images/ChauChau/pexels-cottonbro-6256757.jpg",
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
