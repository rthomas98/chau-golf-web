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
                viridiangreen: '#677F70',
                tahitigold: '#EB7B07',
                mirage: '#181B26',
                pearlbush: '#E0D6C8',
                merino: '#F8F4ED',
                white: '#FFFFFF',
            },
        },
    },

    plugins: [forms],
    presets: [require('@relume_io/relume-tailwind')],
};
