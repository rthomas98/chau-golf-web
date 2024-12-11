import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Layout414 } from '../Components/Tournaments/Layout414';
import { Event7 } from '../Components/Tournaments/Event7';
import { Event31 } from '../Components/Tournaments/Event31';
import { Layout12 } from '../Components/Tournaments/Layout12';
import { Cta9 } from '../Components/Tournaments/Cta9';

export default function Tournaments() {
    return (
        <MainLayout>
            <Layout414 
                tagline="Golf Tournaments"
                heading="Experience the Thrill of Competition"
                description="Join us for exciting golf tournaments throughout the year. From amateur events to professional championships, we offer competitions for all skill levels."
                buttons={[
                    { title: "View Schedule", href: "#schedule" },
                    { title: "Register Now", href: "#register", variant: "outline" }
                ]}
                images1={[
                    { 
                        src: "https://images.unsplash.com/photo-1600783486189-746f336a5782?auto=format&fit=crop&q=80&w=2070", 
                        alt: "Golfer in action on fairway" 
                    },
                    { 
                        src: "https://images.unsplash.com/photo-1595789927828-6d592d8dd780?auto=format&fit=crop&q=80&w=2070", 
                        alt: "Close-up of golf swing" 
                    },
                ]}
                images2={[
                    { 
                        src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=2070", 
                        alt: "Beautiful golf course landscape" 
                    },
                    { 
                        src: "https://images.unsplash.com/photo-1587174147003-eb7dc051122b?auto=format&fit=crop&q=80&w=2070", 
                        alt: "Golfer reading the green" 
                    },
                ]}
            />
            
            <Event7 />
            <Event31 
                tagline="Tournament Schedule"
                heading="Upcoming Events"
                description="Check out our comprehensive schedule of upcoming tournaments and events. Mark your calendar and don't miss out on these exciting opportunities to compete and improve your game."
                scheduleItems={[
                    {
                        day: "Day 1",
                        events: [
                            {
                                time: "8:00 AM",
                                title: "Registration & Check-in",
                                speaker: "Tournament Staff",
                                location: "Clubhouse Main Hall"
                            },
                            {
                                time: "9:00 AM",
                                title: "Opening Ceremony",
                                speaker: "Tournament Director",
                                location: "Main Course"
                            },
                            {
                                time: "10:00 AM",
                                title: "Tournament Round 1",
                                speaker: "All Participants",
                                location: "Championship Course"
                            }
                        ]
                    },
                    {
                        day: "Day 2",
                        events: [
                            {
                                time: "8:30 AM",
                                title: "Tournament Round 2",
                                speaker: "Qualified Participants",
                                location: "Championship Course"
                            },
                            {
                                time: "2:00 PM",
                                title: "Semi-Finals",
                                speaker: "Top 16 Players",
                                location: "Championship Course"
                            }
                        ]
                    },
                    {
                        day: "Day 3",
                        events: [
                            {
                                time: "9:00 AM",
                                title: "Finals",
                                speaker: "Finalists",
                                location: "Championship Course"
                            },
                            {
                                time: "2:00 PM",
                                title: "Awards Ceremony",
                                speaker: "Tournament Committee",
                                location: "Clubhouse Grand Hall"
                            }
                        ]
                    }
                ]}
            />
            <Layout12 />
            <Cta9 />
        </MainLayout>
    );
}
