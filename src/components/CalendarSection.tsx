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
  const month = 1; // January
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
      className="w-full max-w-full overflow-hidden rounded-3xl bg-white/95 backdrop-blur-sm p-4 sm:p-6 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] border border-stone-100"
    >
      {/* Header Calendar - Hàng trên cùng */}
      <div className="mb-6 flex flex-col items-center md:flex-row md:items-start justify-between gap-6 md:gap-4">
        {/* Bên trái: Calendar text */}
        <div className="text-center md:text-left">
          <p className="mb-2 text-[10px] uppercase tracking-[0.3em] font-sans text-gray-400">Save the Date</p>
          <div className="flex flex-col items-center md:items-start group">
            <h3 className="text-3xl md:text-4xl font-serif text-gray-800 tracking-wide">
              {weddingConfig.calendar.monthName}
            </h3>
            <div className="h-px w-12 bg-wedding-rose my-2 transform group-hover:w-24 transition-all duration-500"></div>
            <span className="text-lg font-medium text-gray-600 font-sans tracking-widest">
              {weddingConfig.calendar.year}
            </span>
          </div>
        </div>

        {/* Bên phải: Calendar grid nhỏ */}
        <div className="flex-shrink-0 bg-stone-50/50 p-4 rounded-2xl border border-stone-100">
          <div className="mb-2 grid grid-cols-7 gap-1">
            {days.map((day, index) => (
              <div
                key={index}
                className="w-6 sm:w-8 text-center text-[10px] font-bold text-gray-400 font-sans"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className={`flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ${day === null
                  ? ''
                  : day === weddingConfig.calendar.highlightDay
                    ? 'relative bg-wedding-rose text-white shadow-lg shadow-wedding-rose/30 scale-110'
                    : 'text-gray-600 hover:bg-stone-100'
                  }`}
              >
                {day !== null && (
                  <>
                    {day === weddingConfig.calendar.highlightDay ? (
                      <div className="relative flex items-center justify-center w-full h-full">
                        <span>{day}</span>
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="absolute -top-1.5 -right-1.5 text-[10px]"
                        >
                          ❤️
                        </motion.span>
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
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Bên trái: DRESSCODE dọc - Ẩn trên mobile */}
        <div className="hidden sm:flex w-full sm:w-1/4 flex-col items-start">
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
              className="mb-4 overflow-hidden rounded-3xl w-full max-w-full"
            >
              <motion.img
                src={images.timelineTop}
                alt="Cặp đôi"
                className="h-64 sm:h-80 w-full object-contain bg-gray-50 rounded-xl"
                loading="lazy"
                whileInView={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </motion.div>
          )}

          {/* Mốc thời gian */}
          {/* Mốc thời gian */}
          <div className="space-y-6 relative pl-2">
            {/* Connecting Line */}
            <div className="absolute left-[21px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-wedding-rose/20 via-wedding-rose/40 to-transparent"></div>

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
                    className="flex items-center gap-4 relative z-10"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-md border-2 border-wedding-pink text-wedding-rose group-hover:scale-110 transition-transform">
                      <IconComponent className="text-lg" />
                    </div>
                    <div className="flex flex-1 flex-col bg-stone-50/50 p-3 rounded-xl border border-stone-100 hover:border-wedding-rose/20 transition-colors">
                      <span className="text-xs font-semibold text-wedding-rose mb-0.5 tracking-wider">
                        {item.time}
                      </span>
                      <span className="text-sm font-bold text-gray-800 uppercase tracking-wide">
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
