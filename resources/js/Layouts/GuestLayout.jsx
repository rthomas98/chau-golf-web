import React from 'react';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-[#677F70] pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/" className="text-4xl font-bold text-white">
                    ChauChau Golf
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white/90 backdrop-blur-sm px-6 py-4 shadow-lg sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
