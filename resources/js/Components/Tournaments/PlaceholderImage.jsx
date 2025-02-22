import React from 'react';

export const PlaceholderImage = () => (
    <svg
        className="h-full w-full text-gray-200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 640 400"
    >
        <rect width="100%" height="100%" fill="#e5e7eb" />
        <path
            d="M320 150.7c-4.8 0-9.5.5-14 1.5-14.8 3.2-27.8 11.4-36.5 22.8-9.4 12.3-14 27.5-12.8 42.8.9 11.7 5.3 22.8 12.8 32.1 3.1 3.8 6.6 7.2 10.5 10.1 11.5 8.5 25.6 13 40 13 14.4 0 28.5-4.5 40-13 3.9-2.9 7.4-6.3 10.5-10.1 7.5-9.3 11.9-20.4 12.8-32.1 1.2-15.3-3.4-30.5-12.8-42.8-8.7-11.4-21.7-19.6-36.5-22.8-4.5-1-9.2-1.5-14-1.5zm0 20c3.3 0 6.5.3 9.6 1 10.2 2.2 19.1 7.8 25.1 15.7 6.5 8.5 9.6 19 8.8 29.5-.6 8.1-3.6 15.7-8.8 22.1-2.1 2.6-4.5 5-7.2 7-7.9 5.9-17.6 9-27.5 9s-19.6-3.1-27.5-9c-2.7-2-5.1-4.4-7.2-7-5.2-6.4-8.2-14-8.8-22.1-.8-10.5 2.3-21 8.8-29.5 6-7.9 14.9-13.5 25.1-15.7 3.1-.7 6.3-1 9.6-1z"
            fill="#9ca3af"
        />
        <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#6b7280"
            fontSize="16"
            fontFamily="system-ui"
        >
            No Image Available
        </text>
    </svg>
); 