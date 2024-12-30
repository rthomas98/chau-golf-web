import React, { useEffect, useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@relume_io/relume-ui';
import { Calendar, Clock, MapPin, Users, DollarSign, X, Cloud, Wind, Thermometer, Umbrella, Sun, Sunrise, Sunset, AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
import PropTypes from 'prop-types';
import { formatDate, formatTime } from '@/utils/formatters';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { CalendarIcon } from '@heroicons/react/24/outline';
import axios from 'axios';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const PlayDateShow = ({ playDate, auth }) => {
    const [showRegistration, setShowRegistration] = useState(false);
    const [viewport, setViewport] = useState({
        latitude: 37.7749,
        longitude: -122.4194,
        zoom: 12,
        bearing: 0,
        pitch: 0,
        padding: { top: 0, bottom: 0, left: 0, right: 0 }
    });
    const [isMapLoading, setIsMapLoading] = useState(true);
    const [mapError, setMapError] = useState(false);
    const [rescheduleOptions, setRescheduleOptions] = useState(null);
    const [loadingReschedule, setLoadingReschedule] = useState(false);
    const [markerPosition, setMarkerPosition] = useState({
        latitude: 37.7749,
        longitude: -122.4194
    });

    const { data, setData, post, processing, errors, reset } = useForm({
        member_name: auth.user?.name || '',
        member_email: auth.user?.email || '',
        member_phone: auth.user?.phone || '',
        guest_count: '',
        guests: [],
    });

    const handleGuestCountChange = (e) => {
        const count = parseInt(e.target.value, 10) || 0;
        setData(data => ({
            ...data,
            guest_count: e.target.value,
            guests: Array(count).fill().map(() => ({ name: '', email: '' }))
        }));
    };

    const updateGuest = (index, field, value) => {
        setData(data => ({
            ...data,
            guests: data.guests.map((guest, i) => 
                i === index ? { ...guest, [field]: value } : guest
            ),
        }));
    };

    useEffect(() => {
        if (playDate.location) {
            setIsMapLoading(true);
            fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(playDate.location)}.json?access_token=${MAPBOX_TOKEN}`)
                .then(response => response.json())
                .then(data => {
                    if (data.features && data.features.length > 0) {
                        const [lng, lat] = data.features[0].center;
                        setMarkerPosition({
                            latitude: lat,
                            longitude: lng
                        });
                        setViewport(prev => ({
                            ...prev,
                            latitude: lat,
                            longitude: lng,
                            zoom: 12,
                            bearing: 0,
                            pitch: 0,
                            padding: { top: 0, bottom: 0, left: 0, right: 0 }
                        }));
                    } else {
                        setMapError(true);
                    }
                })
                .catch(error => {
                    console.error('Error geocoding location:', error);
                    setMapError(true);
                })
                .finally(() => {
                    setIsMapLoading(false);
                });
        }
    }, [playDate.location]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('play-dates.register', playDate.id), {
            onSuccess: () => {
                setShowRegistration(false);
                reset();
            },
        });
    };

    const [showEditModal, setShowEditModal] = useState(false);
    const [editingGuest, setEditingGuest] = useState(null);

    const { data: editData, setData: setEditData, post: postEdit, processing: processingEdit, errors: editErrors, reset: resetEdit } = useForm({
        guest_name: '',
        guest_email: '',
        guest_phone: '',
    });

    useEffect(() => {
        if (editingGuest) {
            setEditData({
                guest_name: editingGuest.guest_name,
                guest_email: editingGuest.guest_email,
                guest_phone: editingGuest.guest_phone,
            });
        }
    }, [editingGuest]);

    const handleEditSubmit = (e) => {
        e.preventDefault();
        postEdit(route('play-dates.update-registration', { playDate: playDate.id, guest: editingGuest.id }), {
            onSuccess: () => {
                setShowEditModal(false);
                setEditingGuest(null);
                resetEdit();
            },
        });
    };

    const handleGoogleCalendar = async () => {
        const response = await axios.get(route('play-dates.calendar.google', playDate.id));
        window.open(response.data.url, '_blank');
    };

    const checkRescheduleOptions = async () => {
        setLoadingReschedule(true);
        try {
            const response = await axios.get(route('play-dates.suggest-reschedule', playDate.id));
            setRescheduleOptions(response.data);
        } catch (error) {
            console.error('Error fetching reschedule options:', error);
        } finally {
            setLoadingReschedule(false);
        }
    };

    return (
        <MainLayout>
            <Head title={playDate.title} />
            
            <div className="min-h-screen bg-gradient-to-br from-white via-pearlbush to-merino">
                {/* Hero Section */}
                <div className="relative overflow-hidden bg-gradient-to-br from-chaugreen to-chaugreen/70 py-24">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-chaugreen to-chaugreen/70 opacity-90" />
                    </div>
                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <motion.h1 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                            >
                                {playDate.title}
                            </motion.h1>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mt-6 text-lg leading-8 text-white/90"
                            >
                                {playDate.description}
                            </motion.p>
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr,1fr]">
                        {/* Left Column - Map and Details */}
                        <div className="space-y-8">
                            {/* Map */}
                            <div className="overflow-hidden rounded-xl border border-chaugreen/20 bg-white shadow-lg">
                                <div className="h-[400px] w-full">
                                    {isMapLoading ? (
                                        <div className="flex h-full items-center justify-center bg-gray-50">
                                            <div className="text-center">
                                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-chaugreen"></div>
                                                <p className="mt-2 text-gray-600">Loading map...</p>
                                            </div>
                                        </div>
                                    ) : mapError ? (
                                        <div className="flex h-full items-center justify-center bg-gray-50">
                                            <div className="text-center text-gray-600">
                                                <MapPin className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                                                <p>Unable to load map location</p>
                                                <p className="text-sm mt-1">{playDate.location}</p>
                                            </div>
                                        </div>
                                    ) : viewport ? (
                                        <Map
                                            initialViewState={viewport}
                                            onMove={evt => setViewport(evt.viewState)}
                                            mapStyle="mapbox://styles/mapbox/streets-v11"
                                            mapboxAccessToken={MAPBOX_TOKEN}
                                            interactive={true}
                                            onClick={e => e.preventDefault()}
                                            scrollZoom={true}
                                            dragRotate={false}
                                            attributionControl={true}
                                            style={{ width: '100%', height: '100%' }}
                                        >
                                            <Marker 
                                                longitude={markerPosition.longitude} 
                                                latitude={markerPosition.latitude}
                                                color="#16A34A"
                                            />
                                        </Map>
                                    ) : (
                                        <div className="flex h-full items-center justify-center bg-gray-50">
                                            <div className="text-center text-gray-600">
                                                <MapPin className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                                                <p>Initializing map...</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Course Details */}
                            <div className="overflow-hidden rounded-xl border border-chaugreen/20 bg-white p-8 shadow-lg">
                                <h2 className="mb-6 text-2xl font-bold text-darkerviridiangreen">Course Details</h2>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 text-darkviridiangreen">
                                            <Calendar className="h-6 w-6 text-chaugreen" />
                                            <div>
                                                <p className="text-sm text-gray-500">Date</p>
                                                <p className="text-lg font-semibold">
                                                    {new Date(playDate.date).toLocaleDateString('en-US', {
                                                        weekday: 'long',
                                                        month: 'long',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 text-darkviridiangreen">
                                            <Clock className="h-6 w-6 text-chaugreen" />
                                            <div>
                                                <p className="text-sm text-gray-500">Tee Time</p>
                                                <p className="text-lg font-semibold">
                                                    {formatTime(playDate.tee_time)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 text-darkviridiangreen">
                                            <MapPin className="h-6 w-6 text-chaugreen" />
                                            <div>
                                                <p className="text-sm text-gray-500">Location</p>
                                                <p className="text-lg font-semibold">{playDate.course_name}</p>
                                                <p className="text-sm text-gray-600">{playDate.location}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 text-darkviridiangreen">
                                            <Users className="h-6 w-6 text-chaugreen" />
                                            <div>
                                                <p className="text-sm text-gray-500">Host</p>
                                                <p className="text-lg font-semibold">{playDate.host.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Weather Forecast */}
                            <div className="overflow-hidden rounded-xl border border-chaugreen/20 bg-white p-8 shadow-lg">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold text-darkerviridiangreen">Weather Forecast</h2>
                                    {playDate.weather?.play_conditions?.overall_rating && (
                                        <div className="flex items-center gap-2">
                                            <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium
                                                ${playDate.weather.play_conditions.overall_rating === 'Excellent' ? 'bg-green-100 text-green-800' :
                                                playDate.weather.play_conditions.overall_rating === 'Good' ? 'bg-blue-100 text-blue-800' :
                                                playDate.weather.play_conditions.overall_rating === 'Fair' ? 'bg-yellow-100 text-yellow-800' :
                                                playDate.weather.play_conditions.overall_rating === 'Challenging' ? 'bg-orange-100 text-orange-800' :
                                                'bg-red-100 text-red-800'}`}>
                                                {playDate.weather.play_conditions.overall_rating} Playing Conditions
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {!playDate.weather ? (
                                    <div className="text-center py-8">
                                        <Cloud className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                                        <p className="text-gray-600">Weather data unavailable. Please check local conditions.</p>
                                        <p className="text-sm text-gray-500 mt-2">Weather information will be updated closer to the play date.</p>
                                    </div>
                                ) : (
                                    <>
                                        {/* Current Conditions */}
                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-8">
                                            {playDate.weather.current && (
                                                <div className="space-y-6">
                                                    <div className="flex items-center gap-3">
                                                        <div className="relative h-16 w-16">
                                                            {playDate.weather.current.icon && (
                                                                <img 
                                                                    src={`https://openweathermap.org/img/wn/${playDate.weather.current.icon}@2x.png`}
                                                                    alt={playDate.weather.current.conditions || 'Weather conditions'}
                                                                    className="absolute inset-0 size-full"
                                                                />
                                                            )}
                                                        </div>
                                                        <div>
                                                            <p className="text-3xl font-bold text-gray-900">
                                                                {playDate.weather.current.temperature || 'N/A'}
                                                            </p>
                                                            {playDate.weather.current.feels_like && (
                                                                <p className="text-sm text-gray-500">
                                                                    Feels like {playDate.weather.current.feels_like}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        {playDate.weather.current.conditions && (
                                                            <div className="flex items-center gap-2">
                                                                <Cloud className="h-5 w-5 text-chaugreen" />
                                                                <span className="text-gray-700">{playDate.weather.current.conditions}</span>
                                                            </div>
                                                        )}
                                                        {playDate.weather.current.wind && (
                                                            <div className="flex items-center gap-2">
                                                                <Wind className="h-5 w-5 text-chaugreen" />
                                                                <span className="text-gray-700">{playDate.weather.current.wind}</span>
                                                            </div>
                                                        )}
                                                        {playDate.weather.current.precipitation && (
                                                            <div className="flex items-center gap-2">
                                                                <Umbrella className="h-5 w-5 text-chaugreen" />
                                                                <span className="text-gray-700">Precipitation: {playDate.weather.current.precipitation}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}

                                            {playDate.weather.daily_stats && (
                                                <div className="space-y-4">
                                                    <h3 className="font-semibold text-gray-900">Daily Statistics</h3>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        {playDate.weather.daily_stats.high_temp && (
                                                            <div>
                                                                <p className="text-sm text-gray-500">High</p>
                                                                <p className="text-lg font-semibold">{playDate.weather.daily_stats.high_temp}</p>
                                                            </div>
                                                        )}
                                                        {playDate.weather.daily_stats.low_temp && (
                                                            <div>
                                                                <p className="text-sm text-gray-500">Low</p>
                                                                <p className="text-lg font-semibold">{playDate.weather.daily_stats.low_temp}</p>
                                                            </div>
                                                        )}
                                                        {playDate.weather.daily_stats.max_wind && (
                                                            <div>
                                                                <p className="text-sm text-gray-500">Max Wind</p>
                                                                <p className="text-lg font-semibold">{playDate.weather.daily_stats.max_wind}</p>
                                                            </div>
                                                        )}
                                                        {playDate.weather.daily_stats.precipitation_chance && (
                                                            <div>
                                                                <p className="text-sm text-gray-500">Rain Chance</p>
                                                                <p className="text-lg font-semibold">{playDate.weather.daily_stats.precipitation_chance}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Play Conditions */}
                                        {playDate.weather.play_conditions && (
                                            <div className="border-t border-gray-200 pt-6">
                                                <h3 className="font-semibold text-gray-900 mb-4">Playing Conditions</h3>
                                                <div className="space-y-4">
                                                    {playDate.weather.play_conditions.recommendation && (
                                                        <div className="rounded-lg bg-gray-50 p-4">
                                                            <div className="flex items-center gap-2 mb-2">
                                                                {playDate.weather.play_conditions.overall_rating === 'Excellent' || 
                                                                 playDate.weather.play_conditions.overall_rating === 'Good' ? (
                                                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                                                ) : (
                                                                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                                                                )}
                                                                <span className="font-medium">Recommendation</span>
                                                            </div>
                                                            <p className="text-gray-700">{playDate.weather.play_conditions.recommendation}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>

                            {/* Registered Players */}
                            <div className="overflow-hidden rounded-xl border border-chaugreen/20 bg-white p-8 shadow-lg">
                                <div className="mb-6 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold text-darkerviridiangreen">Registered Players</h2>
                                    {auth.user?.roles?.some(role => ['admin', 'super_admin'].includes(role)) && (
                                        <div className="flex items-center gap-4">
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                onClick={() => window.location.href = route('play-dates.export', playDate.id)}
                                                className="flex items-center gap-2"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                                Export Data
                                            </Button>
                                        </div>
                                    )}
                                </div>
                                <div className="space-y-4">
                                    {playDate.guests?.length > 0 ? (
                                        playDate.guests.map((guest, index) => (
                                            <div 
                                                key={index}
                                                className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="h-10 w-10 rounded-full bg-chaugreen/20 flex items-center justify-center">
                                                        <span className="text-lg font-semibold text-chaugreen">
                                                            {guest.guest_name.charAt(0)}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-gray-900">{guest.guest_name}</p>
                                                        <p className="text-sm text-gray-500">{guest.is_member ? 'Member' : 'Guest'}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="text-sm">
                                                        {guest.status === 'confirmed' ? (
                                                            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                                                Confirmed
                                                            </span>
                                                        ) : guest.status === 'invited' ? (
                                                            <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                                                                Invited
                                                            </span>
                                                        ) : guest.status === 'cancelled' ? (
                                                            <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                                                                Cancelled
                                                            </span>
                                                        ) : (
                                                            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                                                                Pending
                                                            </span>
                                                        )}
                                                    </div>
                                                    {guest.status === 'invited' && guest.canResendInvitation && (
                                                        <Button
                                                            variant="secondary"
                                                            size="sm"
                                                            onClick={() => post(route('play-dates.resend-invitation', { playDate: playDate.id, guest: guest.id }))}
                                                            className="text-xs"
                                                        >
                                                            Resend Invitation
                                                        </Button>
                                                    )}
                                                    {(guest.status === 'confirmed' || guest.status === 'pending') && (
                                                        <div className="flex items-center gap-2">
                                                            <Button
                                                                variant="secondary"
                                                                size="sm"
                                                                onClick={() => {
                                                                    setEditingGuest(guest);
                                                                    setShowEditModal(true);
                                                                }}
                                                                className="text-xs"
                                                            >
                                                                Edit
                                                            </Button>
                                                            <Button
                                                                variant="danger"
                                                                size="sm"
                                                                onClick={() => {
                                                                    if (confirm('Are you sure you want to cancel this registration?')) {
                                                                        post(route('play-dates.cancel-registration', { playDate: playDate.id, guest: guest.id }));
                                                                    }
                                                                }}
                                                                className="text-xs"
                                                            >
                                                                Cancel
                                                            </Button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center text-gray-500">
                                            <p>No players registered yet. Be the first to join!</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Course Rules and Information */}
                            <div className="overflow-hidden rounded-xl border border-chaugreen/20 bg-white p-8 shadow-lg">
                                <h2 className="mb-6 text-2xl font-bold text-darkerviridiangreen">Course Rules & Information</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Dress Code</h3>
                                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                                            <li>Collared shirts required</li>
                                            <li>No denim or cargo shorts</li>
                                            <li>Golf shoes with soft spikes only</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Pace of Play</h3>
                                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                                            <li>18 holes should be completed in 4.5 hours or less</li>
                                            <li>Keep pace with the group ahead</li>
                                            <li>Ready golf is encouraged</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Amenities</h3>
                                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                                            <li>Practice range available</li>
                                            <li>Pro shop and clubhouse</li>
                                            <li>Restaurant and bar</li>
                                            <li>Golf cart included</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Registration */}
                        <div className="space-y-8">
                            <div className="sticky top-24 overflow-hidden rounded-xl border border-chaugreen/20 bg-white shadow-lg">
                                <div className="p-6">
                                    <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-6">
                                        <div className="flex items-center gap-2">
                                            <DollarSign className="h-6 w-6 text-chaugreen" />
                                            <div>
                                                <p className="text-sm text-gray-500">Guest Fee</p>
                                                <p className="text-2xl font-bold text-gray-900">
                                                    ${parseFloat(playDate.guest_fee).toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="h-6 w-6 text-chaugreen" />
                                            <div>
                                                <p className="text-sm text-gray-500">Spots</p>
                                                <p className="text-2xl font-bold text-gray-900">
                                                    {playDate.spots_remaining} of {playDate.max_guests}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Add Calendar Export Options */}
                                    <div className="mb-6 border-b border-gray-200 pb-6">
                                        <h3 className="text-sm font-medium text-gray-900 mb-4">Add to Calendar</h3>
                                        <div className="flex flex-col gap-2">
                                            <a
                                                href={route('play-dates.calendar.ical', playDate.id)}
                                                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 w-full"
                                            >
                                                <CalendarIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
                                                Export to iCal
                                            </a>
                                            <button
                                                onClick={handleGoogleCalendar}
                                                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 w-full"
                                            >
                                                <CalendarIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
                                                Add to Google Calendar
                                            </button>
                                        </div>
                                    </div>

                                    {!showRegistration ? (
                                        <Button
                                            variant="primary"
                                            className="w-full bg-chaugreen text-white hover:bg-chaugreen/90"
                                            onClick={() => setShowRegistration(true)}
                                            disabled={playDate.spots_remaining === 0}
                                        >
                                            {playDate.spots_remaining === 0 ? 'Fully Booked' : 'Register Now'}
                                        </Button>
                                    ) : (
                                        <div className="space-y-6">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg font-semibold text-gray-900">Registration</h3>
                                                <button
                                                    onClick={() => setShowRegistration(false)}
                                                    className="text-gray-400 hover:text-gray-500"
                                                >
                                                    <X className="h-5 w-5" />
                                                </button>
                                            </div>
                                            
                                            <div className="bg-blue-50 rounded-md p-4 mb-4">
                                                <div className="flex">
                                                    <div className="flex-shrink-0">
                                                        <Users className="h-5 w-5 text-blue-400" aria-hidden="true" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <h3 className="text-sm font-medium text-blue-800">
                                                            Member Registration
                                                        </h3>
                                                        <div className="mt-2 text-sm text-blue-700">
                                                            <p>Your member information has been pre-filled below. You can bring up to 2 guests.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <form onSubmit={handleSubmit} className="space-y-4">
                                                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                                                    <h4 className="font-medium text-gray-900 mb-4">Member Information</h4>
                                                    <div className="space-y-4">
                                                        <div>
                                                            <label htmlFor="member_name" className="block text-sm font-medium text-gray-700">
                                                                Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="member_name"
                                                                value={data.member_name}
                                                                onChange={e => setData('member_name', e.target.value)}
                                                                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-chaugreen focus:ring-chaugreen"
                                                            />
                                                            {errors.member_name && (
                                                                <p className="mt-1 text-sm text-red-600">{errors.member_name}</p>
                                                            )}
                                                        </div>

                                                        <div>
                                                            <label htmlFor="member_email" className="block text-sm font-medium text-gray-700">
                                                                Email
                                                            </label>
                                                            <input
                                                                type="email"
                                                                id="member_email"
                                                                value={data.member_email}
                                                                onChange={e => setData('member_email', e.target.value)}
                                                                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-chaugreen focus:ring-chaugreen"
                                                            />
                                                            {errors.member_email && (
                                                                <p className="mt-1 text-sm text-red-600">{errors.member_email}</p>
                                                            )}
                                                        </div>

                                                        <div>
                                                            <label htmlFor="member_phone" className="block text-sm font-medium text-gray-700">
                                                                Phone
                                                            </label>
                                                            <input
                                                                type="tel"
                                                                id="member_phone"
                                                                value={data.member_phone}
                                                                onChange={e => setData('member_phone', e.target.value)}
                                                                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-chaugreen focus:ring-chaugreen"
                                                            />
                                                            {errors.member_phone && (
                                                                <p className="mt-1 text-sm text-red-600">{errors.member_phone}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="guest_count" className="block text-sm font-medium text-gray-700 required">
                                                        Number of Guests to Bring
                                                    </label>
                                                    <select
                                                        id="guest_count"
                                                        value={data.guest_count}
                                                        onChange={handleGuestCountChange}
                                                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-chaugreen focus:ring-chaugreen"
                                                        required
                                                    >
                                                        <option value="">Select number of guests to bring</option>
                                                        <option value="0">No guests</option>
                                                        {playDate.spots_remaining >= 1 && <option value="1">1 guest</option>}
                                                        {playDate.spots_remaining >= 2 && <option value="2">2 guests</option>}
                                                    </select>
                                                    {errors.guest_count && (
                                                        <p className="mt-1 text-sm text-red-600">{errors.guest_count}</p>
                                                    )}
                                                </div>

                                                {data.guests && data.guests.length > 0 && (
                                                    <div className="space-y-4">
                                                        {data.guests.map((guest, index) => (
                                                            <div key={index} className="border border-gray-200 rounded-lg p-4 bg-white">
                                                                <h4 className="font-medium text-gray-900 mb-4">Guest {index + 1} Information</h4>
                                                                <div className="space-y-4">
                                                                    <div>
                                                                        <label className="block text-sm font-medium text-gray-700">
                                                                            Name
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            value={guest.name || ''}
                                                                            onChange={(e) => updateGuest(index, 'name', e.target.value)}
                                                                            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-chaugreen focus:ring-chaugreen"
                                                                            required
                                                                        />
                                                                        {errors[`guests.${index}.name`] && (
                                                                            <p className="mt-1 text-sm text-red-600">
                                                                                {errors[`guests.${index}.name`]}
                                                                            </p>
                                                                        )}
                                                                    </div>
                                                                    <div>
                                                                        <label className="block text-sm font-medium text-gray-700">
                                                                            Email
                                                                        </label>
                                                                        <input
                                                                            type="email"
                                                                            value={guest.email || ''}
                                                                            onChange={(e) => updateGuest(index, 'email', e.target.value)}
                                                                            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-chaugreen focus:ring-chaugreen"
                                                                            required
                                                                        />
                                                                        {errors[`guests.${index}.email`] && (
                                                                            <p className="mt-1 text-sm text-red-600">
                                                                                {errors[`guests.${index}.email`]}
                                                                            </p>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                <Button
                                                    type="submit"
                                                    variant="primary"
                                                    className="w-full bg-chaugreen text-white hover:bg-chaugreen/90"
                                                    disabled={processing}
                                                >
                                                    {processing ? 'Processing...' : 'Complete Registration'}
                                                </Button>
                                            </form>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Registration Modal */}
            {showEditModal && editingGuest && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
                        <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
                            <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                                <button
                                    type="button"
                                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                                    onClick={() => {
                                        setShowEditModal(false);
                                        setEditingGuest(null);
                                        resetEdit();
                                    }}
                                >
                                    <span className="sr-only">Close</span>
                                    <X className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                        Edit Registration
                                    </h3>
                                    <div className="mt-2">
                                        <form onSubmit={handleEditSubmit} className="space-y-4">
                                            <div>
                                                <label htmlFor="edit_guest_name" className="block text-sm font-medium text-gray-700">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="edit_guest_name"
                                                    value={editData.guest_name}
                                                    onChange={e => setEditData('guest_name', e.target.value)}
                                                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-chaugreen focus:ring-chaugreen"
                                                />
                                                {editErrors.guest_name && (
                                                    <p className="mt-1 text-sm text-red-600">{editErrors.guest_name}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="edit_guest_email" className="block text-sm font-medium text-gray-700">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="edit_guest_email"
                                                    value={editData.guest_email}
                                                    onChange={e => setEditData('guest_email', e.target.value)}
                                                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-chaugreen focus:ring-chaugreen"
                                                />
                                                {editErrors.guest_email && (
                                                    <p className="mt-1 text-sm text-red-600">{editErrors.guest_email}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="edit_guest_phone" className="block text-sm font-medium text-gray-700">
                                                    Phone
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="edit_guest_phone"
                                                    value={editData.guest_phone}
                                                    onChange={e => setEditData('guest_phone', e.target.value)}
                                                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-chaugreen focus:ring-chaugreen"
                                                />
                                                {editErrors.guest_phone && (
                                                    <p className="mt-1 text-sm text-red-600">{editErrors.guest_phone}</p>
                                                )}
                                            </div>

                                            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                                <Button
                                                    type="submit"
                                                    variant="primary"
                                                    className="w-full bg-chaugreen text-white hover:bg-chaugreen/90 sm:ml-3 sm:w-auto"
                                                    disabled={processingEdit}
                                                >
                                                    {processingEdit ? 'Saving...' : 'Save Changes'}
                                                </Button>
                                                <Button
                                                    type="button"
                                                    variant="secondary"
                                                    onClick={() => {
                                                        setShowEditModal(false);
                                                        setEditingGuest(null);
                                                        resetEdit();
                                                    }}
                                                    className="mt-3 w-full sm:mt-0 sm:w-auto"
                                                >
                                                    Cancel
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </MainLayout>
    );
};

PlayDateShow.propTypes = {
    playDate: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        tee_time: PropTypes.string.isRequired,
        course_name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        guest_fee: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        spots_remaining: PropTypes.number.isRequired,
        max_guests: PropTypes.number.isRequired,
        host: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    auth: PropTypes.object.isRequired,
};

export default PlayDateShow; 