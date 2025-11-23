import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';

const EventInfoSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6 text-center"
      >
        {/* Date & Time */}
        <div className="mx-auto max-w-sm">
          <div className="mb-4 grid grid-cols-2 gap-4 border-b border-gray-200 pb-3">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                NGÀY
              </p>
              <p className="text-lg font-semibold text-gray-800">
                {weddingConfig.mainDate.day} - {weddingConfig.mainDate.month} - {weddingConfig.mainDate.year}
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                GIỜ
              </p>
              <p className="text-lg font-semibold text-gray-800">09:00</p>
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="text-center text-sm text-gray-600 space-y-1">
          <p className="font-semibold text-gray-800 mb-2">ĐỊA ĐIỂM</p>
          <p>{weddingConfig.brideSide.event.addressLine1}</p>
          <p>{weddingConfig.brideSide.event.addressLine2}</p>
        </div>

        {/* Family Info Grid */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          {/* Nhà Trai */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-gray-800 mb-2">
              NHÀ TRAI
            </h3>
            <div className="space-y-1 text-sm text-gray-700">
              <p>Ông {weddingConfig.groomSide.fatherName}</p>
              {weddingConfig.groomSide.motherName && weddingConfig.groomSide.motherName.trim() && (
                <p>Bà {weddingConfig.groomSide.motherName}</p>
              )}
            </div>
          </div>

          {/* Nhà Gái */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-gray-800 mb-2">
              NHÀ GÁI
            </h3>
            <div className="space-y-1 text-sm text-gray-700">
              <p>Ông {weddingConfig.brideSide.fatherName}</p>
              {weddingConfig.brideSide.motherName && (
                <p>Bà {weddingConfig.brideSide.motherName}</p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default EventInfoSection;
