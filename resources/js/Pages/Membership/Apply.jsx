import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import MembershipForm from '@/Components/MembershipPage/MembershipForm';
import { Pricing3 } from '@/Components/MembershipPage/Pricing3';
import { Layout18 } from '@/Components/MembershipPage/Layout18';

export default function Apply({ auth, hasExistingMembership }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Apply for Membership</h2>}
        >
            <Head title="Apply for Membership" />

            <div className="py-12">
                {hasExistingMembership ? (
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                            <div className="text-center">
                                <h3 className="text-lg font-medium text-gray-900">
                                    You already have an active membership
                                </h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    Please contact the club administration if you need to make any changes to your membership.
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <Pricing3 />
                            </div>
                        </div>

                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <Layout18 />
                            </div>
                        </div>

                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <MembershipForm />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </AuthenticatedLayout>
    );
} 