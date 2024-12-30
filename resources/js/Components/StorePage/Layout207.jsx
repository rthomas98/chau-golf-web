import React from 'react';
import { motion } from 'framer-motion';

const CategoryCard = ({ title, description, image }) => {
    return (
        <motion.div 
            className="group rounded-lg overflow-hidden bg-white shadow-lg"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <div className="aspect-w-16 aspect-h-9">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
                <p className="text-black/70">{description}</p>
            </div>
        </motion.div>
    );
};

export default function Layout207() {
    return (
        <section className="bg-gray py-16 md:py-24">
            <div className="container mx-auto px-[5%]">
                <div className="text-center mb-12">
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold text-black mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Golf Equipment & Accessories
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-black/70 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Discover our premium selection of golf equipment and accessories, carefully curated for both beginners and professionals.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <CategoryCard 
                        title="Golf Clubs"
                        description="Premium clubs for every skill level"
                        image="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=3276&auto=format&fit=crop"
                    />
                    <CategoryCard 
                        title="Golf Bags"
                        description="Stylish and functional golf bags"
                        image="https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?q=80&w=3270&auto=format&fit=crop"
                    />
                    <CategoryCard 
                        title="Accessories"
                        description="Essential accessories for your game"
                        image="https://images.unsplash.com/photo-1591491719565-9ef792f9a66f?q=80&w=3270&auto=format&fit=crop"
                    />
                </div>
            </div>
        </section>
    );
}
