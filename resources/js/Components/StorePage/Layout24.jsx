import React from 'react';
import { motion } from 'framer-motion';

export default function Layout24() {
    return (
        <section className="bg-darkviridiangreen py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div 
                        className="text-white"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Golf Equipment</h2>
                        <p className="text-highviridiangreen mb-6">
                            Experience the difference with our professional-grade golf equipment. 
                            Each piece is carefully selected to help improve your game.
                        </p>
                        <button className="bg-tahitigold text-white px-8 py-3 rounded-full hover:bg-darktahitigold transition-colors">
                            Shop Now
                        </button>
                    </motion.div>
                    <motion.div 
                        className="relative"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <img 
                            src="https://images.pexels.com/photos/1325758/pexels-photo-1325758.jpeg" 
                            alt="Premium Golf Equipment" 
                            className="rounded-lg shadow-xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
