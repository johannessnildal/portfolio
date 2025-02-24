'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const descriptions = ["Websites", "Web Apps", "Experiences", "Interfaces"];

const DescriptionCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <AnimatePresence mode='wait'>
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="transition-opacity text-transparent bg-clip-text bg-gradient-to-r from-muted/70 via-muted/90 to-muted/70"
        >
          {descriptions[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default DescriptionCarousel;
