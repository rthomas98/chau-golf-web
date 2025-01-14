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
