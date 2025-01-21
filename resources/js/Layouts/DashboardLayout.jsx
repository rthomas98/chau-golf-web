import React from 'react';
import { Link } from '@inertiajs/react';
import { LayoutGrid, Calendar, Trophy, User, HelpCircle } from 'lucide-react';

const DashboardLayout = ({ children }) => {
  const navigation = [
    { name: 'Overview', href: route('dashboard'), icon: LayoutGrid },
    { name: 'My Registrations', href: route('dashboard.registrations'), icon: Calendar },
    { name: 'Play Dates', href: route('play-dates.index'), icon: Calendar },
    { name: 'Tournaments', href: route('tournaments.index'), icon: Trophy },
    { name: 'My Profile', href: route('profile.edit'), icon: User },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Topbar */}
      <div className="fixed top-0 right-0 left-64 z-30 h-16 bg-white border-b border-gray-200">
        <div className="flex h-full items-center justify-end px-4">
          <div className="flex items-center space-x-4">
            <Link
              href={route('profile.edit')}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <User className="h-5 w-5" />
            </Link>
            <Link
              href={route('faq')}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <HelpCircle className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Area - Adjust top padding to account for topbar */}
      <div className="pl-64 pt-16">
        <main className="p-8">
          {children}
        </main>
      </div>

      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-200 ease-in-out">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center justify-center border-b border-gray-200 px-4">
            <Link href="/">
              <img src="/images/ChauChau-Golf.svg" alt="ChauChau Golf" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center rounded-lg px-3 py-2 text-sm font-medium ${
                    route().current(item.href)
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon
                    className={`mr-3 h-5 w-5 flex-shrink-0 ${
                      route().current(item.href)
                        ? 'text-gray-500'
                        : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Help Section */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center">
              <HelpCircle className="h-5 w-5 text-gray-400" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Need Help?</h3>
                <p className="text-sm text-gray-500">
                  Contact support at{' '}
                  <a
                    href="mailto:support@chaugolfapp.test"
                    className="text-chaugreen hover:text-chaugreen-dark"
                  >
                    support@chaugolfapp.test
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout; 