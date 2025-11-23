import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';

const CoupleSection = () => {
  return (
    <section className="pt-20 pb-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Bride Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Bride Image - Left */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-wedding-pink to-wedding-cream flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-6xl mb-4">👰</div>
                    <p className="text-sm">Ảnh cô dâu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bride Info - Right */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="text-xl md:text-2xl font-script text-wedding-rose mb-3">
                Cô dâu
              </p>
              <h3 className="text-2xl md:text-4xl font-bold text-gray-800">
                {weddingConfig.brideFamily.brideName.toUpperCase()}
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Groom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row-reverse items-center gap-6">
            {/* Groom Image - Right */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-wedding-cream to-wedding-beige flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-6xl mb-4">🤵</div>
                    <p className="text-sm">Ảnh chú rể</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Groom Info - Left */}
            <div className="w-full md:w-1/2 text-center md:text-right">
              <p className="text-xl md:text-2xl font-script text-wedding-rose mb-3">
                Chú rể
              </p>
              <h3 className="text-2xl md:text-4xl font-bold text-gray-800">
                {weddingConfig.groomFamily.groomName.toUpperCase()}
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleSection;

