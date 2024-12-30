import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isSameDay } from 'date-fns';

const PlayDateCalendar = ({ playDates, onDateSelect }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const firstDayOfMonth = startOfMonth(currentMonth);
    const lastDayOfMonth = endOfMonth(currentMonth);
    const days = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });

    const goToPreviousMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const goToNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const goToToday = () => {
        setCurrentMonth(new Date());
        setSelectedDate(new Date());
        onDateSelect(new Date());
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        onDateSelect(date);
    };

    const getEventsForDate = (date) => {
        return playDates.filter(playDate => 
            isSameDay(new Date(playDate.play_date.date), date)
        );
    };

    return (
        <div className="lg:flex lg:h-full lg:flex-col">
            <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
                <h1 className="text-base font-semibold text-gray-900">
                    <time dateTime={format(currentMonth, 'yyyy-MM')}>
                        {format(currentMonth, 'MMMM yyyy')}
                    </time>
                </h1>
                <div className="flex items-center">
                    <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
                        <button
                            type="button"
                            onClick={goToPreviousMonth}
                            className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
                        >
                            <span className="sr-only">Previous month</span>
                            <ChevronLeftIcon className="h-5 w-5" />
                        </button>
                        <button
                            type="button"
                            onClick={goToToday}
                            className="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
                        >
                            Today
                        </button>
                        <button
                            type="button"
                            onClick={goToNextMonth}
                            className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
                        >
                            <span className="sr-only">Next month</span>
                            <ChevronRightIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </header>
            <div className="shadow ring-1 ring-black/5 lg:flex lg:flex-auto lg:flex-col">
                <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold text-gray-700 lg:flex-none">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                        <div key={day} className="flex justify-center bg-white py-2">
                            <span>{day}</span>
                        </div>
                    ))}
                </div>
                <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
                    <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
                        {days.map((day) => {
                            const events = getEventsForDate(day);
                            return (
                                <div
                                    key={day.toString()}
                                    onClick={() => handleDateSelect(day)}
                                    className={`relative bg-white px-3 py-2 cursor-pointer hover:bg-gray-50 ${
                                        !isSameMonth(day, currentMonth) ? 'bg-gray-50 text-gray-500' : ''
                                    }`}
                                >
                                    <time
                                        dateTime={format(day, 'yyyy-MM-dd')}
                                        className={`flex h-6 w-6 items-center justify-center rounded-full ${
                                            isToday(day) ? 'bg-chaugreen text-white' : ''
                                        } ${selectedDate && isSameDay(day, selectedDate) ? 'bg-gray-900 text-white' : ''}`}
                                    >
                                        {format(day, 'd')}
                                    </time>
                                    {events.length > 0 && (
                                        <ol className="mt-2">
                                            {events.map((event) => (
                                                <li key={event.id}>
                                                    <a href={route('play-dates.show', event.play_date.id)} className="group flex">
                                                        <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-chaugreen">
                                                            {event.play_date.title}
                                                        </p>
                                                        <time dateTime={event.play_date.tee_time} className="ml-3 hidden flex-none text-gray-500 group-hover:text-chaugreen xl:block">
                                                            {format(new Date(`2000-01-01T${event.play_date.tee_time}`), 'h:mma')}
                                                        </time>
                                                    </a>
                                                </li>
                                            ))}
                                        </ol>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayDateCalendar; 