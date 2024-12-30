import { Head } from '@inertiajs/react';
import Layout10 from '@/Components/TournamentPage/Layout10';
import Gallery3 from '@/Components/TournamentPage/Gallery3';
import Testimonial16 from '@/Components/TournamentPage/Testimonial16';
import Comparison4 from '@/Components/TournamentPage/Comparison4';
import FAQ7 from '@/Components/TournamentPage/FAQ7';
import Content2 from '@/Components/TournamentPage/Content2';
import PortfolioHeader3 from '@/Components/TournamentPage/PortfolioHeader3';
import Timeline13 from '@/Components/TournamentPage/Timeline13';
import CTA7 from '@/Components/TournamentPage/CTA7';

export default function TournamentPage({ tournament }) {
    return (
        <>
            <Head title={tournament.name} />
            
            <Layout10>
                <PortfolioHeader3 
                    title={tournament.name}
                    description={tournament.description}
                    imageUrl={tournament.image_url}
                    location={tournament.location}
                    courseName={tournament.course_name}
                    startDate={tournament.start_date}
                    endDate={tournament.end_date}
                />

                <Content2 
                    format={tournament.format}
                    maxParticipants={tournament.max_participants}
                    spotsRemaining={tournament.spots_remaining}
                    entryFee={tournament.entry_fee}
                    rules={tournament.rules}
                />

                <Timeline13 
                    schedule={tournament.schedule}
                />

                <Comparison4 
                    packages={tournament.packages}
                />

                <Gallery3 
                    images={tournament.gallery}
                />

                <Testimonial16 
                    testimonials={tournament.testimonials}
                />

                <FAQ7 
                    faqs={tournament.faqs}
                />

                <CTA7 
                    registrationMessage={tournament.registration_message}
                    earlyBirdOffer={tournament.early_bird_offer}
                    spotsRemaining={tournament.spots_remaining}
                    maxParticipants={tournament.max_participants}
                />
            </Layout10>
        </>
    );
} 