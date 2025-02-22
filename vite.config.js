import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
            publicDirectory: 'public',
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
            '@images': '/resources/images'
        },
    },
    build: {
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: [
                        'react',
                        'react-dom',
                        '@inertiajs/react',
                        'mapbox-gl',
                        'react-map-gl'
                    ],
                    relume: [
                        '@relume_io/relume-ui',
                        '@relume_io/relume-tailwind'
                    ]
                }
            }
        }
    }
});
