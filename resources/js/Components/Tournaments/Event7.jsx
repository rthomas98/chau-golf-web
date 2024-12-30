import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';

export const Event7 = ({ tournaments }) => {
    return (
        <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container mx-auto">
                <div className="mx-auto max-w-3xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-5 text-4xl font-bold text-black md:text-5xl lg:text-6xl"
                    >
                        Featured Tournaments
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-12 text-black/70 md:mb-16 lg:mb-20 md:text-lg"
                    >
                        Discover our upcoming tournaments and secure your spot in these exciting competitions
                    </motion.p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {tournaments.map((tournament, index) => (
                        <motion.div
                            key={tournament.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                        >
                            <Link href={route('tournaments.show', tournament.id)}>
                                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                                    <img
                                        src={tournament.image_url}
                                        alt={tournament.name}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-0" />
                                </div>

                                <div className="p-6">
                                    <h3 className="mb-4 text-2xl font-bold text-black">
                                        {tournament.name}
                                    </h3>
                                    <p className="mb-6 text-black/70 line-clamp-2">
                                        {tournament.description}
                                    </p>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-sm text-black/70">
                                            <Calendar className="h-5 w-5" />
                                            <span>
                                                {new Date(tournament.start_date).toLocaleDateString()} - {new Date(tournament.end_date).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-black/70">
                                            <MapPin className="h-5 w-5" />
                                            <span>{tournament.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-black/70">
                                            <Users className="h-5 w-5" />
                                            <span>
                                                {tournament.spots_remaining} spots remaining of {tournament.max_participants}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center justify-between">
                                        <span className="text-lg font-semibold text-black">
                                            ${tournament.entry_fee}
                                        </span>
                                        <span className={`rounded-full px-3 py-1 text-sm font-medium ${
                                            tournament.status === 'published' 
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-blue-100 text-blue-800'
                                        }`}>
                                            {tournament.status === 'published' ? 'Upcoming' : 'In Progress'}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

Event7.propTypes = {
    tournaments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        start_date: PropTypes.string.isRequired,
        end_date: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        entry_fee: PropTypes.number.isRequired,
        max_participants: PropTypes.number.isRequired,
        spots_remaining: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
    })).isRequired,
};
