import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

export default function Product11() {
    const relatedProducts = [
        {
            name: "Pro Series Fairway Wood",
            price: "$299.99",
            image: "https://images.pexels.com/photos/1325765/pexels-photo-1325765.jpeg",
            category: "Woods"
        },
        {
            name: "Pro Series Hybrid",
            price: "$249.99",
            image: "https://images.pexels.com/photos/1325766/pexels-photo-1325766.jpeg",
            category: "Hybrids"
        },
        {
            name: "Premium Golf Bag",
            price: "$199.99",
            image: "https://images.pexels.com/photos/1325767/pexels-photo-1325767.jpeg",
            category: "Accessories"
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-darkviridiangreen mb-8">Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedProducts.map((product, index) => (
                        <motion.div
                            key={index}
                            className="group bg-merino rounded-lg overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="aspect-w-1 aspect-h-1">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <span className="text-sm text-tahitigold font-semibold">{product.category}</span>
                                <h3 className="text-lg font-bold text-darkviridiangreen mt-1">{product.name}</h3>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-lg font-bold text-tahitigold">{product.price}</span>
                                    <button className="p-2 rounded-full bg-tahitigold text-white hover:bg-darktahitigold transition-colors">
                                        <ShoppingCart className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
