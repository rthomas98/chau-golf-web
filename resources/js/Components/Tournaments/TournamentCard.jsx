import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, DollarSign, Trophy } from 'lucide-react';
import { Button } from '@relume_io/relume-ui';
import { formatDate, formatTime } from '@/utils/formatters';

const TournamentCard = ({ registration, onQuickAction }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
        >
            <div className="absolute top-4 right-4">
                <Trophy className="h-5 w-5 text-chaugreen opacity-50" />
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                        {registration.tournament.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                        {registration.tournament.description}
                    </p>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4 text-chaugreen" />
                        {formatDate(registration.tournament.date)}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4 text-chaugreen" />
                        {formatTime(registration.tournament.start_time)}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-chaugreen" />
                        {registration.tournament.venue}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <DollarSign className="h-4 w-4 text-chaugreen" />
                        ${parseFloat(registration.tournament.entry_fee).toFixed(2)}
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                            style={{
                                backgroundColor: registration.status === 'confirmed' ? 'rgb(220 252 231)' :
                                    registration.status === 'pending' ? 'rgb(254 249 195)' :
                                        registration.status === 'cancelled' ? 'rgb(254 226 226)' : 'rgb(243 244 246)',
                                color: registration.status === 'confirmed' ? 'rgb(22 163 74)' :
                                    registration.status === 'pending' ? 'rgb(161 98 7)' :
                                        registration.status === 'cancelled' ? 'rgb(220 38 38)' : 'rgb(107 114 128)'
                            }}
                        >
                            {registration.status.charAt(0).toUpperCase() + registration.status.slice(1)}
                        </div>
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => window.location.href = route('tournaments.show', registration.tournament.id)}
                        >
                            View Details
                        </Button>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex items-center gap-2">
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => onQuickAction('update', registration)}
                            className="flex-1"
                        >
                            Edit
                        </Button>
                        <Button
                            variant="danger"
                            size="sm"
                            onClick={() => onQuickAction('cancel', registration)}
                            className="flex-1"
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TournamentCard; 