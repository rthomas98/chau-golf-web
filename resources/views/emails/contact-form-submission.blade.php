@component('mail::message')
# New Contact Form Submission

**Contact Information:**
Name: {{ $data['firstName'] }} {{ $data['lastName'] }}
Email: {{ $data['email'] }}
Phone: {{ $data['phone'] ?? 'Not provided' }}

**Inquiry Details:**
Topic: {{ $data['topic'] }}
Description: {{ $data['description'] }}

**Message:**
{{ $data['message'] }}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
