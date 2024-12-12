import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA13() {
    return (
        <section className="py-16 bg-darkviridiangreen">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2 
                        className="text-3xl md:text-4xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Ready to Transform Your Game?
                    </motion.h2>
                    <motion.p 
                        className="text-highviridiangreen mb-8 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Take advantage of our 30-day trial period. Test the Pro Series Driver X1 
                        on your local course and experience the difference firsthand.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <button className="bg-tahitigold text-white px-8 py-3 rounded-full hover:bg-darktahitigold transition-colors inline-flex items-center justify-center">
                            Order Now
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                        <button className="border-2 border-highviridiangreen text-white px-8 py-3 rounded-full hover:bg-highviridiangreen/20 transition-colors">
                            Learn More
                        </button>
                    </motion.div>
                    <motion.p 
                        className="text-highviridiangreen mt-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        *Free shipping on orders over $500
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
