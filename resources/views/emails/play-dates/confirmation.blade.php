@component('mail::message')
# Golf Play Date Registration Confirmed

Hi {{ $guest->guest_name }},

Thank you for registering for the golf play date at {{ $playDate->course_name }}. We're excited to have you join us!

## Event Details
- **Date**: {{ $playDate->date->format('l, F j, Y') }}
- **Time**: {{ \Carbon\Carbon::parse($playDate->tee_time)->format('g:i A') }}
- **Location**: {{ $playDate->location }}
- **Guest Fee**: ${{ number_format($playDate->guest_fee, 2) }}

### Important Information
{{ $playDate->description }}

## Course Rules & Information
- Collared shirts required
- No denim or cargo shorts
- Golf shoes with soft spikes only
- Please arrive 30 minutes before tee time
- 18 holes should be completed in 4.5 hours or less

@component('mail::button', ['url' => $viewUrl])
View Play Date Details
@endcomponent

If you need to cancel or modify your registration, please do so at least 24 hours before the tee time.

Need help? Contact us at {{ config('mail.from.address') }}.

Thanks,<br>
{{ config('app.name') }}

<small>This is an automated message. Please do not reply to this email.</small>
@endcomponent 