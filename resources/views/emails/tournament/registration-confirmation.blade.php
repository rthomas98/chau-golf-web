@component('mail::message')
# Tournament Registration Confirmation

Dear {{ $participant->name }},

Thank you for registering for **{{ $tournament->name }}**!

## Registration Details
- **Registration Code:** {{ $registrationCode }}
- **Tournament Date:** {{ $tournament->start_date->format('F j, Y') }} - {{ $tournament->end_date->format('F j, Y') }}
- **Location:** {{ $tournament->location }}
- **Entry Fee:** ${{ number_format($tournament->entry_fee, 2) }}

## Payment Instructions
Please complete your payment to secure your spot in the tournament. You can pay using one of the following methods:

1. Online Payment
   - Visit our payment portal: {{ config('app.url') }}/tournament-payment
   - Enter your registration code: {{ $registrationCode }}

2. Bank Transfer
   - Account details will be provided upon request
   - Include your registration code as reference

## Important Information
- Your registration will be confirmed once payment is received
- Registration deadline: {{ $tournament->start_date->subDays(2)->format('F j, Y') }}
- Please arrive 30 minutes before your tee time
- Bring valid ID and your registration code

## Tournament Schedule
@foreach($tournament->schedule as $time => $event)
- {{ $time }}: {{ $event }}
@endforeach

If you have any questions, please don't hesitate to contact us.

Thanks,<br>
{{ config('app.name') }}

@component('mail::subcopy')
This is an automated message. Please do not reply to this email.
Your registration code: {{ $registrationCode }}
@endcomponent
@endcomponent 