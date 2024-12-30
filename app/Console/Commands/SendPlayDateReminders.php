<?php

namespace App\Console\Commands;

use App\Models\PlayDate;
use App\Notifications\PlayDateReminder;
use Carbon\Carbon;
use Illuminate\Console\Command;

class SendPlayDateReminders extends Command
{
    protected $signature = 'play-dates:send-reminders';
    protected $description = 'Send reminders for upcoming play dates';

    public function handle()
    {
        // Send reminders 24 hours before
        $this->sendRemindersForHoursBefore(24);
        
        // Send reminders 2 hours before
        $this->sendRemindersForHoursBefore(2);

        $this->info('Play date reminders sent successfully.');
    }

    private function sendRemindersForHoursBefore(int $hours)
    {
        $targetTime = Carbon::now()->addHours($hours);
        
        PlayDate::query()
            ->where('status', 'open')
            ->where('tee_time', '>', Carbon::now())
            ->where('tee_time', '<=', $targetTime)
            ->whereDoesntHave('remindersSent', function ($query) use ($hours) {
                $query->where('hours_before', $hours);
            })
            ->each(function (PlayDate $playDate) use ($hours) {
                // Notify host
                $playDate->host->notify(new PlayDateReminder($playDate, $hours));
                
                // Notify confirmed guests
                $playDate->guests()
                    ->where('status', 'confirmed')
                    ->get()
                    ->each(function ($guest) use ($playDate, $hours) {
                        $guest->user->notify(new PlayDateReminder($playDate, $hours));
                    });
                
                // Record that we sent reminders for this hour mark
                $playDate->remindersSent()->create([
                    'hours_before' => $hours,
                    'sent_at' => now(),
                ]);
            });
    }
} 