import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Link } from '@inertiajs/react';

const ProductCard = ({ product }) => {
    return (
        <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden group"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <div className="aspect-w-1 aspect-h-1 relative">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.isNew && (
                    <div className="absolute top-4 left-4">
                        <span className="bg-chaugreen text-white px-3 py-1 rounded-lg text-sm font-semibold">
                            New
                        </span>
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{product.name}</h3>
                <p className="text-black/70 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-black">${product.price}</span>
                    <button className="bg-chaugreen text-white p-3 rounded-lg hover:bg-black transition-colors">
                        <ShoppingCart className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default function Products4() {
    const products = [
        {
            name: "Pro Series Driver",
            description: "Advanced aerodynamics for maximum distance",
            price: "499.99",
            image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=3276&auto=format&fit=crop",
            isNew: true
        },
        {
            name: "Premium Golf Bag",
            description: "Spacious and durable with modern design",
            price: "299.99",
            image: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?q=80&w=3270&auto=format&fit=crop",
            isNew: false
        },
        {
            name: "Tour Performance Irons",
            description: "Precision-engineered for better control",
            price: "899.99",
            image: "https://images.unsplash.com/photo-1591491719565-9ef792f9a66f?q=80&w=3270&auto=format&fit=crop",
            isNew: true
        },
        {
            name: "Elite Golf Balls",
            description: "Superior distance and control",
            price: "49.99",
            image: "https://images.unsplash.com/photo-1514917073844-5443fec3f0c8?q=80&w=3270&auto=format&fit=crop",
            isNew: false
        }
    ];

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-[5%]">
                <div className="text-center mb-12">
                    <motion.h2 
                        className="text-3xl md:text-4xl font-bold text-black mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Featured Products
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-black/70 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Explore our selection of premium golf equipment designed to enhance your game
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
