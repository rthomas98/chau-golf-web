import React, { useEffect } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { RxChevronRight } from 'react-icons/rx';
import { Button } from "@relume_io/relume-ui";
import { Search, Filter, ChevronLeft, ChevronRight, Calendar, Clock, MapPin, Users, DollarSign } from 'lucide-react';
import debounce from 'lodash/debounce';
import AOS from 'aos';
import 'aos/dist/aos.css';

const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
};

export const PlayDateGrid = ({ playDates = { data: [] }, filters = {} }) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out',
        });
    }, []);

    const { data, setData, get } = useForm({
        search: filters?.search || '',
        date_range: filters?.date_range || '',
        location: filters?.location || '',
        sort_by: filters?.sort_by || 'date',
        sort_direction: filters?.sort_direction || 'asc',
        page: playDates?.current_page || 1
    });

    const debouncedSearch = debounce(() => {
        get(route('play-dates.index'), {
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
        get(route('play-dates.index'), {
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
        get(route('play-dates.index'), {
            preserveState: true,
            preserveScroll: true,
        });
    };

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div 
                    className="rb-12 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20"
                    data-aos="fade-down"
                >
                    <div className="w-full max-w-lg">
                        <p className="mb-3 font-semibold text-chaugreen md:mb-4">Golf Meetups</p>
                        <h1 className="mb-3 text-5xl font-bold text-darkerviridiangreen md:mb-4 md:text-7xl lg:text-8xl">
                            Play Dates
                        </h1>
                        <p className="text-darkviridiangreen md:text-md">
                            Join fellow golfers for casual rounds and build lasting connections on the course.
                        </p>
                    </div>
                </div>

                {/* Search and Filters */}
                <div 
                    className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="relative flex-1 max-w-sm">
                        <input
                            type="text"
                            placeholder="Search play dates..."
                            value={data.search}
                            onChange={handleSearch}
                            className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:border-chaugreen focus:ring-1 focus:ring-chaugreen"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <select
                            value={data.date_range}
                            onChange={(e) => handleFilter('date_range', e.target.value)}
                            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-chaugreen focus:ring-1 focus:ring-chaugreen"
                        >
                            <option value="">All Dates</option>
                            <option value="this_week">This Week</option>
                            <option value="next_week">Next Week</option>
                            <option value="this_month">This Month</option>
                        </select>
                        <select
                            value={data.location}
                            onChange={(e) => handleFilter('location', e.target.value)}
                            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-chaugreen focus:ring-1 focus:ring-chaugreen"
                        >
                            <option value="">All Locations</option>
                            <option value="San Francisco, CA">San Francisco</option>
                            <option value="Half Moon Bay, CA">Half Moon Bay</option>
                            <option value="Santa Cruz, CA">Santa Cruz</option>
                            <option value="Pacifica, CA">Pacifica</option>
                            <option value="Daly City, CA">Daly City</option>
                        </select>
                        <select
                            value={`${data.sort_by}-${data.sort_direction}`}
                            onChange={(e) => {
                                const [field, direction] = e.target.value.split('-');
                                setData({ ...data, sort_by: field, sort_direction: direction });
                                get(route('play-dates.index'), {
                                    preserveState: true,
                                    preserveScroll: true,
                                });
                            }}
                            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-chaugreen focus:ring-1 focus:ring-chaugreen"
                        >
                            <option value="date-asc">Date (Earliest)</option>
                            <option value="date-desc">Date (Latest)</option>
                            <option value="guest_fee-asc">Price (Low to High)</option>
                            <option value="guest_fee-desc">Price (High to Low)</option>
                        </select>
                    </div>
                </div>

                {/* Play Dates Grid */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                    {playDates.data.map((playDate, index) => (
                        <div
                            key={playDate.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <Link
                                href={route('play-dates.show', playDate.id)}
                                className="group flex size-full flex-col items-center justify-start overflow-hidden rounded-lg border border-chaugreen/20 bg-white transition-all duration-300 hover:border-chaugreen hover:shadow-lg"
                            >
                                <div className="relative w-full overflow-hidden pt-[66%] bg-gradient-to-br from-chaugreen to-chaugreen/70">
                                    <div className="absolute inset-0 p-6 text-white">
                                        <h2 className="text-2xl font-bold mb-2">{playDate.title}</h2>
                                        <p className="text-white/90 line-clamp-2">{playDate.description}</p>
                                    </div>
                                </div>
                                <div className="flex w-full flex-1 flex-col justify-between p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-darkviridiangreen">
                                            <Calendar className="h-5 w-5 text-chaugreen" />
                                            <span>{new Date(playDate.date).toLocaleDateString('en-US', {
                                                weekday: 'long',
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-darkviridiangreen">
                                            <Clock className="h-5 w-5 text-chaugreen" />
                                            <span>{formatTime(playDate.tee_time)}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-darkviridiangreen">
                                            <MapPin className="h-5 w-5 text-chaugreen" />
                                            <span>{playDate.course_name}</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 border-t border-gray-200 pt-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <DollarSign className="h-5 w-5 text-chaugreen" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Guest Fee</p>
                                                    <p className="text-lg font-semibold text-gray-900">${playDate.guest_fee}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="h-5 w-5 text-chaugreen" />
                                                <div>
                                                    <p className="text-sm text-gray-500">Spots</p>
                                                    <p className="text-lg font-semibold text-gray-900">
                                                        {playDate.spots_remaining} of {playDate.max_guests}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6 flex items-center text-chaugreen transition-colors group-hover:text-midchaugreen">
                                            <span className="font-medium">View Details</span>
                                            <RxChevronRight className="ml-1 h-5 w-5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {(!playDates.data || playDates.data.length === 0) && (
                    <div 
                        className="flex flex-col items-center justify-center py-12"
                        data-aos="fade-up"
                    >
                        <Calendar className="h-16 w-16 text-chaugreen/50 mb-4" />
                        <h3 className="text-xl font-semibold text-darkerviridiangreen mb-2">No Play Dates Found</h3>
                        <p className="text-darkviridiangreen text-center max-w-md">
                            There are no play dates available at the moment. Please check back later or adjust your filters.
                        </p>
                    </div>
                )}

                {/* Pagination */}
                {playDates.last_page > 1 && (
                    <div 
                        className="mt-12 flex items-center justify-center gap-4"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <Button
                            variant="secondary"
                            disabled={playDates.current_page === 1}
                            onClick={() => handleFilter('page', playDates.current_page - 1)}
                            className="flex items-center gap-2"
                        >
                            <ChevronLeft className="h-4 w-4" />
                            Previous
                        </Button>
                        <span className="text-sm text-gray-600">
                            Page {playDates.current_page} of {playDates.last_page}
                        </span>
                        <Button
                            variant="secondary"
                            disabled={playDates.current_page === playDates.last_page}
                            onClick={() => handleFilter('page', playDates.current_page + 1)}
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