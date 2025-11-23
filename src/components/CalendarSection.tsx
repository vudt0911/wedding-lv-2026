import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { FiCamera, FiHeart } from 'react-icons/fi';
import { FaRing } from 'react-icons/fa';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  camera: FiCamera,
  rings: FaRing, // Dùng FaRing cho "Lễ cưới"
};

const CalendarSection = () => {
  // Get first day of month and number of days
  const year = parseInt(weddingConfig.calendar.year);
  const month = 3; // March
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  // Adjust for Monday as first day
  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const calendarDays: (number | null)[] = [
    ...Array(adjustedFirstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1)
  ];

  const { timeline, images } = weddingConfig;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
    >
      {/* Header Calendar - Hàng trên cùng */}
      <div className="mb-6 flex items-start justify-between gap-4">
        {/* Bên trái: Calendar text */}
        <div>
          <p className="mb-2 text-xs font-semibold text-gray-500">Calendar</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-script text-gray-800">
              {weddingConfig.calendar.monthName}
            </h3>
            <span className="text-xl text-gray-600">
              {weddingConfig.calendar.year}
            </span>
          </div>
        </div>

        {/* Bên phải: Calendar grid nhỏ */}
        <div className="flex-shrink-0">
          <div className="mb-1 grid grid-cols-7 gap-0.5">
            {days.map((day, index) => (
              <div
                key={index}
                className="w-7 py-1 text-center text-[10px] font-semibold text-gray-600"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-0.5">
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className={`flex h-7 w-7 items-center justify-center text-[11px] ${
                  day === null
                    ? ''
                    : day === weddingConfig.calendar.highlightDay
                    ? 'relative'
                    : 'text-gray-700'
                }`}
              >
                {day !== null && (
                  <>
                    {day === weddingConfig.calendar.highlightDay ? (
                      <div className="relative flex items-center justify-center">
                        <span className="text-sm font-bold text-wedding-rose">
                          {day}
                        </span>
                        <span className="absolute -top-1 -right-1 text-[8px] text-red-500">
                          ❤️
                        </span>
                      </div>
                    ) : (
                      <span>{day}</span>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phần dưới: DRESSCODE dọc bên trái + Nội dung bên phải */}
      <div className="flex gap-6">
        {/* Bên trái: DRESSCODE dọc */}
        <div className="flex w-1/4 flex-col items-start">
          <div className="mb-4 h-32 w-px bg-gray-300"></div>
          <div
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            DRESSCODE
          </div>
          <div className="flex flex-col gap-3">
            {/* Màu theo ảnh: Đen, Nâu beige nhạt, Kem/trắng rất nhạt */}
            <div
              className="h-9 w-9 rounded-full border-2 border-slate-200 shadow-sm"
              style={{ backgroundColor: '#000000' }}
            ></div>
            <div
              className="h-9 w-9 rounded-full border-2 border-slate-200 shadow-sm"
              style={{ backgroundColor: '#D4C4A8' }}
            ></div>
            <div
              className="h-9 w-9 rounded-full border-2 border-slate-200 shadow-sm"
              style={{ backgroundColor: '#F5F1E8' }}
            ></div>
          </div>
        </div>

        {/* Bên phải: Ảnh + Mốc thời gian */}
        <div className="flex-1">
          {/* Ảnh lớn */}
          {images?.timelineTop && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 overflow-hidden rounded-3xl"
            >
              <motion.img
                src={images.timelineTop}
                alt="Cặp đôi"
                className="h-48 w-full object-cover"
                loading="lazy"
                whileInView={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </motion.div>
          )}

          {/* Mốc thời gian */}
          <div className="space-y-3">
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
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                      <IconComponent className="text-lg text-pink-400" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <span className="text-xs font-semibold text-gray-600 mb-0.5">
                        {item.time}
                      </span>
                      <span className="text-sm font-bold text-slate-800 uppercase">
                        {item.title}
                      </span>
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CalendarSection;
