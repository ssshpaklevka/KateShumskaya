'use client';
import type { FC } from 'react';
import React, { useState } from 'react';
import Marquee from 'react-simple-marquee';

import CustomCursor from '@/src/shared/ui/custom-cursor/CustomCursor';
const CONTENT = [
  {
    title: 'Sorry babe',
    description: '87,534 likes',
    image: '/img/hero/kate.png',
  },
  {
    title: 'Sorry babe',
    description: '87,534 likes',
    image: '/img/hero/kate.png',
  },
  {
    title: 'Sorry babe',
    description: '87,534 likes',
    image: '/img/hero/kate.png',
  },
  {
    title: 'Sorry babe',
    description: '87,534 likes',
    image: '/img/hero/kate.png',
  },
  {
    title: 'Sorry babe',
    description: '87,534 likes',
    image: '/img/hero/kate.png',
  },
  {
    title: 'Sorry babe',
    description: '87,534 likes',
    image: '/img/hero/kate.png',
  },
  {
    title: 'Sorry babe',
    description: '87,534 likes',
    image: '/img/hero/kate.png',
  },
  {
    title: 'Sorry babe',
    description: '87,534 likes',
    image: '/img/hero/kate.png',
  },
];
const Carousel: FC = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative">
      <CustomCursor isVisible={isHovering} text="look" />

      {/* Градиенты */}
      <div className="absolute left-0 top-0 h-full w-[50px] z-30 bg-gradient-to-r from-black to-transparent" />
      <div className="absolute right-0 top-0 h-full w-[50px] z-30 bg-gradient-to-l from-black to-transparent" />

      <Marquee
        className="mt-[10px] h-[260px] flex flex-row items-center"
        style={{
          marginTop: '10px',
          height: '260px',
        }}
      >
        {CONTENT.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{ cursor: 'none' }}
          >
            {/* Невидимая область для ховера */}
            <div className="absolute h-[260px] w-[162px] z-20" />

            {/* Изображение с grayscale */}
            <div
              className="h-[112px] w-[75px] transition-all duration-300 
                group-hover:h-[260px] group-hover:w-[162px] 
                bg-white ml-4 bg-cover bg-center grayscale 
                group-hover:grayscale-0"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            {/* Текст */}
            <div
              className="z-10 absolute text-nowrap left-[190px] top-0 
              flex flex-col gap-[6px] opacity-0 transition-opacity 
              duration-300 group-hover:opacity-100 pointer-events-none"
            >
              <h3 className="text-[24px] font-medium leading-[34px]">
                {item.title}
              </h3>
              <p className="text-[14px] font-light leading-[20px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Carousel;
