import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonial5() {
    const testimonials = [
        {
            name: "John Smith",
            role: "Professional Golfer",
            image: "https://images.pexels.com/photos/1325760/pexels-photo-1325760.jpeg",
            quote: "The quality of equipment from ChauChau Golf has significantly improved my game. Their customer service is exceptional!"
        },
        {
            name: "Sarah Johnson",
            role: "Golf Enthusiast",
            image: "https://images.pexels.com/photos/1325761/pexels-photo-1325761.jpeg",
            quote: "I've been buying my golf equipment here for years. The selection and quality are unmatched."
        },
        {
            name: "Mike Wilson",
            role: "Golf Instructor",
            image: "https://images.pexels.com/photos/1325762/pexels-photo-1325762.jpeg",
            quote: "I recommend ChauChau Golf to all my students. Their equipment selection caters to all skill levels."
        }
    ];

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-darkviridiangreen mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-viridiangreen">Trusted by golfers worldwide</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const TestimonialCard = ({ name, role, image, quote, index }) => {
    return (
        <motion.div 
            className="bg-merino p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-tahitigold text-tahitigold" />
                ))}
            </div>
            <p className="text-viridiangreen mb-6">{quote}</p>
            <div className="flex items-center">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                    <h4 className="font-bold text-darkviridiangreen">{name}</h4>
                    <p className="text-sm text-viridiangreen">{role}</p>
                </div>
            </div>
        </motion.div>
    );
};
