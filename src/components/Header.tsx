import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / windowHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const groomLastName = weddingConfig.couple.groomName.split(' ').slice(-1)[0];
  const brideLastName = weddingConfig.couple.brideName.split(' ').slice(-1)[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-[430px] mx-auto px-4 py-3">
        <h1 className="text-xl md:text-2xl font-script font-semibold text-gray-800 text-center">
          Wedding Invitation - {groomLastName} & {brideLastName}
        </h1>
      </div>
      {/* Progress Bar */}
      <div className="h-1 bg-gray-200 relative">
        <motion.div
          className="h-full bg-blue-500"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </header>
  );
};

export default Header;
