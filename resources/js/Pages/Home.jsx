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
                    { title: "Become a Member", variant: "primary" },
                    { title: "Explore Courses", variant: "secondary" }
                ]}
                firstImage={{
                    src: "/images/golf-sunset.jpg",
                    alt: "Professional golfer practicing at sunset"
                }}
                secondImage={{
                    src: "/images/golf-course.jpg",
                    alt: "Beautiful golf course landscape"
                }}
                thirdImage={{
                    src: "/images/golf-player.jpg",
                    alt: "Golf player in action"
                }}
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
                    { title: "View All Benefits", variant: "secondary" },
                    { title: "Learn More", variant: "link" }
                ]}
            />
            <Highlights 
                sections={[
                    {
                        image: {
                            src: "/images/tournament.jpg",
                            alt: "Golf tournament in action"
                        },
                        heading: "Unmatched Golf Tournaments for Every Enthusiast",
                        description: "At Chau Chau Golf, we offer a unique platform for amateur players to showcase their skills in competitive tournaments. Join us for an unforgettable golfing experience that fosters community and sportsmanship.",
                        button: {
                            title: "View Upcoming Tournaments",
                            variant: "link"
                        }
                    },
                    {
                        image: {
                            src: "/images/membership.jpg",
                            alt: "Premium golf membership benefits"
                        },
                        heading: "Join Our Thriving Community of Golfers and Tournament Enthusiasts Today",
                        description: "Our events are designed to bring together players of all skill levels, ensuring everyone has a chance to compete and connect. Discover upcoming tournaments and be part of a vibrant golfing community.",
                        button: {
                            title: "Explore Member Benefits",
                            variant: "link"
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
                                title: "View Tournament Schedule"
                            }
                        ]
                    },
                    {
                        icon: "users",
                        heading: "Vibrant Golf Community",
                        description: "Connect with fellow golf enthusiasts, share experiences, and participate in exclusive member-only events and networking opportunities.",
                        buttons: [
                            {
                                title: "Join Our Community"
                            }
                        ]
                    },
                    {
                        icon: "target",
                        heading: "Skill Development Programs",
                        description: "Access specialized training programs, workshops, and resources designed to help you improve your game and reach your golfing goals.",
                        buttons: [
                            {
                                title: "Explore Programs"
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
                        title: "Join Our Community"
                    },
                    {
                        title: "View Upcoming Events"
                    }
                ]}
                video="/videos/3514135261-preview.mp4"
                videoType="video/mp4"
            />
            <Blog 
                tagline="Latest News & Articles"
                heading="Stay Updated with Golf Insights"
                description="Discover the latest trends, tips, and stories from the world of golf. Our expert contributors share valuable insights to help you improve your game."
                button={{ 
                    title: "View All Articles"
                }}
                blogPosts={[
                    {
                        url: "#",
                        image: {
                            src: "/images/blog-1.jpg",
                            alt: "Golf tournament preparation tips"
                        },
                        category: "Tournament Tips",
                        readTime: "5 min read",
                        title: "Essential Tournament Preparation Guide",
                        description: "Learn the key strategies and mental preparation techniques to help you perform your best in competitive golf tournaments.",
                        button: {
                            title: "Read More"
                        }
                    },
                    {
                        url: "#",
                        image: {
                            src: "/images/blog-2.jpg",
                            alt: "Golf community events"
                        },
                        category: "Community",
                        readTime: "4 min read",
                        title: "Building Connections Through Golf",
                        description: "Discover how participating in golf events can help you build lasting relationships and expand your professional network.",
                        button: {
                            title: "Read More"
                        }
                    },
                    {
                        url: "#",
                        image: {
                            src: "/images/blog-3.jpg",
                            alt: "Golf skill improvement"
                        },
                        category: "Skill Development",
                        readTime: "6 min read",
                        title: "Advanced Techniques for Better Scores",
                        description: "Expert tips and practice drills to help you improve your accuracy, consistency, and overall performance on the course.",
                        button: {
                            title: "Read More"
                        }
                    }
                ]}
            />
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
                            src: "../images/event-1.jpg",
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
            <Layout3 
                heading="Welcome to Chau Chau Golf: Your Gateway to Exciting Golf Experiences"
                description="At Chau Chau Golf, our mission is to connect passionate golf enthusiasts with exciting tournaments and events. Join us to enhance your skills, experience thrilling competitions, and enjoy the camaraderie of fellow players who share your love for the game."
                image={{
                    src: "https://images.unsplash.com/photo-1535132011086-b8818f016104?auto=format&fit=crop&q=80&w=2070",
                    alt: "Beautiful golf course with stunning landscape"
                }}
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
