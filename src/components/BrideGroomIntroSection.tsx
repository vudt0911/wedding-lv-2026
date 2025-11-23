import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { weddingConfig } from '../data/weddingConfig';

const BrideGroomIntroSection = () => {
  const brideRef = useRef<HTMLDivElement>(null);
  const groomRef = useRef<HTMLDivElement>(null);

  // Parallax scroll cho ảnh cô dâu
  const { scrollYProgress: brideScrollY } = useScroll({
    target: brideRef,
    offset: ["start end", "end start"]
  });
  const brideY = useTransform(brideScrollY, [0, 1], [50, -50]);
  const brideOpacity = useTransform(brideScrollY, [0, 0.5, 1], [0, 1, 1]);
  const brideScale = useTransform(brideScrollY, [0, 0.5, 1], [0.8, 1.1, 1.05]);

  // Parallax scroll cho ảnh chú rể
  const { scrollYProgress: groomScrollY } = useScroll({
    target: groomRef,
    offset: ["start end", "end start"]
  });
  const groomY = useTransform(groomScrollY, [0, 1], [-50, 50]);
  const groomOpacity = useTransform(groomScrollY, [0, 0.5, 1], [0, 1, 1]);
  const groomScale = useTransform(groomScrollY, [0, 0.5, 1], [0.8, 1.1, 1.05]);

  return (
    <div className="space-y-6">
      {/* Bride Section */}
      <motion.section
        ref={brideRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rounded-3xl bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
      >
        <div className="flex flex-col gap-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-script text-wedding-rose text-center"
          >
            Cô dâu
          </motion.p>
          
          <motion.div
            className="relative overflow-hidden rounded-3xl"
            style={{ y: brideY, opacity: brideOpacity }}
          >
            <motion.img
              src={weddingConfig.images.brideMain}
              alt="Cô dâu"
              className="h-96 w-full object-cover"
              loading="lazy"
              style={{ scale: brideScale }}
            />
            {/* Overlay gradient effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"
              style={{ opacity: useTransform(brideScrollY, [0, 0.5, 1], [0.3, 0.1, 0]) }}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-gray-800 text-center"
          >
            {weddingConfig.brideSide.brideName.toUpperCase()}
          </motion.h2>
        </div>
      </motion.section>

      {/* Groom Section */}
      <motion.section
        ref={groomRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="rounded-3xl bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
      >
        <div className="flex flex-col gap-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-script text-wedding-rose text-center"
          >
            Chú rể
          </motion.p>
          
          <motion.div
            className="relative overflow-hidden rounded-3xl"
            style={{ y: groomY, opacity: groomOpacity }}
          >
            <motion.img
              src={weddingConfig.images.groomMain}
              alt="Chú rể"
              className="h-96 w-full object-cover"
              loading="lazy"
              style={{ scale: groomScale }}
            />
            {/* Overlay gradient effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"
              style={{ opacity: useTransform(groomScrollY, [0, 0.5, 1], [0.3, 0.1, 0]) }}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-gray-800 text-center"
          >
            {weddingConfig.groomSide.groomName.toUpperCase()}
          </motion.h2>
        </div>
      </motion.section>
    </div>
  );
};

export default BrideGroomIntroSection;
