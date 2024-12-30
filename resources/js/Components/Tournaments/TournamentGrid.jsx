import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { RxChevronRight } from 'react-icons/rx';
import { Button } from "@relume_io/relume-ui";
import { PlaceholderImage } from './PlaceholderImage';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import debounce from 'lodash/debounce';

export const TournamentGrid = ({ tournaments, filters }) => {
    const { data, setData, get } = useForm({
        search: filters.search || '',
        status: filters.status || '',
        date_range: filters.date_range || '',
        sort_by: filters.sort_by || 'start_date',
        sort_direction: filters.sort_direction || 'asc',
        page: tournaments.current_page || 1
    });

    const debouncedSearch = debounce(() => {
        get(route('tournaments.index'), {
            preserveState: true,
            preserveScroll: true,
        });
    }, 300);

    const handleSearch = (e) => {
        setData('search', e.target.value);
        debouncedSearch();
    };

    const handleFilter = (field, value) => {
        setData(field, value);
        get(route('tournaments.index'), {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const handleSort = (field) => {
        const direction = data.sort_by === field && data.sort_direction === 'asc' ? 'desc' : 'asc';
        setData({
            ...data,
            sort_by: field,
            sort_direction: direction
        });
        get(route('tournaments.index'), {
            preserveState: true,
            preserveScroll: true,
        });
    };

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
                    <div className="w-full max-w-lg">
                        <p className="mb-3 font-semibold text-chaugreen md:mb-4">Featured Events</p>
                        <h1 className="mb-3 text-5xl font-bold text-darkerviridiangreen md:mb-4 md:text-7xl lg:text-8xl">
                            Upcoming Tournaments
                        </h1>
                        <p className="text-darkviridiangreen md:text-md">
                            Join us for these exciting tournaments and showcase your skills on the green.
                        </p>
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="relative flex-1 max-w-sm">
                        <input
                            type="text"
                            placeholder="Search tournaments..."
                            value={data.search}
                            onChange={handleSearch}
                            className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:border-chaugreen focus:ring-1 focus:ring-chaugreen"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <select
                            value={data.status}
                            onChange={(e) => handleFilter('status', e.target.value)}
                            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-chaugreen focus:ring-1 focus:ring-chaugreen"
                        >
                            <option value="">All Status</option>
                            <option value="published">Upcoming</option>
                            <option value="in_progress">In Progress</option>
                        </select>
                        <select
                            value={data.date_range}
                            onChange={(e) => handleFilter('date_range', e.target.value)}
                            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-chaugreen focus:ring-1 focus:ring-chaugreen"
                        >
                            <option value="">All Dates</option>
                            <option value="this_month">This Month</option>
                            <option value="next_month">Next Month</option>
                            <option value="next_3_months">Next 3 Months</option>
                        </select>
                        <select
                            value={`${data.sort_by}-${data.sort_direction}`}
                            onChange={(e) => {
                                const [field, direction] = e.target.value.split('-');
                                setData({ ...data, sort_by: field, sort_direction: direction });
                                get(route('tournaments.index'), {
                                    preserveState: true,
                                    preserveScroll: true,
                                });
                            }}
                            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-chaugreen focus:ring-1 focus:ring-chaugreen"
                        >
                            <option value="start_date-asc">Date (Earliest)</option>
                            <option value="start_date-desc">Date (Latest)</option>
                            <option value="entry_fee-asc">Price (Low to High)</option>
                            <option value="entry_fee-desc">Price (High to Low)</option>
                        </select>
                    </div>
                </div>

                {/* Tournament Grid */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                    {tournaments.data.map((tournament, index) => (
                        <motion.div
                            key={tournament.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href={route('tournaments.show', tournament.id)}
                                className="group flex size-full flex-col items-center justify-start overflow-hidden rounded-lg border border-chaugreen/20 bg-white transition-all duration-300 hover:border-chaugreen hover:shadow-lg"
                            >
                                <div className="relative w-full overflow-hidden pt-[66%]">
                                    {tournament.image_url ? (
                                        <img
                                            src={tournament.image_url}
                                            alt={tournament.name}
                                            className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 size-full">
                                            <PlaceholderImage />
                                        </div>
                                    )}
                                </div>
                                <div className="flex w-full flex-1 flex-col justify-between p-6">
                                    <div className="mb-4 flex items-center justify-between">
                                        <p className="mr-4 rounded-full bg-chaugreen/10 px-3 py-1 text-sm font-semibold text-chaugreen">
                                            {tournament.status === 'published' ? 'Upcoming' : 'In Progress'}
                                        </p>
                                        <p className="inline text-sm font-semibold text-darkerviridiangreen">
                                            ${tournament.entry_fee}
                                        </p>
                                    </div>

                                    <div className="flex w-full flex-col items-start justify-start">
                                        <h2 className="mb-2 text-xl font-bold text-darkerviridiangreen transition-colors group-hover:text-chaugreen md:text-2xl">
                                            {tournament.name}
                                        </h2>
                                        <p className="text-darkviridiangreen line-clamp-2">
                                            {tournament.description}
                                        </p>
                                        <div className="mt-4 space-y-2 text-sm text-darkviridiangreen/80">
                                            <p>
                                                {new Date(tournament.start_date).toLocaleDateString()} - {new Date(tournament.end_date).toLocaleDateString()}
                                            </p>
                                            <p>{tournament.location}</p>
                                            <p>{tournament.spots_remaining} spots remaining</p>
                                        </div>
                                        <div className="mt-6 flex items-center text-chaugreen transition-colors group-hover:text-midchaugreen">
                                            <span className="font-medium">View Details</span>
                                            <RxChevronRight className="ml-1 h-5 w-5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                {tournaments.last_page > 1 && (
                    <div className="mt-12 flex items-center justify-center gap-4">
                        <Button
                            variant="secondary"
                            disabled={tournaments.current_page === 1}
                            onClick={() => handleFilter('page', tournaments.current_page - 1)}
                            className="flex items-center gap-2"
                        >
                            <ChevronLeft className="h-4 w-4" />
                            Previous
                        </Button>
                        <span className="text-sm text-gray-600">
                            Page {tournaments.current_page} of {tournaments.last_page}
                        </span>
                        <Button
                            variant="secondary"
                            disabled={tournaments.current_page === tournaments.last_page}
                            onClick={() => handleFilter('page', tournaments.current_page + 1)}
                            className="flex items-center gap-2"
                        >
                            Next
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}; 