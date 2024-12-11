import React from 'react';
import { Link } from '@inertiajs/react';
import { Navbar5 } from '../Components/MainNav';
import { Footer } from '../Components/MainFooter';


export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen">
            <Navbar5 />
            <main>{children}</main>
            <Footer />
        </div>
    );
}