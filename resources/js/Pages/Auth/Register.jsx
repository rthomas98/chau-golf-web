import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import RegisterSteps from '@/Components/Auth/RegisterSteps';

export default function Register() {
    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="mb-8 text-center">
                <h2 className="font-headers text-2xl font-bold text-chaugreen">Create Account</h2>
                <p className="mt-2 text-gray-600">Join the ChauChau Golf community</p>
            </div>

            <RegisterSteps />
        </GuestLayout>
    );
}
