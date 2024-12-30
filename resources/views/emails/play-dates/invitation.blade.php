@component('mail::message')
# You're Invited to Join a Golf Play Date!

Hi {{ $invitedGuest->guest_name }},

{{ $primaryGuest->guest_name }} has invited you to join them for a golf play date at {{ $playDate->course_name }}.

## Event Details
- **Date**: {{ $playDate->date->format('l, F j, Y') }}
- **Time**: {{ \Carbon\Carbon::parse($playDate->tee_time)->format('g:i A') }}
- **Location**: {{ $playDate->location }}
- **Guest Fee**: ${{ number_format($playDate->guest_fee, 2) }}

{{ $playDate->description }}

@component('mail::button', ['url' => $acceptUrl])
Accept Invitation
@endcomponent

Please note that this invitation will expire in 48 hours. If you have any questions, please contact us or reach out to {{ $primaryGuest->guest_name }} directly.

Thanks,<br>
{{ config('app.name') }}

<small>If you did not expect this invitation, you can safely ignore this email.</small>
@endcomponent 