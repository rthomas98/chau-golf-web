import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Header127 } from '../Components/ContactPage/Header127';
import { Contact4 } from '../Components/ContactPage/Contact4';
import { Events } from '../Components/HomePage/Events';
import { Cta3 } from '../Components/HomePage/Cta3';


export default function Contact() {
    return (
        <MainLayout>
            <Header127 />
            <Contact4 />
            <Events 
                tagline="Upcoming Events"
                heading="Join Our Next Tournament"
                description="Don't miss out on our exciting upcoming golf tournaments and events. Register now to secure your spot and compete with fellow enthusiasts."
                button={{
                    title: "View All Events"
                }}
                featuredEvents={[
                    {
                        url: "#",
                        image: {
                            src: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=3276&auto=format&fit=crop",
                            alt: "Spring Championship Tournament"
                        },
                        date: {
                            weekday: "Sat",
                            day: "23",
                            monthYear: "Mar 2024"
                        },
                        category: "Championship",
                        title: "Spring Championship Tournament",
                        location: "Pine Valley Golf Club",
                        description: "Join us for our annual Spring Championship Tournament featuring players from all skill levels competing for exciting prizes.",
                        button: {
                            title: "Register Now"
                        }
                    },
                    {
                        url: "#",
                        image: {
                            src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=2070",
                            alt: "Networking Golf Day"
                        },
                        date: {
                            weekday: "Sun",
                            day: "07",
                            monthYear: "Apr 2024"
                        },
                        category: "Networking",
                        title: "Business Networking Golf Day",
                        location: "Oakmont Country Club",
                        description: "Connect with professionals and business leaders while enjoying a relaxed round of golf and networking opportunities.",
                        button: {
                            title: "Learn More"
                        }
                    },
                    {
                        url: "#",
                        image: {
                            src: "https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?auto=format&fit=crop&q=80&w=2070",
                            alt: "Junior Golf Camp"
                        },
                        date: {
                            weekday: "Mon",
                            day: "15",
                            monthYear: "Apr 2024"
                        },
                        category: "Training",
                        title: "Junior Golf Development Camp",
                        location: "Augusta National Golf Club",
                        description: "A week-long training camp for young golfers to develop their skills under the guidance of professional instructors.",
                        button: {
                            title: "Register Interest"
                        }
                    }
                ]}
            />
            <Cta3 
                heading="Join Our Golf Community"
                description="Take your game to the next level with exclusive access to tournaments, training programs, and a community of passionate golfers."
                buttons={[
                    { 
                        title: "Become a Member",
                        variant: "primary"
                    },
                    {
                        title: "View Membership Plans",
                        variant: "secondary-alt"
                    }
                ]}
                image={{
                    src: "https://images.unsplash.com/photo-1611374243147-44a702c2d44c?auto=format&fit=crop&q=80&w=2070",
                    alt: "Scenic golf course view"
                }}
            />
        </MainLayout>
    );
}
