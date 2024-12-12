import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import PortfolioHeader3 from '@/Components/TournamentPage/PortfolioHeader3';
import Content2 from '@/Components/TournamentPage/Content2';
import Timeline13 from '@/Components/TournamentPage/Timeline13';
import Gallery3 from '@/Components/TournamentPage/Gallery3';
import Testimonial16 from '@/Components/TournamentPage/Testimonial16';
import Layout10 from '@/Components/TournamentPage/Layout10';
import Comparison4 from '@/Components/TournamentPage/Comparison4';
import CTA7 from '@/Components/TournamentPage/CTA7';
import FAQ7 from '@/Components/TournamentPage/FAQ7';
import { BiCheck, BiX } from 'react-icons/bi';
import { RxChevronRight } from 'react-icons/rx';

const TournamentDetail = ({ tournamentId }) => {
    const [tournament] = useState({
        id: 1,
        name: "Spring Championship 2024",
        description: "Join us for the premier golf tournament of the season",
        date: "April 15-17, 2024",
        location: "Pine Valley Golf Club",
        entryFee: 299,
        imageUrl: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        format: "54-hole stroke play with 36-hole cut",
        rules: [
            "USGA Rules apply",
            "Local rules will be provided",
            "Maximum handicap: 18",
            "Professional and amateur divisions"
        ],
        prizes: {
            description: "Total prize purse of $25,000",
            breakdown: [
                "$10,000 + Trophy",
                "$5,000",
                "$3,000"
            ]
        },
        schedule: [
            {
                time: "7:00 AM - 9:00 AM",
                title: "Registration & Check-in",
                description: "Check-in at the clubhouse, receive tournament materials",
                location: "Clubhouse"
            },
            {
                time: "9:00 AM - 10:30 AM",
                title: "Practice & Warm-up",
                description: "Access to driving range and practice facilities",
                location: "Practice Area"
            },
            {
                time: "11:00 AM",
                title: "Tournament Start",
                description: "First round begins with shotgun start",
                location: "Course"
            },
            {
                time: "6:00 PM",
                title: "Awards Ceremony",
                description: "Presentation of awards and closing reception",
                location: "Clubhouse"
            }
        ],
        registrationMessage: "Secure your spot in the 2024 Spring Championship. Limited spots available - register early to avoid disappointment.",
        earlyBirdOffer: "Register before March 1st and save $50",
        spotsRemaining: 32
    });

    const gallery = {
        heading: "Tournament Gallery",
        description: "Relive the excitement from previous tournaments",
        images: [
            {
                url: "/images/tournaments/spring-championship.jpg",
                src: "/images/tournaments/spring-championship.jpg",
                alt: "2023 Tournament Champion",
                caption: "2023 Tournament Champion",
                category: "Tournament"
            },
            {
                url: "/images/tournaments/format-rules.jpg",
                src: "/images/tournaments/format-rules.jpg",
                alt: "Championship Course",
                caption: "Championship Course",
                category: "Course"
            },
            {
                url: "/images/tournaments/spring-championship.jpg",
                src: "/images/tournaments/spring-championship.jpg",
                alt: "Awards Ceremony",
                caption: "Awards Ceremony",
                category: "Events"
            }
        ]
    };

    const testimonials = [
        {
            name: "Michael Chen",
            title: "PGA Professional",
            year: "2023",
            quote: "Exceptionally well-organized tournament with top-notch facilities.",
            rating: 5,
            image: "/images/tournaments/spring-championship.jpg",
            avatar: "/images/tournaments/spring-championship.jpg",
            video: null,
            logo: "/images/tournaments/format-rules.jpg"
        },
        {
            name: "Sarah Rodriguez",
            title: "Amateur Champion",
            year: "2023",
            quote: "The competition level was outstanding, and the course was in perfect condition.",
            rating: 5,
            image: "/images/tournaments/format-rules.jpg",
            avatar: "/images/tournaments/format-rules.jpg",
            video: null,
            logo: "/images/tournaments/spring-championship.jpg"
        }
    ];

    const tiers = [
        {
            name: "Standard Entry",
            price: 299,
            description: "Perfect for individual players seeking a professional tournament experience",
            features: [
                "Tournament entry",
                "Practice round",
                "Cart rental",
                "Range balls",
                "Welcome package"
            ]
        },
        {
            name: "Premium Entry",
            price: 399,
            description: "Enhanced package with additional practice opportunities and premium perks",
            features: [
                "Tournament entry",
                "Two practice rounds",
                "Cart rental",
                "Unlimited range balls",
                "Premium welcome package",
                "Tournament polo"
            ]
        },
        {
            name: "VIP Package",
            price: 599,
            description: "Ultimate tournament experience with exclusive benefits and unlimited access",
            features: [
                "Tournament entry",
                "Unlimited practice rounds",
                "Cart rental",
                "Unlimited range balls",
                "Luxury welcome package",
                "Tournament polo",
                "VIP parking",
                "Exclusive reception access"
            ]
        }
    ];

    const sponsors = {
        heading: "Our Sponsors",
        description: "Proudly supported by industry leaders",
        tiers: [
            {
                name: "Platinum",
                sponsors: [
                    {
                        name: "GolfTech",
                        logo: "/images/tournaments/format-rules.jpg",
                        description: "Leading golf technology provider"
                    },
                    {
                        name: "Elite Equipment",
                        logo: "/images/tournaments/spring-championship.jpg",
                        description: "Premium golf equipment manufacturer"
                    }
                ]
            },
            {
                name: "Gold",
                sponsors: [
                    {
                        name: "SportsDrink",
                        logo: "/images/tournaments/format-rules.jpg",
                        description: "Official hydration partner"
                    },
                    {
                        name: "GolfWear",
                        logo: "/images/tournaments/spring-championship.jpg",
                        description: "Official apparel sponsor"
                    }
                ]
            }
        ]
    };

    const faqs = {
        heading: "Frequently Asked Questions",
        description: "Find answers to common questions about the tournament",
        questions: [
            {
                question: "What is the tournament format?",
                answer: tournament.format,
                category: "Format"
            },
            {
                question: "What is included in the registration fee?",
                answer: "Registration includes tournament entry, practice round access, range balls, cart fees, player welcome package, and awards dinner attendance.",
                category: "Registration"
            },
            {
                question: "What happens in case of weather delays?",
                answer: "The tournament committee will make all decisions regarding weather delays and schedule adjustments. We have built-in contingency plans.",
                category: "Rules"
            },
            {
                question: "Are caddies allowed?",
                answer: "Yes, players may use caddies. Caddies must register at the tournament office and follow all club and tournament regulations.",
                category: "Rules"
            },
            {
                question: "What is the cancellation policy?",
                answer: "Cancellations made 30 days or more before the tournament start date will receive a full refund minus a $50 processing fee.",
                category: "Registration"
            }
        ]
    };

    return (
        <MainLayout>
            <Head title={tournament.name} />
            
            {/* Tournament Header */}
            <PortfolioHeader3
                heading={tournament.name}
                description={tournament.description}
                tags={[
                    {
                        label: `Date: ${tournament.date}`,
                        url: "#date",
                    },
                    {
                        label: `Location: ${tournament.location}`,
                        url: "#location",
                    },
                    {
                        label: `Entry Fee: $${tournament.entryFee}`,
                        url: "#register",
                    },
                ]}
                image={{
                    src: tournament.imageUrl,
                    alt: `${tournament.name} - Tournament Banner`,
                }}
            />
            
            {/* Tournament Details */}
            <Content2
                heading="Tournament Format & Rules"
                description={tournament.description}
                image={{
                    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                    alt: "Tournament format and rules illustration"
                }}
            >
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Tournament Format</h3>
                        <p className="text-gray-600">{tournament.format}</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Tournament Rules</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            {tournament.rules.map((rule, index) => (
                                <li key={index} className="text-gray-600">{rule}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Prize Information</h3>
                        <p className="text-gray-600 mb-2">{tournament.prizes.description}</p>
                        <ul className="list-disc pl-5 space-y-2">
                            {tournament.prizes.breakdown.map((prize, index) => (
                                <li key={index} className="text-gray-600">
                                    {`${index + 1}st Place: ${prize}`}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Content2>
            
            {/* Event Schedule */}
            <Timeline13 
                heading="Tournament Schedule"
                description="Event Timeline"
                tournament={tournament}
            />
            
            {/* Photo Gallery */}
            <Gallery3 gallery={gallery} />
            
            {/* Player Testimonials */}
            <Testimonial16 testimonials={testimonials} />
            
            {/* Tournament Packages */}
            <Comparison4 
                heading="Tournament Packages"
                description="Choose your perfect package"
                tiers={tiers}
            />
            
            {/* Tournament Sponsors */}
            <Layout10 sponsors={sponsors} />
            
            {/* Registration CTA */}
            <CTA7 tournament={{
                registrationMessage: tournament.registrationMessage,
                earlyBirdOffer: tournament.earlyBirdOffer,
                spotsRemaining: tournament.spotsRemaining
            }} />
            
            {/* Frequently Asked Questions */}
            <FAQ7 faqs={faqs.questions} />
        </MainLayout>
    );
};

export default TournamentDetail;
