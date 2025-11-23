import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const FallingElements = () => {
  const [screenHeight, setScreenHeight] = useState(800);

  useEffect(() => {
    setScreenHeight(window.innerHeight);
    const handleResize = () => setScreenHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Tạo các phần tử rơi (hoa, lá, sparkles)
  const elements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
    emoji: ['🌸', '🌺', '🌷', '✨', '💕', '🌹'][Math.floor(Math.random() * 6)],
    xOffset: Math.random() * 50 - 25,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          initial={{ y: -50, opacity: 0, rotate: 0 }}
          animate={{
            y: screenHeight + 100,
            opacity: [0, 1, 1, 0],
            rotate: 360,
            x: [0, element.xOffset, 0],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            left: element.left,
            position: 'absolute',
            fontSize: '1.5rem',
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FallingElements;

