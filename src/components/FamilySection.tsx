import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import PhotoAlbum from './PhotoAlbum';

const FamiliesSection = () => {
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
      className="space-y-6"
    >
      {/* Photo Album */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="rounded-3xl bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
      >
        <PhotoAlbum images={albumImages} autoPlayInterval={4000} />
      </motion.div>
    </motion.section>
  );
};

export default FamiliesSection;
