import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}'
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#93c5fd',
                secondary: '#c4b5fd',
                accent: '#fb7185',
                'accent-2': '#fdba74',
            },
        },
    },

    plugins: [forms],
    presets: [require('@relume_io/relume-tailwind')],
};
