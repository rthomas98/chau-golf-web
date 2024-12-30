import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-chaugreen fill-current' : 'text-gray-300'}`} 
                    />
                ))}
            </div>
            <p className="text-black/70 mb-6">{testimonial.comment}</p>
            <div className="flex items-center gap-4">
                <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <h4 className="font-bold text-black">{testimonial.name}</h4>
                    <p className="text-black/70 text-sm">{testimonial.title}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default function Testimonial5() {
    const testimonials = [
        {
            name: "Michael Chen",
            title: "Golf Professional",
            comment: "The quality of equipment from this store is exceptional. The Pro Series Driver has significantly improved my game.",
            rating: 5,
            avatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=059669&color=fff&size=128"
        },
        {
            name: "Sarah Johnson",
            title: "Amateur Golfer",
            comment: "Great selection and even better customer service. The team helped me find the perfect set of clubs for my skill level.",
            rating: 5,
            avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=059669&color=fff&size=128"
        },
        {
            name: "David Williams",
            title: "Golf Enthusiast",
            comment: "The premium golf bags are worth every penny. Durable, spacious, and stylish - exactly what I was looking for.",
            rating: 4,
            avatar: "https://ui-avatars.com/api/?name=David+Williams&background=059669&color=fff&size=128"
        }
    ];

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-[5%]">
                <div className="text-center mb-12">
                    <motion.h2 
                        className="text-3xl md:text-4xl font-bold text-black mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        What Our Customers Say
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-black/70 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Read about the experiences of golfers who have chosen our equipment
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
}
