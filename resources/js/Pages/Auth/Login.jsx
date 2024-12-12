import React from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-darkerviridiangreen">Welcome Back</h2>
                <p className="mt-2 text-darkviridiangreen">Sign in to access your account</p>
            </div>

            {status && (
                <div className="mb-4 text-sm font-medium text-tahitigold">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" className="text-darkerviridiangreen" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full rounded-lg border-viridiangreen/20 bg-white focus:border-tahitigold focus:ring-tahitigold"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" className="text-darkerviridiangreen" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full rounded-lg border-viridiangreen/20 bg-white focus:border-tahitigold focus:ring-tahitigold"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="rounded border-viridiangreen/20 text-tahitigold focus:ring-tahitigold"
                        />
                        <span className="ms-2 text-sm text-darkviridiangreen">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-sm text-darkviridiangreen hover:text-tahitigold transition-colors"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton 
                        className="bg-tahitigold hover:bg-midtahitigold focus:bg-midtahitigold active:bg-midtahitigold" 
                        disabled={processing}
                    >
                        Sign In
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
