import React, { useState, useEffect } from 'react';
import { useForm, router } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Check, Eye, EyeOff } from "lucide-react";

const Step1 = ({ data, setData, errors }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState({
        score: 0,
        message: '',
        color: 'bg-gray-200'
    });

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

    return (
        <div className="space-y-4">
            <div>
                <InputLabel htmlFor="name" value="Name" />
                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                />
                <InputError message={errors.name} className="mt-2" />
            </div>

            <div>
                <InputLabel htmlFor="email" value="Email" />
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    onChange={(e) => setData('email', e.target.value)}
                    required
                />
                <InputError message={errors.email} className="mt-2" />
            </div>

            <div>
                <InputLabel htmlFor="password" value="Password" />
                <div className="relative">
                    <TextInput
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full pr-10"
                        autoComplete="new-password"
                        onChange={handlePasswordChange}
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 mt-1 flex items-center pr-3"
                    >
                        {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-500" />
                        ) : (
                            <Eye className="h-5 w-5 text-gray-500" />
                        )}
                    </button>
                </div>
                {data.password && (
                    <div className="mt-2">
                        <div className="h-2 w-full rounded-full bg-gray-200">
                            <div
                                className={`h-2 rounded-full transition-all ${passwordStrength.color}`}
                                style={{ width: `${passwordStrength.score}%` }}
                            />
                        </div>
                        <p className={`mt-1 text-sm ${passwordStrength.color.replace('bg-', 'text-')}`}>
                            {passwordStrength.message}
                        </p>
                    </div>
                )}
                <InputError message={errors.password} className="mt-2" />
            </div>

            <div>
                <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                <div className="relative">
                    <TextInput
                        id="password_confirmation"
                        type={showPassword ? 'text' : 'password'}
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full pr-10"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 mt-1 flex items-center pr-3"
                    >
                        {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-500" />
                        ) : (
                            <Eye className="h-5 w-5 text-gray-500" />
                        )}
                    </button>
                </div>
                <InputError message={errors.password_confirmation} className="mt-2" />
            </div>
        </div>
    );
};

const Step2 = ({ data, setData, errors }) => (
    <div className="space-y-4">
        <div>
            <InputLabel htmlFor="current_average_score" value="Current Average Score" />
            <TextInput
                id="current_average_score"
                type="number"
                step="0.1"
                className="mt-1 block w-full"
                value={data.current_average_score}
                onChange={e => setData('current_average_score', parseFloat(e.target.value))}
                required
            />
            <InputError message={errors.current_average_score} className="mt-2" />
        </div>

        <div>
            <InputLabel htmlFor="verified_handicap" value="Verified Handicap (if available)" />
            <TextInput
                id="verified_handicap"
                type="number"
                step="0.1"
                min="-10"
                max="50"
                className="mt-1 block w-full"
                value={data.verified_handicap}
                onChange={e => setData('verified_handicap', e.target.value ? parseFloat(e.target.value) : null)}
            />
            <div className="mt-1 text-sm text-gray-500">
                Enter a value between -10 and 50
            </div>
            <InputError message={errors.verified_handicap} className="mt-2" />
        </div>

        <div>
            <InputLabel htmlFor="special_notes" value="Additional Notes" />
            <textarea
                id="special_notes"
                className="mt-1 block w-full border-gray-300 focus:border-chaugreen focus:ring-chaugreen rounded-md shadow-sm"
                value={data.special_notes}
                onChange={e => setData('special_notes', e.target.value)}
                rows="4"
            />
            <InputError message={errors.special_notes} className="mt-2" />
        </div>
    </div>
);

const Step3 = ({ selectedPlan, setSelectedPlan, setData }) => {
    const plans = [
        {
            name: "Individual Membership",
            description: "Perfect for the solo golfer looking to improve their game",
            price: 79,
            stripe_price_id: 'price_1QjlvMKtoGj2ru2NpvnfCG1n',
            features: [
                "Secure your spot in tournaments",
                "Participate in members-only events, championships, and competitive play",
                "Enjoy reduced rates on tournament fees",
                "Connect with fellow golf enthusiasts, business professionals, and club members",
                "Enjoy member-only discounts on ChauChauGolf merchandise, equipment, apparel"
            ],
            isPopular: false,
        },
        {
            name: "Business Membership",
            description: "For 8 employees",
            price: 550,
            stripe_price_id: 'price_1QjlvqKtoGj2ru2NGb7l22AA',
            features: [
                "Secure spots in tournaments",
                "Participate in members-only events, championships, and competitive play",
                "Enjoy reduced rates on tournament fees",
                "Connect with fellow golf enthusiasts, business professionals, and club members",
                "Enjoy member-only discounts on ChauChauGolf merchandise, equipment, apparel"
            ],
            isPopular: true,
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 px-4">
            {plans.map((plan, index) => (
                <div
                    key={index}
                    className={`relative flex cursor-pointer flex-col rounded-xl bg-gray-50 p-8 transition-all duration-300 ${
                        selectedPlan?.stripe_price_id === plan.stripe_price_id
                            ? 'ring-2 ring-chaugreen'
                            : 'hover:ring-2 hover:ring-chaugreen/50'
                    }`}
                    onClick={() => {
                        setSelectedPlan(plan);
                        setData('plan_id', plan.stripe_price_id);
                    }}
                >
                    {plan.isPopular && (
                        <div className="absolute right-6 top-6">
                            <span className="rounded-full bg-chaugreen px-3 py-1 text-sm font-medium text-white">
                                Most Popular
                            </span>
                        </div>
                    )}
                    
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                        <p className="mt-2 text-gray-600">{plan.description}</p>
                    </div>

                    <div className="mb-8">
                        <div className="flex items-baseline">
                            <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                            <span className="ml-1 text-gray-600">/year</span>
                        </div>
                    </div>

                    <div className="flex-grow space-y-4">
                        {plan.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-chaugreen" />
                                <span className="text-gray-600">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default function RegisterSteps() {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedPlan, setSelectedPlan] = useState(null);
    
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        current_average_score: '',
        verified_handicap: '',
        special_notes: '',
        plan_id: '',
    });

    const handleNext = () => {
        // Validate current step
        if (currentStep === 1) {
            if (!data.name || !data.email || !data.password || !data.password_confirmation) {
                return;
            }
        } else if (currentStep === 2) {
            if (!data.current_average_score) {
                return;
            }
        } else if (currentStep === 3) {
            if (!selectedPlan) {
                alert('Please select a membership plan to continue');
                return;
            }
        }
        setCurrentStep(prev => Math.min(prev + 1, 3));
    };

    const handleBack = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!selectedPlan) {
            alert('Please select a membership plan to continue');
            return;
        }

        if (!data.plan_id) {
            alert('Please select a membership plan to continue');
            return;
        }
        
        console.log('Starting registration with data:', data);
        
        post('/register-with-plan', data, {
            preserveScroll: true,
            onSuccess: (response) => {
                console.log('Registration success response:', response);
                // Handle both direct response and Inertia response formats
                const checkoutUrl = response?.checkout_url || response?.props?.checkout_url;
                if (checkoutUrl) {
                    console.log('Redirecting to Stripe:', checkoutUrl);
                    window.location.assign(checkoutUrl);
                } else {
                    console.error('No Stripe URL in response:', response);
                    alert('Registration successful but no Stripe URL received. Please contact support.');
                }
            },
            onError: (errors) => {
                console.error('Registration error details:', errors);
                if (errors.error) {
                    alert('Registration error: ' + errors.error);
                } else {
                    const errorMessages = Object.values(errors).join('\n');
                    alert('Registration failed:\n' + errorMessages);
                }
            },
            onFinish: () => {
                console.log('Registration request finished');
            },
        });
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-8">
                <div className="flex justify-between items-center">
                    {[1, 2, 3].map((step) => (
                        <div
                            key={step}
                            className={`flex items-center ${step < 3 ? 'flex-1' : ''}`}
                        >
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                    step <= currentStep ? 'bg-chaugreen text-white' : 'bg-gray-200'
                                }`}
                            >
                                {step}
                            </div>
                            {step < 3 && (
                                <div
                                    className={`flex-1 h-1 mx-4 ${
                                        step < currentStep ? 'bg-chaugreen' : 'bg-gray-200'
                                    }`}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-2">
                    <span className="text-sm">Account Details</span>
                    <span className="text-sm">Golf Profile</span>
                    <span className="text-sm">Select Plan</span>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    {currentStep === 1 && (
                        <Step1 data={data} setData={setData} errors={errors} />
                    )}
                    {currentStep === 2 && (
                        <Step2 data={data} setData={setData} errors={errors} />
                    )}
                    {currentStep === 3 && (
                        <Step3 selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} setData={setData} />
                    )}
                </div>

                <div className="flex justify-between">
                    {currentStep > 1 && (
                        <button
                            type="button"
                            onClick={handleBack}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                        >
                            Back
                        </button>
                    )}
                    {currentStep < 3 ? (
                        <button
                            type="button"
                            onClick={handleNext}
                            className="ml-auto px-4 py-2 text-sm font-medium text-white bg-chaugreen rounded-md hover:bg-chaugreen/90"
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            type="submit"
                            disabled={processing || !selectedPlan}
                            className="ml-auto px-4 py-2 text-sm font-medium text-white bg-chaugreen rounded-md hover:bg-chaugreen/90 disabled:opacity-50"
                        >
                            {processing ? 'Processing...' : 'Complete Registration'}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
