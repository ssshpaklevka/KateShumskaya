/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client';
import type { FC } from 'react';
import React, { useState, useRef, useEffect } from 'react';

import { cn } from '@/src/shared/lib/utils';

const data = [
  { src: '/img/slider/logitech/logitech.mp4', alt: 'Logitech' },
  { src: '/img/slider/maxfactor/maxfactor.mp4', alt: 'Maxfactor' },
  { src: '/img/slider/spotify/spotify.mp4', alt: 'Spotify' },
  { src: '/img/slider/xiaomi/xiaomi.mp4', alt: 'Xiaomi' },
];

const Slider: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Без `window`
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1920,
  ); // Проверка

  // Устанавливаем ширину экрана после монтирования
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setWindowWidth(window.innerWidth);
      handleResize(); // Устанавливаем сразу
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
    return undefined; // Explicitly return undefined
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const wind = window.innerWidth >= 1536 ? 2 : 1;
      setCurrentIndex(wind); // Перенесли сюда, чтобы избежать SSR-проблем
    }
  }, []);

  const getSlideIndex = (index: number) => {
    return ((index % data.length) + data.length) % data.length;
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentIndex]);

  const handleVideoEnd = () => {
    goNext();
  };

  const getVisibleIndices = () => {
    if (typeof window === 'undefined') return [];

    const isLarge = windowWidth >= 1536;
    const visibleCount = isLarge ? 5 : 3;
    const halfCount = Math.floor(visibleCount / 2);

    return Array.from({ length: visibleCount }, (_, i) => {
      const index = currentIndex + (i - halfCount);
      return index;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      goNext();
    }
    if (touchStart - touchEnd < -75) {
      goPrev();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div>
      <div
        className="w-full max-w-[1920px] mx-auto relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative h-[550px] lg:h-[743px] xl:h-[924px] 2xl:h-[720px] 3xl:h-[900px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute w-full flex items-center justify-center"
            style={{ perspective: '1000px' }}
          >
            {getVisibleIndices().map((index) => {
              const realIndex = getSlideIndex(index);
              const distance = index - currentIndex;
              const isActive = index === currentIndex;
              const translateX = distance * (windowWidth >= 1536 ? 305 : 346);

              return (
                <div
                  key={`${index}-${data[realIndex].alt}`}
                  className={cn(
                    'absolute transition-all duration-500 cursor-pointer rounded-lg overflow-hidden',
                    'w-[350px] h-[550px]',
                    'lg:w-[473px] lg:h-[743px]',
                    'xl:w-[588px] xl:h-[924px]',
                    '2xl:w-[460px] 2xl:h-[720px]',
                    '3xl:w-[574px] 3xl:h-[900px]',
                  )}
                  style={{
                    transform: `translateX(${translateX}px) scale(${isActive ? 1 : 0.8}) rotateY(${isActive ? 0 : distance * -15}deg)`,
                    zIndex: isActive ? 30 : 20 - Math.abs(distance),
                    filter: isActive ? 'none' : 'grayscale(100%)',
                    transition: 'transform 0.5s ease-out',
                    isolation: 'isolate',
                    backfaceVisibility: 'hidden',
                  }}
                  onClick={() => goToSlide(index)}
                >
                  <video
                    ref={(el) => {
                      if (videoRefs.current) {
                        videoRefs.current[index] = el;
                      }
                    }}
                    src={data[realIndex].src}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Навигационные кнопки */}
      </div>
      <div className="flex flex-row justify-center mt-20 gap-[120px] md:gap-[120px] lg:gap-[160px] xl:gap-[200px] 2xl:gap-[100px] 3xl:gap-[116px]">
        <button
          onClick={goPrev}
          className="w-[36px] h-[36px] sm:w-[46px] sm:h-[46px] md:w-[46px] md:h-[46px] lg:w-[56px] lg:h-[56px] xl:w-[56px] xl:h-[56px] 2xl:w-[62px] 2xl:h-[62px] 3xl:w-[62px] 3xl:h-[62px]  rounded-full flex items-center justify-center transition-all z-40 backdrop-blur-sm hover:scale-125 duration-300"
        >
          <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 19l-7-7 7-7"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={goNext}
          className="w-[36px] h-[36px] sm:w-[46px] sm:h-[46px] md:w-[46px] md:h-[46px] lg:w-[56px] lg:h-[56px] xl:w-[56px] xl:h-[56px] 2xl:w-[62px] 2xl:h-[62px] 3xl:w-[62px] 3xl:h-[62px] rounded-full flex items-center justify-center transition-all z-40 backdrop-blur-sm hover:scale-125 duration-300"
        >
          <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 5l7 7-7 7"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
