import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { useInView } from 'react-intersection-observer';

// Lazy load mapbox-gl
const loadMapbox = () => import('mapbox-gl').then(module => {
    const mapboxgl = module.default;
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
    return mapboxgl;
});

const MapLoader = () => (
    <div className="w-full h-[400px] bg-gray-100 animate-pulse flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
    </div>
);

export const TournamentMap = ({ location, name }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (!location || !inView) return;

        let isMounted = true;

        const initializeMap = async () => {
            try {
                const mapboxgl = await loadMapbox();

                // Convert address to coordinates using Mapbox Geocoding API
                const response = await fetch(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${mapboxgl.accessToken}`
                );
                const data = await response.json();

                if (!isMounted || !data.features?.length) return;

                const [lng, lat] = data.features[0].center;
                
                if (map.current) return;

                // Initialize map with optimized options
                map.current = new mapboxgl.Map({
                    container: mapContainer.current,
                    style: 'mapbox://styles/mapbox/streets-v12',
                    center: [lng, lat],
                    zoom: 13,
                    attributionControl: false,
                    preserveDrawingBuffer: false,
                    antialias: false,
                    trackResize: true,
                });

                // Add navigation controls
                map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

                // Create marker element
                const el = document.createElement('div');
                el.className = 'marker';
                el.style.backgroundImage = 'url(https://docs.mapbox.com/mapbox-gl-js/assets/pin.svg)';
                el.style.width = '32px';
                el.style.height = '32px';
                el.style.backgroundSize = 'cover';

                // Add marker
                marker.current = new mapboxgl.Marker(el)
                    .setLngLat([lng, lat])
                    .setPopup(
                        new mapboxgl.Popup({ offset: 25 })
                            .setHTML(`<h3 class="font-semibold">${name}</h3><p>${location}</p>`)
                    )
                    .addTo(map.current);
            } catch (error) {
                console.error('Error initializing map:', error);
            }
        };

        initializeMap();

        return () => {
            isMounted = false;
            if (map.current) {
                map.current.remove();
                map.current = null;
            }
        };
    }, [location, name, inView]);

    return (
        <div ref={ref}>
            <Suspense fallback={<MapLoader />}>
                <div ref={mapContainer} className="w-full h-[400px] rounded-lg shadow-lg" />
            </Suspense>
            <div className="absolute bottom-4 left-4 z-10 rounded bg-white/90 px-4 py-2 text-sm backdrop-blur">
                <p className="font-medium text-darkerviridiangreen">{name}</p>
                <p className="text-darkviridiangreen">{location}</p>
            </div>
        </div>
    );
};