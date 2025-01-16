import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from '@inertiajs/react';
import OptimizedImage from '../Common/OptimizedImage';

export const Header = (props) => {
    const { heading, description, buttons, images } = {
        ...HeaderDefaults,
        ...props,
    };

    const [isSliderPaused, setIsSliderPaused] = useState(false);
    const sliderRef = useRef(null);

    useEffect(() => {
        const preloadImages = () => {
            images.forEach(image => {
                const img = new Image();
                img.src = image.src;
            });
        };
        preloadImages();
    }, [images]);

    useEffect(() => {
        if (!sliderRef.current) return;

        const slider = sliderRef.current;
        let animationFrameId;
        let startTime;
        let currentPosition = 0;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            if (isSliderPaused) {
                startTime = timestamp - (currentPosition / 0.0005); // Extremely slow speed
                animationFrameId = requestAnimationFrame(animate);
                return;
            }

            const progress = timestamp - startTime;
            currentPosition = (progress * 0.0005) % 100; // Extremely slow speed (100x slower than original)
            
            slider.style.transform = `translate3d(-${currentPosition}%, 0, 0)`;
            
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isSliderPaused]);

    // Double the images array to create seamless loop
    const duplicatedImages = [...images, ...images];

    return (
        <section id="hero" className="bg-white px-[5%] py-16 md:py-24 lg:py-28 overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            type: "spring",
                            stiffness: 100,
                            damping: 20
                        }}
                        className="text-6xl font-bold text-black md:text-8xl lg:text-9xl max-w-4xl mb-8"
                    >
                        {heading}
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.2 
                        }}
                        className="text-lg text-black/90 md:text-xl max-w-2xl mb-8"
                    >
                        {description}
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.4 
                        }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {buttons.map((button, index) => (
                            button.title === "Become a Member" ? (
                                <Link
                                    key={index}
                                    href="/membership"
                                    className={`rounded-lg px-6 py-3 font-semibold transition-colors ${
                                        button.variant === "secondary"
                                            ? "border-2 border-chaugreen text-chaugreen hover:bg-chaugreen hover:text-white"
                                            : "bg-chaugreen text-white hover:bg-black"
                                    }`}
                                >
                                    {button.title}
                                </Link>
                            ) : (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className={`rounded-lg px-6 py-3 font-semibold transition-colors ${
                                        button.variant === "secondary"
                                            ? "border-2 border-chaugreen text-chaugreen hover:bg-chaugreen hover:text-white"
                                            : "bg-chaugreen text-white hover:bg-black"
                                    }`}
                                >
                                    {button.title}
                                </motion.button>
                            )
                        ))}
                    </motion.div>
                </div>
                <div 
                    className="relative w-full overflow-hidden"
                    onMouseEnter={() => setIsSliderPaused(true)}
                    onMouseLeave={() => setIsSliderPaused(false)}
                >
                    <div 
                        ref={sliderRef}
                        className="flex gap-4 will-change-transform"
                        style={{
                            width: `${duplicatedImages.length * 100}%`,
                        }}
                    >
                        {duplicatedImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative flex-shrink-0"
                                style={{ width: `calc(100% / ${duplicatedImages.length})` }}
                            >
                                <OptimizedImage
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover object-center rounded-xl shadow-xl"
                                    loading={index < 3 ? "eager" : "lazy"}
                                    quality={100}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

Header.propTypes = {
    heading: PropTypes.string,
    description: PropTypes.string,
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            variant: PropTypes.oneOf(["primary", "secondary"]),
            href: PropTypes.string
        })
    ),
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string
        })
    )
};

const HeaderDefaults = {
    heading: "",
    description: "",
    buttons: [],
    images: []
};
