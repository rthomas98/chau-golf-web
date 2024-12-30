@component('mail::message')
# Golf Play Date Registration Cancelled

Hi {{ $guest->guest_name }},

Your registration for the golf play date at {{ $playDate->course_name }} has been cancelled.

## Event Details (Cancelled)
- **Date**: {{ $playDate->date->format('l, F j, Y') }}
- **Time**: {{ \Carbon\Carbon::parse($playDate->tee_time)->format('g:i A') }}
- **Location**: {{ $playDate->location }}

If you'd like to register for another play date, you can browse available dates on our website.

@component('mail::button', ['url' => route('play-dates.index')])
View Available Play Dates
@endcomponent

If you did not request this cancellation or have any questions, please contact us immediately at {{ config('mail.from.address') }}.

Thanks,<br>
{{ config('app.name') }}

<small>This is an automated message. Please do not reply to this email.</small>
@endcomponent 