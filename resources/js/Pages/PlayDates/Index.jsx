import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { PlayDateGrid } from '@/Components/PlayDates/PlayDateGrid';

export default function PlayDates({ auth, playDates, filters }) {
    return (
        <MainLayout user={auth.user}>
            <Head title="Play Dates" />
            <main className="flex min-h-screen flex-col">
                <PlayDateGrid playDates={playDates} filters={filters} />
            </main>
        </MainLayout>
    );
} 