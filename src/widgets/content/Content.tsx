/* eslint-disable react/no-unescaped-entities */
'use client';
import type { FC } from 'react';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

import CustomCursor from '@/src/shared/ui/custom-cursor/CustomCursor';

interface SlideData {
  id: number;
  image: string;
  title: string;
  likes: number;
}

const slideData: SlideData[] = [
  {
    id: 1,
    image: '/img/hero/kate.png',
    title: 'Video Title 1',
    likes: 1500,
  },
  {
    id: 2,
    image: '/img/hero/kate.png',
    title: 'Video Title 2',
    likes: 1500,
  },
  {
    id: 3,
    image: '/img/hero/kate.png',
    title: 'Video Title 3',
    likes: 1500,
  },
  {
    id: 4,
    image: '/img/hero/kate.png',
    title: 'Video Title 4',
    likes: 1500,
  },
  {
    id: 5,
    image: '/img/hero/kate.png',
    title: 'Video Title 5',
    likes: 1500,
  },
];

const Content: FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative">
      <CustomCursor isVisible={isHovering} text="look" />
      <div>
        <h1 className="text-[64px] leading-[64px]">CONTENT</h1>
        <p className="max-w-[276px] text-[16px] leading-[22px] light">
          Katya's videos have millions of views and an audience that trusts her
          choice.
        </p>
      </div>

      <div className="absolute right-0 top-20 z-10">
        {activeSlide >= 0 && slideData[activeSlide] && (
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">
              {slideData[activeSlide].title}
            </h3>
            <p className="text-lg">{slideData[activeSlide].likes} likes</p>
          </div>
        )}
      </div>

      <div className="relative flex pt-20">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          centeredSlides={true}
          loop={true} // чтобы циклично листалось да
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          className="w-full h-wull"
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div
                className={`cursor-pointer transition-all duration-300 ${
                  index === activeSlide
                    ? 'transform scale-125'
                    : 'opacity-50 scale-75'
                }`}
                onClick={() => setActiveSlide(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveSlide(index);
                  }
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={{ cursor: 'none' }}
                role="button"
                tabIndex={0}
                aria-label={`Слайд ${index + 1}`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={3000}
                  height={3000}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Content;
