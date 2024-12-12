import React from 'react';
import { motion } from 'framer-motion';

export default function CTA3() {
    return (
        <section className="bg-darkviridiangreen py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h2 
                        className="text-3xl md:text-4xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Get 15% Off Your First Purchase
                    </motion.h2>
                    <motion.p 
                        className="text-highviridiangreen mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Join our newsletter and receive exclusive offers, early access to new products, 
                        and expert golf tips directly in your inbox.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-tahitigold"
                        />
                        <button className="bg-tahitigold text-white px-8 py-3 rounded-full hover:bg-darktahitigold transition-colors">
                            Subscribe Now
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
