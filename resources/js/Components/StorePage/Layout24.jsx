import React from 'react';
import { motion } from 'framer-motion';

export default function Layout24() {
    return (
        <section className="bg-chaugreen py-16 md:py-24">
            <div className="container mx-auto px-[5%]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div 
                        className="text-white"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Golf Equipment</h2>
                        <p className="text-white/80 mb-6">
                            Experience the difference with our professional-grade golf equipment. 
                            Each piece is carefully selected to help improve your game.
                        </p>
                        <button className="bg-white text-chaugreen px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors font-semibold">
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
                            src="https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?q=80&w=3270&auto=format&fit=crop" 
                            alt="Premium Golf Equipment" 
                            className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
