// 'use client';
// import type { FC, TouchEvent as ReactTouchEvent } from 'react';
// import { useState, useRef, useEffect } from 'react';

// import { cn } from '@/src/shared/lib/utils';

// const data = [
//   { src: '/img/slider/logitech/logitech.mp4', alt: 'Logitech' },
//   { src: '/img/slider/maxfactor/maxfactor.mp4', alt: 'Maxfactor' },
//   { src: '/img/slider/spotify/spotify.mp4', alt: 'Spotify' },
//   { src: '/img/slider/xiaomi/xiaomi.mp4', alt: 'Xiaomi' },
// ];

// const Slider: FC = () => {
//   // Устанавливаем начальный индекс в зависимости от ширины экрана
//   const getInitialIndex = () => {
//     return window.innerWidth >= 1536 ? 2 : 1;
//   };

//   const [currentIndex, setCurrentIndex] = useState(getInitialIndex());
//   const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
//   const [touchStart, setTouchStart] = useState<number>(0);
//   const [touchEnd, setTouchEnd] = useState<number>(0);

//   // Создаем действительно бесконечный массив
//   const getSlideIndex = (index: number) => {
//     return ((index % data.length) + data.length) % data.length;
//   };

//   useEffect(() => {
//     videoRefs.current.forEach((video, index) => {
//       if (video) {
//         if (index === currentIndex) {
//           video.play().catch(() => {});
//         } else {
//           video.pause();
//           video.currentTime = 0;
//         }
//       }
//     });
//   }, [currentIndex]);

//   const handleVideoEnd = () => {
//     goNext();
//   };

//   const getVisibleIndices = () => {
//     const isLarge = window.innerWidth >= 1536;
//     const visibleCount = isLarge ? 5 : 3;
//     const halfCount = Math.floor(visibleCount / 2);

//     return Array.from({ length: visibleCount }, (_, i) => {
//       const index = currentIndex + (i - halfCount);
//       return index;
//     });
//   };

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
//   };

//   const goNext = () => {
//     setCurrentIndex((prev) => prev + 1);
//   };

//   const goPrev = () => {
//     setCurrentIndex((prev) => prev - 1);
//   };

//   // Обработчики свайпов
//   const handleTouchStart = (e: ReactTouchEvent<HTMLDivElement>) => {
//     setTouchStart(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e: ReactTouchEvent<HTMLDivElement>) => {
//     setTouchEnd(e.touches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (touchStart - touchEnd > 75) {
//       goNext();
//     }
//     if (touchStart - touchEnd < -75) {
//       goPrev();
//     }
//     setTouchStart(0);
//     setTouchEnd(0);
//   };

//   return (
//     <div>
//       <div
//         className="w-full max-w-[1920px] mx-auto relative"
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         <div className="relative h-[550px] lg:h-[743px] xl:h-[924px] 2xl:h-[720px] 3xl:h-[900px] flex items-center justify-center overflow-hidden">
//           <div
//             className="absolute w-full flex items-center justify-center"
//             style={{ perspective: '1000px' }}
//           >
//             {getVisibleIndices().map((index) => {
//               const realIndex = getSlideIndex(index);
//               const distance = index - currentIndex;
//               const isActive = index === currentIndex;

//               return (
//                 <div
//                   key={`${index}-${data[realIndex].alt}`}
//                   className={cn(
//                     'absolute transition-all duration-500 cursor-pointer rounded-lg overflow-hidden',
//                     'w-[350px] h-[550px]',
//                     'lg:w-[473px] lg:h-[743px]',
//                     'xl:w-[588px] xl:h-[924px]',
//                     '2xl:w-[460px] 2xl:h-[720px]',
//                     '3xl:w-[574px] 3xl:h-[900px]',
//                   )}
//                   style={{
//                     transform: `
//                     translateX(${distance * (window.innerWidth >= 1536 ? 305 : 346)}px)
//                     scale(${isActive ? 1 : 0.8})
//                     rotateY(${isActive ? 0 : distance * -15}deg)
//                   `,
//                     zIndex: isActive ? 30 : 20 - Math.abs(distance),
//                     filter: isActive ? 'none' : 'grayscale(100%)',
//                     opacity: isActive ? 1 : 1,
//                     transition: 'all 0.5s ease-out',
//                     isolation: 'isolate', // Предотвращает наложение
//                     backfaceVisibility: 'hidden', // Улучшает рендеринг 3D
//                   }}
//                   onClick={() => goToSlide(index)}
//                 >
//                   <video
//                     ref={(el) => (videoRefs.current[index] = el)}
//                     src={data[realIndex].src}
//                     className="w-full h-full object-cover"
//                     muted
//                     playsInline
//                     onEnded={handleVideoEnd}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Навигационные кнопки */}
//       </div>
//       <div className="flex flex-row justify-center mt-20">
//         <button
//           onClick={goPrev}
//           className=" w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all z-40 backdrop-blur-sm"
//         >
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//             <path
//               d="M15 19l-7-7 7-7"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>
//         <button
//           onClick={goNext}
//           className=" w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all z-40 backdrop-blur-sm"
//         >
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//             <path
//               d="M9 5l7 7-7 7"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;
