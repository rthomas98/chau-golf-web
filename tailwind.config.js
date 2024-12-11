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
                lowviridiangreen: '#EFF2F0',
                midviridiangreen: '#E0E5E2',
                highviridiangreen: '#94A59A',
                darkviridiangreen: '#526559',
                darkerviridiangreen: '#29322C',

                tahitigold: '#EB7B07',
                lowtahitigold: '#FDF1E6',
                midtahitigold: '#F1A251',
                hightahitigold: '#EB7B07',
                darktahitigold: '#462402',

                mirage: '#181B26',
                lowmirage: '#E7E8E9',
                midmirage: '#D0D1D3',
                highmirage: '#5D5F67',
                darkmirage: '#090A0F',

                pearlbush: '#E0D6C8',
                lowpearlbush: '#F8F6F4',
                midpearlbush: '#E9E2D8',
                highpearlbush: '#B3ABA0',
                darkpearlbush: '#595550',

                merino: '#F8F4ED',
                lowmerino: '#FEFDFD',
                midmerino: '#FAF7F2',
                highmerino: '#C6C3BD',
                darkmerino: '#4A4947',

                white: '#FFFFFF',
            },
        },
    },

    plugins: [forms],
    presets: [require('@relume_io/relume-tailwind')],
};
