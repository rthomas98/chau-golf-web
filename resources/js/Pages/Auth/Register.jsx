import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState({
        score: 0,
        message: '',
        color: 'bg-gray-200'
    });

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const calculatePasswordStrength = (password) => {
        let score = 0;
        let message = '';
        let color = 'bg-gray-200';

        if (password.length >= 8) score++;
        if (password.match(/[A-Z]/)) score++;
        if (password.match(/[0-9]/)) score++;
        if (password.match(/[^A-Za-z0-9]/)) score++;

        switch (score) {
            case 0:
                message = 'Very Weak';
                color = 'bg-red-500';
                break;
            case 1:
                message = 'Weak';
                color = 'bg-orange-500';
                break;
            case 2:
                message = 'Fair';
                color = 'bg-yellow-500';
                break;
            case 3:
                message = 'Good';
                color = 'bg-blue-500';
                break;
            case 4:
                message = 'Strong';
                color = 'bg-green-500';
                break;
        }

        return { score: (score / 4) * 100, message, color };
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setData('password', newPassword);
        setPasswordStrength(calculatePasswordStrength(newPassword));
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="mb-8 text-center">
                <h2 className="font-headers text-2xl font-bold text-chaugreen">Create Account</h2>
                <p className="mt-2 text-gray-600">Join the ChauChau Golf community</p>
            </div>

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" className="text-gray-700" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full rounded-lg border-gray-300 focus:border-chaugreen focus:ring-chaugreen"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" className="text-gray-700" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full rounded-lg border-gray-300 focus:border-chaugreen focus:ring-chaugreen"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" className="text-gray-700" />

                    <div className="relative">
                        <TextInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full rounded-lg border-gray-300 focus:border-chaugreen focus:ring-chaugreen pr-10"
                            autoComplete="new-password"
                            onChange={handlePasswordChange}
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-2 top-[13px] text-gray-500 hover:text-gray-700"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <EyeSlashIcon className="h-5 w-5" />
                            ) : (
                                <EyeIcon className="h-5 w-5" />
                            )}
                        </button>
                    </div>

                    {data.password && (
                        <div className="mt-2">
                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className={`h-full rounded-full transition-all duration-300 ${passwordStrength.color}`}
                                    style={{ width: `${passwordStrength.score}%` }}
                                />
                            </div>
                            <p className={`text-sm mt-1 ${passwordStrength.color.replace('bg-', 'text-')}`}>
                                {passwordStrength.message}
                            </p>
                        </div>
                    )}

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="text-gray-700" />

                    <div className="relative">
                        <TextInput
                            id="password_confirmation"
                            type={showPassword ? 'text' : 'password'}
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full rounded-lg border-gray-300 focus:border-chaugreen focus:ring-chaugreen pr-10"
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />
                    </div>

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="mt-6">
                    <PrimaryButton 
                        className="w-full justify-center rounded-lg bg-chaugreen px-8 py-3 text-base font-semibold text-white shadow-sm hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-chaugreen focus:ring-offset-2 transition-opacity duration-200" 
                        disabled={processing}
                    >
                        Register
                    </PrimaryButton>
                </div>

                <div className="mt-6 text-center">
                    <Link
                        href={route('login')}
                        className="text-sm text-gray-600 hover:text-chaugreen transition-colors"
                    >
                        Already have an account? Sign in
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
