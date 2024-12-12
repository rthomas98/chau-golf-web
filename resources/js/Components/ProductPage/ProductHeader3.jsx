import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, Share2, Minus, Plus } from 'lucide-react';

export default function ProductHeader3() {
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    const images = [
        "https://images.pexels.com/photos/1325759/pexels-photo-1325759.jpeg",
        "https://images.pexels.com/photos/1325760/pexels-photo-1325760.jpeg",
        "https://images.pexels.com/photos/1325761/pexels-photo-1325761.jpeg",
        "https://images.pexels.com/photos/1325762/pexels-photo-1325762.jpeg"
    ];

    return (
        <section className="py-12 bg-merino">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <motion.div 
                            className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img 
                                src={images[selectedImage]} 
                                alt="Product" 
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <div className="grid grid-cols-4 gap-4">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-white ${
                                        selectedImage === index ? 'ring-2 ring-tahitigold' : ''
                                    }`}
                                >
                                    <img 
                                        src={image} 
                                        alt={`Product view ${index + 1}`} 
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-darkviridiangreen mb-2">Pro Series Driver X1</h1>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-tahitigold text-tahitigold" />
                                    ))}
                                    <span className="ml-2 text-viridiangreen">(124 reviews)</span>
                                </div>
                                <button className="text-viridiangreen hover:text-tahitigold transition-colors">
                                    <Heart className="w-5 h-5" />
                                </button>
                                <button className="text-viridiangreen hover:text-tahitigold transition-colors">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-viridiangreen">
                                Experience unmatched performance with our latest Pro Series Driver. 
                                Engineered for maximum distance and accuracy, this club features 
                                advanced aerodynamics and adjustable weighting.
                            </p>
                            <div className="flex items-center space-x-4">
                                <span className="text-3xl font-bold text-tahitigold">$499.99</span>
                                <span className="text-viridiangreen line-through">$599.99</span>
                                <span className="bg-lowtahitigold text-tahitigold px-3 py-1 rounded-full text-sm font-semibold">
                                    Save $100
                                </span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold text-darkviridiangreen">Select Flex</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {['Regular', 'Stiff', 'Extra Stiff'].map((flex) => (
                                    <button
                                        key={flex}
                                        className="px-4 py-2 border-2 border-viridiangreen rounded-lg text-viridiangreen hover:bg-viridiangreen hover:text-white transition-colors"
                                    >
                                        {flex}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center border-2 border-viridiangreen rounded-lg">
                                    <button 
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="p-2 text-viridiangreen hover:text-tahitigold transition-colors"
                                    >
                                        <Minus className="w-5 h-5" />
                                    </button>
                                    <span className="px-4 text-darkviridiangreen">{quantity}</span>
                                    <button 
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="p-2 text-viridiangreen hover:text-tahitigold transition-colors"
                                    >
                                        <Plus className="w-5 h-5" />
                                    </button>
                                </div>
                                <button className="flex-1 bg-tahitigold text-white py-3 rounded-lg hover:bg-darktahitigold transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
