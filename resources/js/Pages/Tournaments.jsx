import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Navbar5 } from '@/Components/MainNav';
import { Footer } from '@/Components/MainFooter';
import { Layout414 } from '@/Components/Tournaments/Layout414';
import { TournamentGrid } from '@/Components/Tournaments/TournamentGrid';

export default function Tournaments({ tournaments, filters }) {
    return (
        <MainLayout>
            <Head title="Tournaments" />
            <main className="flex min-h-screen flex-col">
                <Layout414 />
                <TournamentGrid tournaments={tournaments} filters={filters} />
            </main>
            <Footer />
        </MainLayout>
    );
}
