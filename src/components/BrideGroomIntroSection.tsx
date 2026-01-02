import { motion } from 'framer-motion';
import { FiPhone, FiMapPin } from 'react-icons/fi';
import { weddingConfig } from '../data/weddingConfig';

const BrideGroomIntroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12">
      {/* Bride Section */}
      <section className="relative">
        <div className="flex flex-col items-center gap-8">
          {/* Image Side */}
          <motion.div
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-wedding-rose/20 rounded-[2rem] transform rotate-3 transition-transform group-hover:rotate-6 duration-500"></div>
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl bg-white p-2">
                <img
                  src={weddingConfig.images.brideMain}
                  alt="Cô dâu"
                  className="w-full h-[500px] xl:h-[600px] object-cover rounded-[1.8rem]"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="w-full text-center space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-6xl font-script text-wedding-rose">
              Cô dâu {weddingConfig.couple.brideName}
            </h2>

            {weddingConfig.brideSide.description && (
              <p className="text-gray-600 leading-loose text-lg italic relative py-4">
                <span className="hidden opacity-0 absolute -top-2 -left-4 text-6xl text-wedding-rose/20 font-serif">"</span>
                {weddingConfig.brideSide.description}
                <span className="hidden opacity-0 absolute -bottom-8 -right-4 text-6xl text-wedding-rose/20 font-serif">"</span>
              </p>
            )}

            <div className="bg-wedding-cream/30 rounded-2xl p-6 mt-8 border border-wedding-gold/10 hover:border-wedding-gold/30 transition-colors">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif uppercase tracking-wider text-wedding-gold/80">
                {weddingConfig.brideSide.title}
              </h3>

              <div className="space-y-3">
                <div className="flex flex-col md:flex-row items-center gap-2 text-gray-700">
                  <span className="font-semibold min-w-20">Phụ huynh:</span>
                  <div className="flex flex-col md:flex-row md:gap-2">
                    <span>Ông {weddingConfig.brideSide.fatherName}</span>
                    <span className="hidden md:block text-wedding-rose">•</span>
                    <span>Bà {weddingConfig.brideSide.motherName}</span>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2 text-gray-700">
                  <span className="font-semibold min-w-20">Tư gia:</span>
                  <div>
                    <p>{weddingConfig.brideSide.event.addressLine1}</p>
                    <p className="text-gray-500 text-sm mt-1">{weddingConfig.brideSide.event.addressLine2}</p>
                    <a
                      href={weddingConfig.brideSide.event.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-wedding-rose hover:underline mt-1 font-medium justify-center w-full"
                    >
                      <FiMapPin size={14} />
                      Chỉ đường
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2 text-gray-700 pt-4">
                  <span className="font-semibold">Liên hệ cô dâu {weddingConfig.couple.brideName}:</span>
                  <a
                    href={`tel:${weddingConfig.contacts.bridePhone}`}
                    className="inline-flex items-center gap-2 text-wedding-rose hover:text-white bg-white hover:bg-wedding-rose transition-all duration-300 font-medium px-5 py-2 rounded-full shadow-sm hover:shadow-md border border-wedding-rose/30 group w-fit"
                  >
                    <FiPhone className="group-hover:animate-pulse" />
                    {weddingConfig.contacts.bridePhone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Groom Section */}
      <section className="relative">
        <div className="flex flex-col items-center gap-8">
          {/* Image Side */}
          <motion.div
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-100 rounded-[2rem] transform -rotate-3 transition-transform group-hover:-rotate-6 duration-500"></div>
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl bg-white p-2">
                <img
                  src={weddingConfig.images.groomMain}
                  alt="Chú rể"
                  className="w-full h-[500px] md:h-[600px] object-cover rounded-[1.8rem]"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="w-full text-center space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-6xl font-script text-wedding-rose">
              Chú rể {weddingConfig.couple.groomName}
            </h2>

            {weddingConfig.groomSide.description && (
              <p className="text-gray-600 leading-loose text-lg italic relative py-4">
                <span className="hidden opacity-0 absolute -top-2 -right-4 text-6xl text-wedding-rose/20 font-serif">"</span>
                {weddingConfig.groomSide.description}
                <span className="hidden opacity-0 absolute -bottom-8 -left-4 text-6xl text-wedding-rose/20 font-serif">"</span>
              </p>
            )}

            <div className="bg-blue-50/50 rounded-2xl p-6 mt-8 border border-blue-100 hover:border-blue-200 transition-colors">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif uppercase tracking-wider text-blue-300">
                {weddingConfig.groomSide.title}
              </h3>

              <div className="space-y-3">
                <div className="flex flex-col md:flex-row items-center gap-2 text-gray-700">
                  <span className="font-semibold min-w-20">Phụ huynh:</span>
                  <div className="flex flex-col md:flex-row md:gap-2">
                    <span>Ông {weddingConfig.groomSide.fatherName}</span>
                    {weddingConfig.groomSide.motherName && (
                      <>
                        <span className="hidden md:block text-wedding-rose">•</span>
                        <span>Bà {weddingConfig.groomSide.motherName}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2 text-gray-700">
                  <span className="font-semibold min-w-20">Tư gia:</span>
                  <div>
                    <p>{weddingConfig.groomSide.event.addressLine1}</p>
                    <p className="text-gray-500 text-sm mt-1">{weddingConfig.groomSide.event.addressLine2}</p>
                    <a
                      href={weddingConfig.groomSide.event.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-500 hover:underline mt-1 font-medium justify-center w-full"
                    >
                      <FiMapPin size={14} />
                      Chỉ đường
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2 text-gray-700 pt-4">
                  <span className="font-semibold">Liên hệ chú rể {weddingConfig.couple.groomName}:</span>
                  <a
                    href={`tel:${weddingConfig.contacts.groomPhone}`}
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-white bg-white hover:bg-blue-400 transition-all duration-300 font-medium px-5 py-2 rounded-full shadow-sm hover:shadow-md border border-blue-200 group w-fit"
                  >
                    <FiPhone className="group-hover:animate-pulse" />
                    {weddingConfig.contacts.groomPhone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Procession Map Section */}
      <motion.section
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-script text-gray-800 mb-2">
            Lộ Trình Rước Dâu
          </h3>
          <div className="w-16 h-1 bg-wedding-gold/50 mx-auto rounded-full"></div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-wedding-cream/30 rounded-3xl transform rotate-1 transition-transform group-hover:rotate-0 duration-500"></div>
          <div className="relative bg-white p-2 rounded-3xl shadow-lg overflow-hidden border border-stone-100">
            <img
              src={weddingConfig.images.processionMap}
              alt="Sơ đồ rước dâu"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>

          <div className="text-center mt-4 text-gray-500 italic text-sm">
            Sơ đồ di chuyển từ nhà gái về nhà trai
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default BrideGroomIntroSection;
