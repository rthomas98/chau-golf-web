import React from 'react';
import { motion } from 'framer-motion';

export default function Layout207() {
    return (
        <section className="bg-merino py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold text-darkviridiangreen mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Golf Equipment & Accessories
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-viridiangreen max-w-2xl mx-auto"
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
                        image="https://images.pexels.com/photos/1325751/pexels-photo-1325751.jpeg"
                    />
                    <CategoryCard 
                        title="Golf Bags"
                        description="Stylish and functional golf bags"
                        image="https://images.pexels.com/photos/1325752/pexels-photo-1325752.jpeg"
                    />
                    <CategoryCard 
                        title="Accessories"
                        description="Essential accessories for your game"
                        image="https://images.pexels.com/photos/1325753/pexels-photo-1325753.jpeg"
                    />
                </div>
            </div>
        </section>
    );
}

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
                <h3 className="text-xl font-bold text-darkviridiangreen mb-2">{title}</h3>
                <p className="text-viridiangreen">{description}</p>
            </div>
        </motion.div>
    );
};
