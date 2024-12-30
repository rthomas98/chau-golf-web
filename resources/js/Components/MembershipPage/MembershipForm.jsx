import React from 'react';
import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';

export default function MembershipForm() {
    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        current_average_score: '',
        verified_handicap: '',
        special_notes: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('membership.store'));
    };

    return (
        <section id="membership-form" className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow">
            <form onSubmit={submit} className="space-y-6">
                <div>
                    <InputLabel htmlFor="current_average_score" value="Current Average Score" />
                    <TextInput
                        id="current_average_score"
                        type="number"
                        step="0.1"
                        className="mt-1 block w-full"
                        value={data.current_average_score}
                        onChange={e => setData('current_average_score', e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.current_average_score} />
                </div>

                <div>
                    <InputLabel htmlFor="verified_handicap" value="Verified Handicap (if available)" />
                    <TextInput
                        id="verified_handicap"
                        type="number"
                        step="0.1"
                        className="mt-1 block w-full"
                        value={data.verified_handicap}
                        onChange={e => setData('verified_handicap', e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.verified_handicap} />
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
                    <InputError className="mt-2" message={errors.special_notes} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>
                        Apply for Membership
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Application submitted.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
} 