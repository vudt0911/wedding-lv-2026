import { motion } from 'framer-motion';
import PhotoAlbum from './PhotoAlbum';

import { weddingConfig } from '../data/weddingConfig';

const GallerySection = () => {
  // Get list of used images to filter out
  const usedImages = Object.values(weddingConfig.images);

  // Tất cả ảnh từ public/image
  const allImages = [
    "/image/DSC_0166f.jpg",
    "/image/DSC_0270f.jpg",
    "/image/DSC_0322f.jpg",
    "/image/DSC_0459f.jpg",
    // "/image/DSC_0941.jpg",
    "/image/DSC_0942.jpg",
    "/image/DSC_0976.jpg",
    "/image/DSC_0985.jpg",
    "/image/DSC_0997.jpg",
    "/image/DSC_1002.jpg",
    "/image/DSC_1041.jpg",
    // "/image/DSC_1056.jpg",
    // "/image/DSC_1059.jpg",
    // "/image/DSC_1139.jpg",
    "/image/DSC_1156.jpg",
    "/image/DSC_1161.jpg",
    "/image/DSC_1165.jpg",
    "/image/DSC_1181.jpg",
    "/image/DSC_1215.jpg",
    // "/image/DSC_1234.jpg",
    "/image/DSC_1357.jpg",
    "/image/DSC_1376.jpg",
    "/image/DSC_1385.jpg",
    // "/image/DSC_1622.jpg",
    "/image/DSC_1636.jpg",
    "/image/DSC_1645.jpg",
    "/image/DSC_1755.jpg",
    // "/image/codau.jpg",
  ];

  // Filter out duplicates
  const albumImages = allImages.filter(img => !usedImages.includes(img));

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Khoảnh Khắc Đẹp
        </h2>
        <div className="w-24 h-1 bg-wedding-rose mx-auto"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <PhotoAlbum images={albumImages} autoPlayInterval={4000} />
      </motion.div>
    </motion.section>
  );
};

export default GallerySection;
