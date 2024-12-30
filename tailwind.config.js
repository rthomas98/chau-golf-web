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
                sans: ['Sarabun', ...defaultTheme.fontFamily.sans],
                headers: ['Alatsi', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                chaugreen: '#12a34a',
                white: '#FFFFFF',
                grey: '#F5F5F5',
            },
        },
    },

    plugins: [forms],
    presets: [require('@relume_io/relume-tailwind')],
};
