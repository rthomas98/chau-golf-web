import React from 'react';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-white pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/" className="flex items-center justify-center">
                    <img 
                        src="/images/ChauChau-Golf.svg" 
                        alt="ChauChau Golf" 
                        className="h-24 w-auto"
                    />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-4xl sm:rounded-lg border border-gray-200">
                {children}
            </div>
        </div>
    );
}
