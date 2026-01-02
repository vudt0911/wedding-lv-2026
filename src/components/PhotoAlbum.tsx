import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PhotoAlbumProps {
  images: string[];
  autoPlayInterval?: number;
}

const PhotoAlbum = ({ images, autoPlayInterval = 4000 }: PhotoAlbumProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length, autoPlayInterval]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative overflow-hidden rounded-3xl">
      {/* Main Image with Click for Lightbox */}
      <div
        className="relative aspect-[3/4] md:aspect-[16/9] w-full cursor-zoom-in overflow-hidden bg-gray-100/50"
        onClick={() => setIsLightboxOpen(true)}
      >
        <AnimatePresence mode="popLayout">
          {/* Background Layer (Blurred) */}
          <motion.div
            key={`bg-${currentIndex}`}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={images[currentIndex]}
              alt=""
              className="h-full w-full object-cover blur-2xl opacity-50 scale-110"
            />
          </motion.div>

          {/* Main Image Layer (Contained) */}
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Photo ${currentIndex + 1}`}
            className="relative z-10 h-full w-full object-contain drop-shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            loading="lazy"
          />
        </AnimatePresence>

        {/* Navigation Arrows (In-place) */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-gray-700 shadow-lg transition-all hover:bg-white hover:scale-110"
              aria-label="Previous photo"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-gray-700 shadow-lg transition-all hover:bg-white hover:scale-110"
              aria-label="Next photo"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 overflow-hidden rounded-lg transition-all ${index === currentIndex
                ? 'ring-2 ring-pink-400 ring-offset-2'
                : 'opacity-60 hover:opacity-100'
                }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="h-16 w-16 object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              onClick={() => setIsLightboxOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Lightbox Image */}
            <motion.div
              className="relative max-h-full max-w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentIndex]}
                alt={`Full screen ${currentIndex + 1}`}
                className="max-h-[90vh] max-w-[95vw] object-contain rounded-lg shadow-2xl"
              />

              {/* Lightbox Navigation */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                    className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white hover:scale-110 transition-transform"
                  >
                    <FiChevronLeft className="text-3xl sm:text-4xl" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); goToNext(); }}
                    className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white hover:scale-110 transition-transform"
                  >
                    <FiChevronRight className="text-3xl sm:text-4xl" />
                  </button>
                </>
              )}
            </motion.div>

            {/* Lightbox Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/90 font-medium tracking-widest text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoAlbum;

