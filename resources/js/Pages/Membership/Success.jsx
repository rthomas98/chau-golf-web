import React from 'react';
import { Head } from '@inertiajs/react';
import { CheckCircle } from 'lucide-react';

export default function Success() {
  return (
    <>
      <Head title="Subscription Success" />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-chaugreen mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Welcome to ChauChauGolf!
          </h1>
          <p className="text-gray-600 mb-8">
            Your membership subscription has been successfully processed. You now have access to all member benefits.
          </p>
          <a
            href={route('dashboard')}
            className="inline-block bg-chaugreen text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition-colors"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    </>
  );
}
