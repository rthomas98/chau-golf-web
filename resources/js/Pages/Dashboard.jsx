import React from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Trophy, Calendar, User } from 'lucide-react';

const Dashboard = ({ auth, hasMembership }) => {
  return (
    <DashboardLayout>
      <Head title="Dashboard" />

      <div className="space-y-8">
        {/* Welcome Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, {auth.user.name}!</h1>
          <p className="mt-1 text-sm text-gray-500">
            Here's what's happening with your golf activities.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Play Dates
              </CardTitle>
              <CardDescription>Browse and register for upcoming play dates</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="default" asChild>
                <a href={route('play-dates.index')}>View Play Dates</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Tournaments
              </CardTitle>
              <CardDescription>Find and join upcoming tournaments</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="default" asChild>
                <a href={route('tournaments.index')}>View Tournaments</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                My Profile
              </CardTitle>
              <CardDescription>Update your profile and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="default" asChild>
                <a href={route('profile.edit')}>Edit Profile</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Membership Status */}
        {!hasMembership && (
          <Card className="bg-yellow-50">
            <CardHeader>
              <CardTitle>Complete Your Membership</CardTitle>
              <CardDescription>
                Become a member to unlock exclusive benefits and features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="default" asChild>
                <a href={route('membership.apply')}>Apply for Membership</a>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
