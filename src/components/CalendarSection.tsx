import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { FiCamera, FiHeart, FiMusic } from 'react-icons/fi';
import { FaRing, FaCar, FaGlassCheers } from 'react-icons/fa';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  camera: FiCamera,
  rings: FaRing,
  car: FaCar,
  champagne: FaGlassCheers,
  music: FiMusic,
};

const CalendarSection = () => {
  // Get first day of month and number of days
  const year = parseInt(weddingConfig.calendar.year);
  const month = 1; // January
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  // Adjust for Monday as first day
  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

  const days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
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
      className="w-full max-w-2xl mx-auto overflow-hidden rounded-3xl bg-white/95 backdrop-blur-sm p-4 sm:p-6 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] border border-stone-100"
    >
      {/* Header Calendar - Hàng trên cùng */}
      <div className="mb-6 flex flex-col items-center justify-between gap-6">
        {/* Bên trái: Calendar text */}
        <div className="text-center">
          <p className="mb-2 text-[10px] uppercase tracking-[0.3em] font-script font-bold text-wedding-rose">Save the Date</p>
          <div className="flex flex-col items-center group">
            <h3 className="text-xl md:text-4xl font-sans text-gray-800 tracking-wide">
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
            {/* Added Pink */}
            <div
              className="h-9 w-9 rounded-full border-2 border-slate-200 shadow-sm"
              style={{ backgroundColor: '#FFC1CC' }}
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
          {/* Tiêu đề Lịch trình */}
        </div>
      </div>

      {/* New Full-Width Timeline Section */}
      <div className="mt-12 pt-0 w-full">
        <div>
          <h3 className="text-center text-2xl font-script font-bold text-gray-800 mb-6 font-medium">Lịch trình hôn lễ</h3>
        </div>

        <div className="relative">
          {/* Central Axis Line - Spans full height on all screens */}
          <div className="absolute left-1/2 top-4 bottom-4 w-0.5 -ml-px bg-gradient-to-b from-wedding-rose/20 via-wedding-rose/40 to-transparent"></div>

          {timeline.schedule?.map((daySchedule: any, dayIndex: number) => (
            <div key={dayIndex} className="mb-12 last:mb-0 relative">
              {/* Day Header */}
              <div className="relative z-10 py-2 mb-8 flex justify-center sticky top-0">
                <span className="text-center text-[10px] sm:text-xs font-bold text-wedding-rose uppercase tracking-[0.2em] bg-white/95 backdrop-blur px-6 py-2 rounded-full border border-wedding-rose/20 shadow-sm">
                  {daySchedule.day}
                </span>
              </div>

              {/* Labels */}
              <div className="flex justify-between text-[13px] font-bold uppercase tracking-widest text-gray-600 mb-6 px-4 sm:px-10 max-w-2xl mx-auto w-full">
                <span className="w-1/2 text-right pr-8">Nhà Gái</span>
                <span className="w-1/2 pl-8">Nhà Trai</span>
              </div>

              <div className="space-y-8 relative max-w-2xl mx-auto w-full px-2">
                {daySchedule.items.map((item: any, itemIndex: number) => {
                  const IconComponent = (item.icon && iconMap[item.icon]) || FiHeart;
                  const isBoth = item.type === 'both';

                  // Shared Event Logic (Split Layout: Time Left | Icon | Title Right)
                  if (isBoth) {
                    return (
                      <div key={itemIndex} className="relative flex items-center justify-between z-10 group min-h-[60px]">
                        {/* Left Side: Time */}
                        <div className="w-[45%] text-right pr-4 sm:pr-8">
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-wedding-cream/40 p-2 sm:p-3 rounded-xl border border-wedding-rose/20 inline-block w-full shadow-sm"
                          >
                            <span className="text-[9px] sm:text-[10px] font-bold text-wedding-rose block uppercase tracking-wide whitespace-nowrap">
                              {item.time}
                            </span>
                          </motion.div>
                        </div>

                        {/* Center Icon */}
                        <div className="absolute left-1/2 -ml-5 sm:-ml-6 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-md border border-wedding-rose/40 text-wedding-rose z-20">
                          <IconComponent className="text-xs sm:text-sm" />
                        </div>

                        {/* Right Side: Title */}
                        <div className="w-[45%] text-left pl-4 sm:pl-8">
                          <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-wedding-cream/40 p-2 sm:p-3 rounded-xl border border-wedding-rose/20 inline-block w-full shadow-sm"
                          >
                            <span className="text-[9px] sm:text-[10px] font-bold text-gray-800 uppercase tracking-wider block whitespace-normal break-words leading-tight">
                              {item.title}
                            </span>
                          </motion.div>
                        </div>
                      </div>
                    );
                  }

                  // Split Logic (Bride vs Groom)
                  return (
                    <div key={itemIndex} className="relative flex items-center justify-between z-10 min-h-[60px]">
                      {/* Left Side (Bride) */}
                      <div className="w-[45%] pr-4 sm:pr-8 text-right flex justify-end">
                        {item.type === 'bride' && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: itemIndex * 0.1 }}
                            className="bg-stone-50/50 p-2 sm:p-3 rounded-xl border border-stone-100 w-full shadow-sm"
                          >
                            <span className="text-[9px] sm:text-[10px] font-bold text-wedding-rose block mb-0.5 whitespace-nowrap">{item.time}</span>
                            <span className="text-[9px] sm:text-[10px] font-bold text-gray-800 uppercase tracking-wider block whitespace-normal break-words leading-tight">
                              {item.title}
                            </span>
                          </motion.div>
                        )}
                      </div>

                      {/* Center Icon */}
                      <div className={`absolute left-1/2 -ml-5 sm:-ml-6 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-sm border ${item.type === 'bride' ? 'border-pink-100 text-pink-400' : 'border-blue-100 text-blue-400'} z-10`}>
                        <IconComponent className="text-[10px] sm:text-xs" />
                      </div>

                      {/* Right Side (Groom) */}
                      <div className="w-[45%] pl-4 sm:pl-8 flex justify-start">
                        {item.type === 'groom' && (
                          <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: itemIndex * 0.1 }}
                            className="bg-stone-50/50 p-2 sm:p-3 rounded-xl border border-stone-100 w-full shadow-sm"
                          >
                            <span className="text-[9px] sm:text-[10px] font-bold text-wedding-rose block mb-0.5 whitespace-nowrap">{item.time}</span>
                            <span className="text-[9px] sm:text-[10px] font-bold text-gray-800 uppercase tracking-wider block whitespace-normal break-words leading-tight">
                              {item.title}
                            </span>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CalendarSection;
