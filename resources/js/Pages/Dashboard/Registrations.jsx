import React from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { format } from 'date-fns';
import { CalendarIcon, ClockIcon, MapPinIcon, DollarSignIcon } from 'lucide-react';

const RegistrationCard = ({ registration, type }) => {
  const data = type === 'playDate' ? registration.play_date : registration.tournament;
  const time = type === 'playDate' ? data.tee_time : data.start_time;
  const location = type === 'playDate' ? data.location : data.venue;
  const fee = type === 'playDate' ? data.guest_fee : data.entry_fee;

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">{data.title}</CardTitle>
          <Badge variant={registration.status === 'confirmed' ? 'success' : 'warning'}>
            {registration.status}
          </Badge>
        </div>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-sm">
            <CalendarIcon className="h-4 w-4" />
            <span>{format(new Date(data.date), 'EEEE, MMMM d, yyyy')}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <ClockIcon className="h-4 w-4" />
            <span>{format(new Date(`2000-01-01 ${time}`), 'h:mm a')}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MapPinIcon className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <DollarSignIcon className="h-4 w-4" />
            <span>${fee}</span>
          </div>
          {type === 'playDate' && registration.is_member && (
            <div className="mt-4">
              <Badge variant="outline">Member</Badge>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const Registrations = ({ registeredPlayDates, registeredTournaments }) => {
  return (
    <DashboardLayout>
      <Head title="My Registrations" />

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Play Date Registrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {registeredPlayDates.map((registration) => (
              <RegistrationCard
                key={registration.id}
                registration={registration}
                type="playDate"
              />
            ))}
            {registeredPlayDates.length === 0 && (
              <p className="text-gray-500">No play date registrations found.</p>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Tournament Registrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {registeredTournaments.map((registration) => (
              <RegistrationCard
                key={registration.id}
                registration={registration}
                type="tournament"
              />
            ))}
            {registeredTournaments.length === 0 && (
              <p className="text-gray-500">No tournament registrations found.</p>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Registrations; 