'use client';
import type { FC } from 'react';
import { useState, useEffect } from 'react';

interface CustomCursorProps {
  isVisible: boolean;
  text?: string;
}

const CustomCursor: FC<CustomCursorProps> = ({ isVisible, text = 'look' }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed w-20 h-20 rounded-full bg-white text-black light flex items-center justify-center pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        left: position.x,
        top: position.y,
        transition: 'transform 1s ease-out',
      }}
    >
      {text}
    </div>
  );
};

export default CustomCursor;
