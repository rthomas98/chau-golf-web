import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonial4() {
    const reviews = [
        {
            name: "Michael Chang",
            role: "Professional Golfer",
            rating: 5,
            comment: "The Pro Series Driver X1 has completely transformed my game. The adjustable weighting system allows me to fine-tune my shots exactly how I want them.",
            date: "2 weeks ago",
            image: "https://images.pexels.com/photos/1325763/pexels-photo-1325763.jpeg"
        },
        {
            name: "Emily Rodriguez",
            role: "Golf Enthusiast",
            rating: 5,
            comment: "Incredible distance and accuracy. The customization options make it perfect for any skill level. Worth every penny!",
            date: "1 month ago",
            image: "https://images.pexels.com/photos/1325764/pexels-photo-1325764.jpeg"
        }
    ];

    return (
        <section className="py-16 bg-merino">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-darkviridiangreen mb-4">Customer Reviews</h2>
                    <div className="flex items-center justify-center space-x-2">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-tahitigold text-tahitigold" />
                            ))}
                        </div>
                        <span className="text-viridiangreen font-semibold">4.9 out of 5</span>
                        <span className="text-viridiangreen">(124 reviews)</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center mb-4">
                                <img 
                                    src={review.image} 
                                    alt={review.name} 
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold text-darkviridiangreen">{review.name}</h3>
                                    <p className="text-sm text-viridiangreen">{review.role}</p>
                                </div>
                                <div className="ml-auto text-sm text-viridiangreen">
                                    {review.date}
                                </div>
                            </div>
                            <div className="flex mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-tahitigold text-tahitigold" />
                                ))}
                            </div>
                            <p className="text-viridiangreen">{review.comment}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <button className="text-tahitigold hover:text-darktahitigold transition-colors font-semibold">
                        View all reviews
                    </button>
                </div>
            </div>
        </section>
    );
}
