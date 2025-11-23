import { motion } from "framer-motion";
import { FiCamera, FiHeart } from "react-icons/fi";
import { weddingConfig } from "../data/weddingConfig";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  camera: FiCamera,
  rings: FiHeart,
};

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const TimelineSection = () => {
  const { timeline, images } = weddingConfig;
  
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      variants={sectionVariants}
      className="rounded-3xl bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
    >
      {/* Title */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold tracking-wide text-slate-800">
          TIMELINE
        </h2>
      </div>

      {/* Top Photo */}
      {images?.timelineTop && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6 overflow-hidden rounded-3xl"
        >
          <motion.img
            src={images.timelineTop}
            alt="Timeline"
            className="h-64 w-full object-cover"
            loading="lazy"
            whileInView={{ scale: 1.1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </motion.div>
      )}

      {/* Timeline Events with Icons */}
      <div className="mb-6 space-y-4">
        {timeline.items?.map(
          (
            item: { time: string; title: string; icon?: string },
            index: number
          ) => {
            const IconComponent =
              (item.icon && iconMap[item.icon]) || FiHeart;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <IconComponent className="text-xl text-pink-400" />
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="text-sm font-semibold text-gray-600 mb-1">
                    {item.time}
                  </span>
                  <span className="text-base font-semibold text-slate-800">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            );
          }
        )}
      </div>

      {/* Bottom Photo */}
      {images?.timelineBottom && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="overflow-hidden rounded-3xl"
        >
          <motion.img
            src={images.timelineBottom}
            alt="Timeline detail"
            className="h-56 w-full object-cover"
            loading="lazy"
            whileInView={{ scale: 1.1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </motion.section>
  );
};

export default TimelineSection;
