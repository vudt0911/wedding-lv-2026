import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { weddingConfig } from '../data/weddingConfig';

const HeroSection = () => {
  const [guestName, setGuestName] = useState('Quý Khách');

  useEffect(() => {
    // Lấy tên từ URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    if (name) {
      setGuestName(name);
    }
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.12)] overflow-hidden"
    >
      {/* Hero Image with Date Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative mb-6 overflow-hidden rounded-3xl"
      >
        <motion.img
          src={weddingConfig.images.stairHero}
          alt="Cặp đôi"
          className="h-80 w-full object-cover"
          loading="eager"
          whileInView={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        {/* Date Overlay */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl font-script text-white drop-shadow-lg"
          >
            {weddingConfig.mainDate.day} / {weddingConfig.mainDate.month}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl font-script text-white drop-shadow-lg"
          >
            {weddingConfig.mainDate.year}
          </motion.span>
        </div>
      </motion.div>

      {/* Invitation Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4 text-center"
      >
        <p className="text-base leading-relaxed text-gray-700">
          Trân trọng kính mời{' '}
          <span className="font-script text-2xl font-bold text-wedding-rose">
            {guestName}
          </span>
        </p>
        <p className="text-base leading-relaxed text-gray-700">
          tới dự bữa tiệc mừng lễ thành hôn của hai chúng tôi
        </p>

        <div className="my-6 space-y-2">
          <h2 className="text-3xl font-script text-gray-800">
            {weddingConfig.couple.groomName}
          </h2>
          <span className="text-2xl text-wedding-rose">và</span>
          <h2 className="text-3xl font-script text-gray-800">
            {weddingConfig.couple.brideName}
          </h2>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
