import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Product12() {
    return (
        <section className="bg-merino py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        className="relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <img 
                            src="https://images.pexels.com/photos/1325759/pexels-photo-1325759.jpeg" 
                            alt="Featured Golf Club" 
                            className="rounded-lg shadow-xl"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-tahitigold font-semibold">Featured Product</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-darkviridiangreen mt-2 mb-4">
                            Pro Series Driver X1
                        </h2>
                        <div className="flex items-center mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-tahitigold text-tahitigold" />
                            ))}
                            <span className="ml-2 text-viridiangreen">(124 reviews)</span>
                        </div>
                        <p className="text-viridiangreen mb-6">
                            Experience unmatched performance with our latest Pro Series Driver. 
                            Engineered for maximum distance and accuracy, this club features 
                            advanced aerodynamics and adjustable weighting.
                        </p>
                        <div className="mb-6">
                            <span className="text-3xl font-bold text-tahitigold">$499.99</span>
                            <span className="ml-2 text-viridiangreen line-through">$599.99</span>
                        </div>
                        <button className="w-full md:w-auto bg-tahitigold text-white px-8 py-3 rounded-full hover:bg-darktahitigold transition-colors">
                            Add to Cart
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
