import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import PhotoAlbum from './PhotoAlbum';

const GallerySection = () => {
  // Tạo danh sách ảnh cho album từ các ảnh có sẵn
  const albumImages = [
    weddingConfig.images.familyPhoto,
    weddingConfig.images.saveTheDateMain,
    weddingConfig.images.stairHero,
    weddingConfig.images.brideMain,
    weddingConfig.images.groomMain,
    weddingConfig.images.timelineTop,
    weddingConfig.images.timelineBottom,
  ].filter(Boolean); // Loại bỏ ảnh null/undefined

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
