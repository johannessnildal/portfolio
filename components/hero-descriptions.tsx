'use client';

import { useState, useEffect } from 'react';

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
      {descriptions.map((description, index) => (
        <span
          key={index}
          className={`transition-opacity duration-300 ease-in-out inline-block h-fit text-transparent bg-clip-text bg-gradient-to-b from-muted/70 to-muted/40 ${
            index === currentIndex ? 'opacity-100 block' : 'opacity-0 hidden'
          }`}
          style={{ top: 0, left: 0 }}
        >
          {description}
        </span>
      ))}
    </div>
  );
};

export default DescriptionCarousel;