import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";

const defaultImages = [
  {
    url: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=3270&auto=format&fit=crop",
    caption: "Championship Course",
    category: "Course",
    year: "2023"
  },
  {
    url: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2970&auto=format&fit=crop",
    caption: "Tournament Opening Ceremony",
    category: "Events",
    year: "2023"
  },
  {
    url: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=3276&auto=format&fit=crop",
    caption: "Practice Session",
    category: "Practice",
    year: "2023"
  },
  {
    url: "https://images.unsplash.com/photo-1632932197818-6b133cfbf56b?q=80&w=3272&auto=format&fit=crop",
    caption: "Award Ceremony",
    category: "Events",
    year: "2023"
  },
  {
    url: "https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=3270&auto=format&fit=crop",
    caption: "Aerial View of Course",
    category: "Course",
    year: "2023"
  },
  {
    url: "https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?q=80&w=3270&auto=format&fit=crop",
    caption: "Final Round Action",
    category: "Tournament",
    year: "2023"
  }
];

const Gallery3 = ({ gallery = { images: defaultImages } }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(gallery.images.map(img => img.category))];

  const filteredImages = selectedCategory === "All" 
    ? gallery.images 
    : gallery.images.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-4xl font-bold text-black md:text-5xl lg:text-6xl"
          >
            Tournament Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 text-lg text-black/70 md:mb-16 lg:mb-20 md:text-xl"
          >
            Relive the excitement from our previous tournaments through these captured moments.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-chaugreen text-white"
                  : "bg-gray/5 text-black hover:bg-gray/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-black"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-80"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="mb-2">
                  <span className="inline-block rounded-full bg-chaugreen/90 px-3 py-1 text-xs font-medium text-white">
                    {image.category}
                  </span>
                </div>
                <p className="text-lg font-semibold text-white">{image.caption}</p>
                {image.year && (
                  <p className="mt-1 text-sm text-white/80">{image.year}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {gallery.viewMoreLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center md:mt-16"
          >
            <a
              href={gallery.viewMoreLink}
              className="inline-flex items-center gap-2 text-lg font-semibold text-chaugreen hover:text-black transition-colors"
            >
              View More Photos <ChevronRight className="h-5 w-5" />
            </a>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -right-4 -top-4 rounded-full bg-white p-2 text-black shadow-lg transition-transform hover:scale-110"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="max-h-[80vh] w-auto rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center">
                <div className="mb-2">
                  <span className="inline-block rounded-full bg-chaugreen/90 px-3 py-1 text-xs font-medium text-white">
                    {selectedImage.category}
                  </span>
                </div>
                <p className="text-xl font-semibold text-white">{selectedImage.caption}</p>
                {selectedImage.year && (
                  <p className="mt-1 text-white/80">{selectedImage.year}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

Gallery3.propTypes = {
  gallery: PropTypes.shape({
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        year: PropTypes.string,
      })
    ).isRequired,
    viewMoreLink: PropTypes.string,
  }),
};

export default Gallery3;
