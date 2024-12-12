import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Products4() {
    const products = [
        {
            id: 1,
            name: "Pro Series Driver",
            price: "$499.99",
            image: "https://images.pexels.com/photos/1325754/pexels-photo-1325754.jpeg",
            category: "Clubs"
        },
        {
            id: 2,
            name: "Premium Golf Bag",
            price: "$299.99",
            image: "https://images.pexels.com/photos/1325755/pexels-photo-1325755.jpeg",
            category: "Bags"
        },
        {
            id: 3,
            name: "Golf Ball Set (12)",
            price: "$49.99",
            image: "https://images.pexels.com/photos/1325756/pexels-photo-1325756.jpeg",
            category: "Accessories"
        },
        {
            id: 4,
            name: "Golf Gloves",
            price: "$29.99",
            image: "https://images.pexels.com/photos/1325757/pexels-photo-1325757.jpeg",
            category: "Accessories"
        }
    ];

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-darkviridiangreen mb-4">Featured Products</h2>
                    <p className="text-viridiangreen">Discover our most popular golf equipment</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const ProductCard = ({ id, name, price, image, category }) => {
    return (
        <motion.div 
            className="group bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <Link href={`/store/product/${id}`} className="block">
                <div className="aspect-w-1 aspect-h-1">
                    <img 
                        src={image} 
                        alt={name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-4">
                    <span className="text-sm text-tahitigold font-semibold">{category}</span>
                    <h3 className="text-lg font-bold text-darkviridiangreen mt-1 group-hover:text-tahitigold transition-colors">{name}</h3>
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-lg font-bold text-tahitigold">{price}</span>
                        <button 
                            onClick={(e) => {
                                e.preventDefault();
                                // Add to cart functionality here
                            }}
                            className="p-2 rounded-full bg-tahitigold text-white hover:bg-darktahitigold transition-colors"
                        >
                            <ShoppingCart className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};
