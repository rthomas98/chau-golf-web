import { Head, Link } from '@inertiajs/react';
import Layout10 from '@/Components/TournamentPage/Layout10';

export default function Index({ tournaments }) {
    return (
        <>
            <Head title="Tournaments" />
            
            <Layout10>
                <div className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Upcoming Tournaments
                            </h2>
                            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                                Join us for exciting golf tournaments and compete with players from around the region
                            </p>
                        </div>

                        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {tournaments.map((tournament) => (
                                <div
                                    key={tournament.id}
                                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                                >
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-48 w-full object-cover"
                                            src={tournament.image_url}
                                            alt={tournament.name}
                                        />
                                    </div>
                                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                        <div className="flex-1">
                                            <Link href={route('tournaments.show', tournament.id)}>
                                                <p className="text-xl font-semibold text-gray-900">
                                                    {tournament.name}
                                                </p>
                                            </Link>
                                            <div className="mt-3 text-base text-gray-500 space-y-1">
                                                <p>{tournament.course_name}</p>
                                                <p>{tournament.location}</p>
                                                <p>
                                                    {new Date(tournament.start_date).toLocaleDateString()} - {new Date(tournament.end_date).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <span className="text-sm font-medium text-gray-900">
                                                        Entry Fee: ${tournament.entry_fee}
                                                    </span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                                        tournament.status === 'published' 
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-blue-100 text-blue-800'
                                                    }`}>
                                                        {tournament.status === 'published' ? 'Upcoming' : 'In Progress'}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <Link
                                                    href={route('tournaments.show', tournament.id)}
                                                    className="block w-full bg-gray-800 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white text-center hover:bg-gray-900"
                                                >
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Layout10>
        </>
    );
} 