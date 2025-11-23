import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-gray-800 text-white">
      <div className="w-full text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-base md:text-lg mb-4 leading-relaxed"
        >
          Cảm ơn bạn đã dành thời gian ghé thăm thiệp cưới online của chúng tôi 💕
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm text-gray-400"
        >
          <p className="font-script text-lg mb-2">
            {weddingConfig.couple.groomName} & {weddingConfig.couple.brideName}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            {weddingConfig.mainDate.display}
          </p>
          <p>© {currentYear} - Made with ❤️</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

