import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date(weddingConfig.eventDate).getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference <= 0) {
        setIsPast(true);
        return null;
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const CountdownBox = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-4 md:p-6 min-w-[70px] md:min-w-[100px]"
    >
      <div className="text-3xl md:text-5xl font-bold text-wedding-rose mb-2">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-xs md:text-sm text-gray-600 uppercase tracking-wide">
        {label}
      </div>
    </motion.div>
  );

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-wedding-cream to-wedding-pink">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-script text-gray-800 mb-4"
        >
          Đếm Ngược
        </motion.h2>
        <div className="w-24 h-1 bg-wedding-rose mx-auto mb-8"></div>

        {isPast ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl md:text-2xl text-gray-700 font-light"
          >
            Ngày trọng đại đã diễn ra, cảm ơn mọi người đã chung vui! 💕
          </motion.p>
        ) : timeLeft ? (
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <CountdownBox value={timeLeft.days} label="Ngày" />
            <CountdownBox value={timeLeft.hours} label="Giờ" />
            <CountdownBox value={timeLeft.minutes} label="Phút" />
            <CountdownBox value={timeLeft.seconds} label="Giây" />
          </div>
        ) : (
          <p className="text-gray-700">Đang tải...</p>
        )}
      </div>
    </section>
  );
};

export default CountdownSection;

