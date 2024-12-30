import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Pricing3 } from '@/Components/MembershipPage/Pricing3';
import { Layout18 } from '@/Components/MembershipPage/Layout18';

export default function Membership({ auth }) {
    return (
        <MainLayout>
            <Head title="Membership" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Pricing3 auth={auth} />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Layout18 />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Ready to Join?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {auth.user 
                                    ? "Click below to complete your membership application."
                                    : "Please log in or register to apply for membership."}
                            </p>
                            {auth.user ? (
                                <Link
                                    href={route('membership.apply')}
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-chaugreen hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-chaugreen"
                                >
                                    Apply for Membership
                                </Link>
                            ) : (
                                <div className="space-x-4">
                                    <Link
                                        href={route('login')}
                                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-chaugreen hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-chaugreen"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-flex items-center px-6 py-3 border border-chaugreen text-base font-medium rounded-md text-chaugreen bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-chaugreen"
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
