import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';

export default function Product12() {
    return (
        <section className="bg-gray py-16 md:py-24">
            <div className="container mx-auto px-[5%]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=3276&auto=format&fit=crop"
                            alt="Premium Golf Driver" 
                            className="rounded-lg shadow-xl w-full aspect-square object-cover"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="bg-chaugreen text-white px-3 py-1 rounded-lg text-sm font-semibold">
                                Featured
                            </span>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-chaugreen fill-current" />
                            ))}
                            <span className="ml-2 text-black/70">(128 reviews)</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Pro Series Driver</h2>
                        <p className="text-black/70 mb-6">
                            Experience unmatched performance with our flagship driver. Featuring advanced aerodynamics 
                            and adjustable weighting for maximum distance and control.
                        </p>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-3xl font-bold text-black">$499.99</span>
                            <span className="text-lg line-through text-black/50">$599.99</span>
                        </div>
                        <div className="flex gap-4">
                            <button className="flex-1 bg-chaugreen text-white px-8 py-3 rounded-lg hover:bg-black transition-colors font-semibold flex items-center justify-center gap-2">
                                <ShoppingCart className="h-5 w-5" />
                                Add to Cart
                            </button>
                            <button className="px-8 py-3 rounded-lg border-2 border-black text-black hover:bg-black hover:text-white transition-colors font-semibold">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
