import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Replace with your Mapbox access token
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

export const TournamentMap = ({ location, name }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);

    useEffect(() => {
        if (!location) return;

        // Convert address to coordinates using Mapbox Geocoding API
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${mapboxgl.accessToken}`)
            .then(response => response.json())
            .then(data => {
                if (data.features && data.features.length > 0) {
                    const [lng, lat] = data.features[0].center;
                    
                    if (map.current) return;

                    // Initialize map
                    map.current = new mapboxgl.Map({
                        container: mapContainer.current,
                        style: 'mapbox://styles/mapbox/streets-v12',
                        center: [lng, lat],
                        zoom: 13
                    });

                    // Add navigation controls
                    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

                    // Add marker
                    const el = document.createElement('div');
                    el.className = 'marker';
                    el.style.backgroundImage = 'url(https://docs.mapbox.com/mapbox-gl-js/assets/pin.svg)';
                    el.style.width = '32px';
                    el.style.height = '32px';
                    el.style.backgroundSize = 'cover';

                    marker.current = new mapboxgl.Marker(el)
                        .setLngLat([lng, lat])
                        .setPopup(
                            new mapboxgl.Popup({ offset: 25 })
                                .setHTML(`<h3 class="font-semibold">${name}</h3><p>${location}</p>`)
                        )
                        .addTo(map.current);
                }
            });

        return () => {
            if (map.current) {
                map.current.remove();
                map.current = null;
            }
        };
    }, [location, name]);

    return (
        <div className="relative rounded-lg overflow-hidden">
            <div ref={mapContainer} className="h-[400px] w-full" />
            <div className="absolute bottom-4 left-4 z-10 rounded bg-white/90 px-4 py-2 text-sm backdrop-blur">
                <p className="font-medium text-darkerviridiangreen">{name}</p>
                <p className="text-darkviridiangreen">{location}</p>
            </div>
        </div>
    );
}; 