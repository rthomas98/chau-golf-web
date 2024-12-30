import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function CTA3() {
    return (
        <section className="bg-chaugreen py-16 md:py-24">
            <div className="container mx-auto px-[5%]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Get 15% Off Your First Purchase
                        </h2>
                        <p className="text-white/80 mb-8">
                            Sign up for our newsletter and receive exclusive offers, early access to new products, 
                            and expert golf tips delivered straight to your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="flex-1 px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white"
                            />
                            <button className="bg-white text-chaugreen px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors font-semibold flex items-center justify-center gap-2">
                                Subscribe
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </form>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1591491719565-9ef792f9a66f?q=80&w=3270&auto=format&fit=crop" 
                            alt="Golf Equipment" 
                            className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
