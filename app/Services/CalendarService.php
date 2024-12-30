<?php

namespace App\Services;

use App\Models\PlayDate;
use Spatie\IcalendarGenerator\Components\Calendar;
use Spatie\IcalendarGenerator\Components\Event;

class CalendarService
{
    public function generateICalForPlayDate(PlayDate $playDate): string
    {
        $calendar = Calendar::create()
            ->name('Golf Play Date')
            ->refreshInterval(5)
            ->event(
                Event::create()
                    ->name($playDate->title)
                    ->description($this->generateEventDescription($playDate))
                    ->uniqueIdentifier($playDate->id)
                    ->createdAt($playDate->created_at)
                    ->startsAt($playDate->tee_time)
                    ->endsAt($playDate->tee_time->addHours(4))
                    ->address($playDate->location)
                    ->organizer($playDate->host->email, $playDate->host->name)
            );

        return $calendar->get();
    }

    private function generateEventDescription(PlayDate $playDate): string
    {
        return sprintf(
            "Golf Play Date at %s\n\nCourse: %s\nHost: %s\nGuest Fee: $%s\nSpots Remaining: %d\n\nAdditional Info: %s",
            $playDate->location,
            $playDate->course_name,
            $playDate->host->name,
            number_format($playDate->guest_fee, 2),
            $playDate->spots_remaining,
            $playDate->additional_info ?? 'N/A'
        );
    }

    public function generateGoogleCalendarUrl(PlayDate $playDate): string
    {
        $start = $playDate->tee_time->format('Ymd\THis');
        $end = $playDate->tee_time->addHours(4)->format('Ymd\THis');
        
        $params = http_build_query([
            'action' => 'TEMPLATE',
            'text' => $playDate->title,
            'dates' => $start . '/' . $end,
            'details' => $this->generateEventDescription($playDate),
            'location' => $playDate->location,
        ]);

        return 'https://calendar.google.com/calendar/render?' . $params;
    }
} 