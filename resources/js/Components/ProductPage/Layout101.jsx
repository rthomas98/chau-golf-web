import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Layout101() {
    const features = [
        {
            title: "Advanced Aerodynamics",
            description: "Engineered with cutting-edge aerodynamic design for maximum club head speed and distance."
        },
        {
            title: "Adjustable Weighting",
            description: "Customizable weight distribution allows you to fine-tune ball flight and trajectory."
        },
        {
            title: "Premium Materials",
            description: "Constructed with aerospace-grade titanium for exceptional durability and performance."
        }
    ];

    const specifications = [
        { label: "Club Head Size", value: "460cc" },
        { label: "Loft Options", value: "9.5°, 10.5°, 12°" },
        { label: "Shaft Length", value: "45.5 inches" },
        { label: "Swing Weight", value: "D3" },
        { label: "Face Technology", value: "Variable Thickness" },
        { label: "Adjustability", value: "16 position hosel" }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold text-darkviridiangreen mb-6">Key Features</h2>
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-6 h-6 rounded-full bg-lowtahitigold flex items-center justify-center">
                                            <Check className="w-4 h-4 text-tahitigold" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-darkviridiangreen mb-2">{feature.title}</h3>
                                        <p className="text-viridiangreen">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Specifications */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold text-darkviridiangreen mb-6">Specifications</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {specifications.map((spec, index) => (
                                <div key={index} className="p-4 bg-merino rounded-lg">
                                    <h3 className="font-semibold text-darkviridiangreen mb-1">{spec.label}</h3>
                                    <p className="text-viridiangreen">{spec.value}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
