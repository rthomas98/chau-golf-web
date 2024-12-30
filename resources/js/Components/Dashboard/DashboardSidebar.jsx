import React from 'react';
import { Link } from '@inertiajs/react';
import { Calendar, Trophy, Users, Settings, Home } from 'lucide-react';

const DashboardSidebar = ({ currentRoute }) => {
    const navigation = [
        { name: 'Overview', href: route('dashboard'), icon: Home },
        { name: 'My Registrations', href: route('dashboard.registrations'), icon: Calendar },
        { name: 'Play Dates', href: route('play-dates.index'), icon: Calendar },
        { name: 'Tournaments', href: route('tournaments.index'), icon: Trophy },
        { name: 'My Profile', href: route('profile.edit'), icon: Settings },
    ];

    return (
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
            <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                    <img
                        className="h-8 w-auto"
                        src="/images/logo.png"
                        alt="Chau Golf"
                    />
                </div>
                <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                            <ul role="list" className="-mx-2 space-y-1">
                                {navigation.map((item) => {
                                    const isActive = currentRoute === item.href;
                                    return (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className={`
                                                    group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6
                                                    ${isActive
                                                        ? 'bg-gray-50 text-chaugreen'
                                                        : 'text-gray-700 hover:bg-gray-50 hover:text-chaugreen'
                                                    }
                                                `}
                                            >
                                                <item.icon
                                                    className={`h-6 w-6 shrink-0 ${isActive ? 'text-chaugreen' : 'text-gray-400 group-hover:text-chaugreen'}`}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                        <li className="mt-auto">
                            <div className="rounded-md bg-gray-50 p-4">
                                <div className="flex items-center gap-x-4">
                                    <div className="flex-1 truncate">
                                        <div className="flex items-center space-x-3">
                                            <h3 className="truncate text-sm font-medium text-gray-900">Need Help?</h3>
                                        </div>
                                        <p className="mt-1 truncate text-sm text-gray-500">
                                            Contact support for assistance
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <a
                                        href="mailto:support@chaugolf.com"
                                        className="text-sm font-medium text-chaugreen hover:text-chaugreen/90"
                                    >
                                        Email Support →
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default DashboardSidebar; 