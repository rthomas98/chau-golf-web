import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth, hasMembership }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {!hasMembership && (
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-6">
                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Welcome to ChauChau Golf!
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    To access all member benefits and participate in tournaments, 
                                    please complete your membership application.
                                </p>
                                <Link
                                    href={route('membership.apply')}
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-chaugreen hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-chaugreen transition-opacity duration-200"
                                >
                                    Apply for Membership
                                </Link>
                            </div>
                        </div>
                    )}

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {hasMembership ? (
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Your Golf Dashboard</h3>
                                    {/* Add member-specific content here */}
                                </div>
                            ) : (
                                <div className="text-center text-gray-600">
                                    Complete your membership application to view your golf dashboard.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
