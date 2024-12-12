import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Layout437 } from '../Components/MembershipPage/Layout437';
import { Layout245 } from '../Components/MembershipPage/Layout245';
import { Pricing3 } from '../Components/MembershipPage/Pricing3';
import { Layout3 } from '../Components/MembershipPage/Layout3';
import { Layout192 } from '../Components/MembershipPage/Layout192';
import { Layout18 } from '../Components/MembershipPage/Layout18';
import { Cta19 } from '../Components/MembershipPage/Cta19';

export default function Membership() {
    return (
        <MainLayout>
            <Layout437 />
            <Layout245 />
            <Pricing3 />
            <Layout3 />
            <Layout192 />
            <Layout18 />
            <Cta19 
                heading="Join Our Club Today"
                description="Experience the excellence of Chau Golf Club. Our membership offers exclusive access to world-class facilities, events, and a vibrant community of golf enthusiasts."
                buttons={[
                    {
                        title: "Apply for Membership",
                        variant: "primary"
                    },
                    {
                        title: "Learn More",
                        variant: "secondary"
                    }
                ]}
            />
        </MainLayout>
    );
}
