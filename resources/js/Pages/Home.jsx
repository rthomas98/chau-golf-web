import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Header } from '../Components/HomePage/Header';
import { Features } from '../Components/HomePage/Features';
import { Highlights } from '../Components/HomePage/Highlights';
import { Benefits } from '../Components/HomePage/Benefits';
import { VideoHero } from '../Components/HomePage/VideoHero';
import { Blog } from '../Components/HomePage/Blog';
import { Events } from '../Components/HomePage/Events';
import { Layout3 } from '../Components/HomePage/Layout3';
import { Cta3 } from '../Components/HomePage/Cta3';

export default function Home() {
    return (
        <MainLayout>
            <Header 
                heading="Elevate Your Golf Experience with Chau Chau Golf Events and Merchandise"
                description="Become part of a dynamic community of golf enthusiasts and enhance your skills on the course. Explore thrilling tournaments, access expert resources, and participate in events designed specifically for you."
                buttons={[
                    { title: "Become a Member", variant: "primary", href: "/register" },
                ]}
                images={[
                    {
                        src: "/images/ChauChau/AdobeStock_162611319.jpeg",
                        alt: "Professional golfer practicing at sunset"
                    },
                    {
                        src: "/images/ChauChau/AdobeStock_305588859.jpeg",
                        alt: "Beautiful golf course landscape"
                    },
                    {
                        src: "/images/ChauChau/AdobeStock_505438961.jpeg",
                        alt: "Golf player in action"
                    },
                    {
                        src: "/images/ChauChau/AdobeStock_536460994.jpeg",
                        alt: "Tournament action shot"
                    },
                    {
                        src: "/images/ChauChau/AdobeStock_581751881.jpeg",
                        alt: "Golf club membership benefits"
                    },
                    {
                        src: "/images/ChauChau/AdobeStock_965207836.jpeg",
                        alt: "Golf lifestyle benefits"
                    }
                ]}
            />
            <Features 
                tagline="Why Choose ChauChau Golf"
                heading="Enhance Your Golfing Potential with Our Expertise"
                description="At Chau Chau Golf, we facilitate connections for golf enthusiasts with dynamic tournaments and events customized to their skill levels. Our platform offers comprehensive resources and support to elevate your golfing experience."
                sections={[
                    {
                        iconName: "trophy",
                        heading: "Customized Solutions for Every Golfer",
                        description: "Our services include customized tournament setups tailored to your needs, along with expert coaching to help you excel and achieve your goals."
                    },
                    {
                        iconName: "calendar",
                        heading: "Stay Informed About Upcoming Events",
                        description: "Become a part of our vibrant community today, and ensure you stay informed about all upcoming events so you never miss out on the excitement and fun!"
                    },
                    {
                        iconName: "handshake",
                        heading: "Join Our Thriving Golf Community",
                        description: "Engage with other players to share your unique experiences, tips, and strategies, fostering a vibrant community for everyone involved in the game."
                    }
                ]}
                buttons={[
                    { title: "View All Benefits", variant: "primary", href: "/membership-benefits" },
                    { title: "Learn More", variant: "secondary", href: "/about" }
                ]}
            />
            <Highlights 
                sections={[
                    {
                        image: {
                            src: "/images/ChauChau/pexels-10-star-321296-914682.jpg",
                            alt: "Golf tournament in action"
                        },
                        heading: "Unmatched Golf Tournaments for Every Enthusiast",
                        description: "At Chau Chau Golf, we offer a unique platform for amateur players to showcase their skills in competitive tournaments. Join us for an unforgettable golfing experience that fosters community and sportsmanship.",
                        button: {
                            title: "Upcoming Tournaments Coming Soon",
                            variant: "primary",
                            href: ""
                        }
                    },
                    {
                        image: {
                            src: "/images/ChauChau/pexels-betchtyblades-2480612.jpg",
                            alt: "Premium golf membership benefits"
                        },
                        heading: "Premium Membership Benefits for Every Golf Enthusiast",
                        description: "Experience golf like never before with our premium membership packages. Enjoy exclusive access to tournaments, special events, and a range of benefits designed to enhance your golfing journey.",
                        button: {
                            title: "Explore Membership Options",
                            variant: "primary",
                            href: "/membership"
                        }
                    }
                ]}
            />
            <Benefits 
                image={{
                    src: "/images/golf-benefits.jpg",
                    alt: "Professional golf tournament experience"
                }}
                featureSections={[
                    {
                        icon: "trophy",
                        heading: "Professional Tournament Organization",
                        description: "Experience meticulously planned tournaments with professional scoring systems, live leaderboards, and expert course management.",
                        buttons: [
                            {
                                title: "Tournament Schedule Coming Soon",
                                variant: "primary"
                            }
                        ]
                    },
                    {
                        icon: "users",
                        heading: "Vibrant Golf Community",
                        description: "Connect with fellow golf enthusiasts, share experiences, and participate in exclusive member-only events and networking opportunities.",
                        buttons: [
                            {
                                title: "Join Our Community",
                                variant: "primary",
                                href: "/register"
                            }
                        ]
                    },
                    {
                        icon: "target",
                        heading: "Skill Development Programs",
                        description: "Access specialized training programs, workshops, and resources designed to help you improve your game and reach your golfing goals.",
                        buttons: [
                            {
                                title: "Explore Programs Coming Soon",
                                variant: "primary"
                            }
                        ]
                    }
                ]}
            />
            <VideoHero 
                tagline="Experience Golf Like Never Before"
                heading="Join a Community of Passionate Golfers"
                description="At Chau Chau Golf, we bring together golf enthusiasts of all skill levels. Connect with fellow players, share experiences, and enhance your game through our vibrant community."
                sections={[
                    {
                        heading: "Discover Upcoming Tournaments and Events",
                        description: "Keep yourself updated on thrilling tournaments and events happening in your local area, so you never miss out on the excitement and fun!",
                        icon: "trophy"
                    },
                    {
                        heading: "Enhance Your Skills with Expert Resources",
                        description: "Discover a wealth of valuable tips and resources designed to help you enhance your gaming skills and elevate your performance.",
                        icon: "target"
                    },
                    {
                        heading: "Network with Players and Organizers",
                        description: "Establish meaningful connections that can open doors to exciting new opportunities and experiences in your professional journey.",
                        icon: "users"
                    }
                ]}
                buttons={[
                    { 
                        title: "Join Our Community",
                        variant: "primary",
                        href: "/register"
                    },
                ]}
                video="/videos/854185-hd_1920_1080_24fps (1).mp4"
                videoType="video/mp4"
            />
           
            <Layout3 
                heading="Welcome to Chau Chau Golf: Your Gateway to Exciting Golf Experiences"
                description="At Chau Chau Golf, our mission is to connect passionate golf enthusiasts with exciting tournaments and events. Join us to enhance your skills, experience thrilling competitions, and enjoy the camaraderie of fellow players who share your love for the game."
                button={{
                    title: "Learn More",
                    variant: "primary",
                    href: "/about-us"
                }}
                image={{
                    src: "/images/ChauChau/pexels-cottonbro-6256752.jpg",
                    alt: "Gold balls in a basket"
                }}
            />
            <Cta3 
                heading="Join Our Golf Community"
                description="Take your game to the next level with exclusive access to tournaments, training programs, and a community of passionate golfers."
                buttons={[
                    { 
                        title: "Become a Member",
                        variant: "primary",
                        href: "/register"
                    },
                    {
                        title: "View Membership Plans",
                        variant: "secondary",
                        href: "/membership"
                    }
                ]}
                image={{
                    src: "/images/golf-sunset.jpg",
                    alt: "Scenic golf course view"
                }}
            />
        </MainLayout>
    );
}
