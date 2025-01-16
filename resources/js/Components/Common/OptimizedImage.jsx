import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

export const OptimizedImage = ({ 
    src, 
    alt, 
    className = '', 
    width, 
    height,
    loading = 'lazy',
    placeholder = 'blur',
    quality = 75
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [imageSrc, setImageSrc] = useState('');
    
    useEffect(() => {
        if (inView && src) {
            // Add quality parameter to URL if it's a relative path
            const optimizedSrc = src.startsWith('/')
                ? `${src}?q=${quality}`
                : src;
            setImageSrc(optimizedSrc);
        }
    }, [src, inView, quality]);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div 
            ref={ref}
            className={`relative overflow-hidden ${className}`}
            style={{ width, height }}
        >
            {placeholder === 'blur' && !isLoaded && (
                <div 
                    className="absolute inset-0 bg-gray-200 animate-pulse"
                    style={{ width, height }}
                />
            )}
            {inView && imageSrc && (
                <img
                    src={imageSrc}
                    alt={alt}
                    className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    width={width}
                    height={height}
                    loading={loading}
                    onLoad={handleLoad}
                />
            )}
        </div>
    );
};

OptimizedImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    loading: PropTypes.oneOf(['lazy', 'eager']),
    placeholder: PropTypes.oneOf(['blur', 'none']),
    quality: PropTypes.number
};

export default OptimizedImage;
