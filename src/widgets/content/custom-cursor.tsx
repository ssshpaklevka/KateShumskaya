'use client';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

interface CustomCursorProps {
  isVisible: boolean;
  text: string;
}

const CustomCursor: FC<CustomCursorProps> = ({ isVisible, text }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 size-[88px] rounded-full bg-white 
        flex justify-center items-center pointer-events-none z-[9999]"
      animate={{
        opacity: isVisible ? 1 : 0,
        x: position.x - 44,
        y: position.y - 44,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        opacity: { duration: 0.2 },
      }}
    >
      <p className="text-[15px] font-light text-black">{text}</p>
    </motion.div>
  );
};

export default CustomCursor;
