import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Trophy, Clock, Book, X } from 'lucide-react';
import { Button } from "@relume_io/relume-ui";
import { TournamentMap } from '@/Components/TournamentPage/TournamentMap';
import { useForm } from '@inertiajs/react';

const GuestRegistrationModal = ({ isOpen, onClose, tournament }) => {
    const form = useForm({
        name: '',
        email: '',
        phone: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        form.post(route('tournament.register.guest', tournament.id), {
            onSuccess: () => onClose(),
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/50" onClick={onClose} />
            <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                >
                    <X className="h-5 w-5" />
                </button>
                <h3 className="mb-4 text-lg font-medium text-darkerviridiangreen">
                    Register as Guest
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-darkviridiangreen">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={form.data.name}
                            onChange={e => form.setData('name', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-chaugreen focus:ring-chaugreen sm:text-sm"
                            required
                        />
                        {form.errors.name && (
                            <p className="mt-1 text-sm text-red-600">{form.errors.name}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-darkviridiangreen">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={form.data.email}
                            onChange={e => form.setData('email', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-chaugreen focus:ring-chaugreen sm:text-sm"
                            required
                        />
                        {form.errors.email && (
                            <p className="mt-1 text-sm text-red-600">{form.errors.email}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-darkviridiangreen">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            value={form.data.phone}
                            onChange={e => form.setData('phone', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-chaugreen focus:ring-chaugreen sm:text-sm"
                            required
                        />
                        {form.errors.phone && (
                            <p className="mt-1 text-sm text-red-600">{form.errors.phone}</p>
                        )}
                    </div>
                    <div className="mt-6">
                        <Button
                            type="submit"
                            variant="primary"
                            className="w-full"
                            disabled={form.processing}
                        >
                            {form.processing ? 'Registering...' : 'Complete Registration'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const TournamentDetail = ({ tournament, auth, hasMembership }) => {
    const [showGuestForm, setShowGuestForm] = useState(false);
    const isRegistered = auth?.user ? tournament.participants?.some(
        participant => participant.id === auth.user.id
    ) : false;

    const form = useForm();

    const handleRegistration = () => {
        form.post(route('tournament.register', tournament.id), {
            onSuccess: () => {
                // Registration successful
            },
        });
    };

    return (
        <MainLayout>
            <Head title={tournament.name} />
            
            {/* Hero Section */}
            <div className="relative">
                {/* Background Image */}
                <div className="absolute inset-0 h-[60vh] overflow-hidden">
                    {tournament.image_url ? (
                        <img
                            src={tournament.image_url}
                            alt={tournament.name}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="h-full w-full bg-gray-200" />
                    )}
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Content */}
                <div className="relative px-[5%] pt-32 pb-20 md:pt-40 md:pb-24">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl"
                        >
                            <div className="mb-6 flex flex-wrap gap-3">
                                <span className="rounded-full bg-chaugreen/20 px-3 py-1 text-sm font-medium text-chaugreen">
                                    {tournament.status === 'published' ? 'Upcoming' : 'In Progress'}
                                </span>
                                <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                                    ${tournament.entry_fee}
                                </span>
                            </div>
                            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
                                {tournament.name}
                            </h1>
                            <p className="mb-8 text-lg text-white/80 md:text-xl">
                                {tournament.description}
                            </p>
                            <div className="grid gap-6 text-white/80 sm:grid-cols-2 md:grid-cols-3">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-5 w-5" />
                                    <span>{new Date(tournament.start_date).toLocaleDateString()} - {new Date(tournament.end_date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5" />
                                    <span>{tournament.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="h-5 w-5" />
                                    <span>{tournament.spots_remaining} spots remaining</span>
                                </div>
                            </div>
                            <div className="mt-8">
                                <button
                                    onClick={() => {
                                        navigator.share({
                                            title: tournament.name,
                                            text: tournament.description,
                                            url: window.location.href,
                                        }).catch(() => {
                                            // Fallback: copy to clipboard if share is not supported
                                            navigator.clipboard.writeText(window.location.href);
                                            alert('Link copied to clipboard!');
                                        });
                                    }}
                                    className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/30"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                                        <polyline points="16 6 12 2 8 6"/>
                                        <line x1="12" y1="2" x2="12" y2="15"/>
                                    </svg>
                                    Share Tournament
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="px-[5%] py-16 md:py-24">
                <div className="container mx-auto">
                    <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-16">
                        {/* Left Column */}
                        <div className="space-y-12">
                            {/* Format & Rules */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                <h2 className="text-3xl font-bold text-darkerviridiangreen">Tournament Format & Rules</h2>
                                <div className="prose max-w-none text-darkviridiangreen">
                                    <div className="mb-8">
                                        <h3 className="text-xl font-semibold">Format</h3>
                                        <p>{tournament.format}</p>
                                    </div>
                                    
                                    <div className="mb-8">
                                        <h3 className="text-xl font-semibold">Rules</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            {Object.entries(tournament.rules || {}).map(([key, rule]) => (
                                                <li key={key}>{rule}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold">Prizes</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            {Object.entries(tournament.prizes || {}).map(([position, prize]) => (
                                                <li key={position}>
                                                    {`${position}: ${prize}`}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Location Map */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                <h2 className="text-3xl font-bold text-darkerviridiangreen">Tournament Location</h2>
                                <TournamentMap location={tournament.location} name={tournament.name} />
                            </motion.section>

                            {/* Schedule */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                <h2 className="text-3xl font-bold text-darkerviridiangreen">Tournament Schedule</h2>
                                <div className="space-y-4">
                                    {Object.entries(tournament.schedule || {}).map(([time, event], index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-4 rounded-lg border border-chaugreen/20 p-4"
                                        >
                                            <Clock className="mt-1 h-5 w-5 text-chaugreen" />
                                            <div>
                                                <p className="font-medium text-darkerviridiangreen">{time}</p>
                                                <p className="text-darkviridiangreen">{event}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        </div>

                        {/* Right Column - Registration Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="lg:sticky lg:top-8"
                        >
                            <div className="rounded-lg border border-chaugreen/20 bg-white p-6 shadow-lg">
                                <div className="mb-6 space-y-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm text-darkviridiangreen">Registration Status</span>
                                        <span className={`rounded-full px-3 py-1 text-sm font-medium ${
                                            tournament.spots_remaining === 0
                                                ? 'bg-red-100 text-red-800'
                                                : tournament.spots_remaining <= 5
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : 'bg-green-100 text-green-800'
                                        }`}>
                                            {tournament.spots_remaining === 0
                                                ? 'Sold Out'
                                                : tournament.spots_remaining <= 5
                                                ? 'Almost Full'
                                                : 'Open'}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-darkviridiangreen">Entry Fee</span>
                                        <div className="text-right">
                                            <span className="text-2xl font-bold text-darkerviridiangreen">
                                                ${hasMembership && tournament.member_price ? tournament.member_price : tournament.entry_fee}
                                            </span>
                                            {hasMembership && tournament.member_price && (
                                                <div className="text-sm text-green-600">Member Price</div>
                                            )}
                                            {!hasMembership && tournament.member_price && (
                                                <div className="text-sm text-darkviridiangreen">
                                                    Members save ${(tournament.entry_fee - tournament.member_price).toFixed(2)}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-darkviridiangreen">Spots Remaining</span>
                                        <span className="font-medium text-darkerviridiangreen">
                                            {tournament.spots_remaining}
                                        </span>
                                    </div>
                                    {tournament.early_bird_offer && (
                                        <div className="rounded-lg bg-chaugreen/10 p-3">
                                            <p className="text-sm font-medium text-chaugreen">
                                                Early Bird Offer: {tournament.early_bird_offer}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {auth?.user ? (
                                    isRegistered ? (
                                        <div className="space-y-4">
                                            <div className="rounded-lg bg-green-50 p-3">
                                                <p className="text-sm font-medium text-green-800">
                                                    You're registered for this tournament!
                                                </p>
                                            </div>
                                            <Button
                                                variant="secondary"
                                                className="w-full"
                                                href={route('dashboard')}
                                            >
                                                View Registration Details
                                            </Button>
                                        </div>
                                    ) : tournament.spots_remaining > 0 ? (
                                        <div className="space-y-4">
                                            <Button
                                                variant="primary"
                                                className="w-full"
                                                onClick={handleRegistration}
                                                disabled={form.processing}
                                            >
                                                {form.processing ? 'Registering...' : 'Register Now'}
                                            </Button>
                                            {!hasMembership && (
                                                <Link
                                                    href={route('membership.apply')}
                                                    className="block text-center text-sm text-chaugreen hover:underline"
                                                >
                                                    Become a member to save on tournament fees
                                                </Link>
                                            )}
                                            <p className="text-center text-sm text-darkviridiangreen">
                                                Registration closes on {new Date(tournament.registration_deadline).toLocaleDateString()}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            <div className="rounded-lg bg-red-50 p-3">
                                                <p className="text-sm font-medium text-red-800">
                                                    Sorry, this tournament is full.
                                                </p>
                                            </div>
                                            <Button
                                                variant="secondary"
                                                className="w-full"
                                                href={route('tournaments.index')}
                                            >
                                                View Other Tournaments
                                            </Button>
                                        </div>
                                    )
                                ) : tournament.spots_remaining > 0 ? (
                                    <div className="space-y-4">
                                        <Link
                                            href={route('login')}
                                            className="block w-full rounded-lg bg-chaugreen px-4 py-3 text-center font-medium text-white transition-colors hover:bg-black"
                                        >
                                            Log in to Register
                                        </Link>
                                        <div className="relative">
                                            <div className="absolute inset-0 flex items-center">
                                                <div className="w-full border-t border-gray-300"></div>
                                            </div>
                                            <div className="relative flex justify-center text-sm">
                                                <span className="bg-white px-2 text-darkviridiangreen">or</span>
                                            </div>
                                        </div>
                                        <Button
                                            variant="secondary"
                                            className="w-full"
                                            onClick={() => setShowGuestForm(true)}
                                        >
                                            Register as Guest
                                        </Button>
                                        <p className="text-center text-sm text-darkviridiangreen">
                                            Don't have an account?{' '}
                                            <Link href={route('register')} className="text-chaugreen hover:underline">
                                                Sign up
                                            </Link>
                                            {' '}to save on tournament fees
                                        </p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="rounded-lg bg-red-50 p-3">
                                            <p className="text-sm font-medium text-red-800">
                                                Sorry, this tournament is full.
                                            </p>
                                        </div>
                                        <Button
                                            variant="secondary"
                                            className="w-full"
                                            href={route('tournaments.index')}
                                        >
                                            View Other Tournaments
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <GuestRegistrationModal
                isOpen={showGuestForm}
                onClose={() => setShowGuestForm(false)}
                tournament={tournament}
            />
        </MainLayout>
    );
};

export default TournamentDetail;
