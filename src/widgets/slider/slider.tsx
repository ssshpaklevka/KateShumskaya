'use client';
import Image from 'next/image';
import type { FC } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-3d-carousel';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-responsive-3d-carousel/dist/styles.css';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface CustomArrowProps {
//   direction: 'left' | 'right';
//   onClick: () => void;
// }
// const CustomArrow: FC<CustomArrowProps> = ({ direction, onClick }) => (
//   <button onClick={onClick} className="focus:outline-none">
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="w-12 h-12"
//     >
//       <path
//         d={direction === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'}
//         stroke="white"
//         strokeWidth="1"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   </button>
// );

// const SliderControls = () => {
//   const { slideNext, slidePrev } = useContext(CarouselContext);

//   return (
//     <div className="flex justify-center items-center gap-14 pb-14">
//       <CustomArrow direction="left" onClick={slidePrev} />
//       <CustomArrow direction="right" onClick={slideNext} />
//     </div>
//   );
// };

const Slider: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselDimensions, setCarouselDimensions] = useState({
    width: '210px',
    height: '329px',
    numOfSlides: 3 as 2 | 3 | 5 | 'auto',
  });
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const updateDimensions = () => {
      if (window.matchMedia('(min-width: 1920px)').matches) {
        setCarouselDimensions({
          width: '574px',
          height: '900px',
          numOfSlides: 5,
        });
      } else if (window.matchMedia('(min-width: 1536px)').matches) {
        setCarouselDimensions({
          width: '460px',
          height: '720px',
          numOfSlides: 5,
        });
      } else if (window.matchMedia('(min-width: 1280px)').matches) {
        setCarouselDimensions({
          width: '589px',
          height: '925px',
          numOfSlides: 3,
        });
      } else if (window.matchMedia('(min-width: 1024px)').matches) {
        setCarouselDimensions({
          width: '474px',
          height: '744px',
          numOfSlides: 3,
        });
      } else if (window.matchMedia('(min-width: 768px)').matches) {
        setCarouselDimensions({
          width: '350px',
          height: '550px',
          numOfSlides: 3,
        });
      } else if (window.matchMedia('(min-width: 640px)').matches) {
        setCarouselDimensions({
          width: '350px',
          height: '550px',
          numOfSlides: 3,
        });
      } else {
        setCarouselDimensions({
          width: '210px',
          height: '329px',
          numOfSlides: 3,
        });
      }
    };

    updateDimensions();

    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // const ImageWrapper = ({ index, src }: { index: number; src: string }) => (
  //   <motion.div
  //     initial={{ filter: 'grayscale(100%)' }}
  //     animate={{
  //       filter: currentIndex === index ? 'grayscale(0%)' : 'grayscale(100%)',
  //     }}
  //     transition={{ duration: 0.5, ease: 'easeInOut' }}
  //   >
  //     <Image
  //       width={2100}
  //       height={3290}
  //       alt=""
  //       src={src}
  //       className="w-[210px] h-[329px] sm:w-[350px] sm:h-[550px] md:w-[350px] md:h-[550px] lg:w-[474px] lg:h-[744px] xl:w-[589px] xl:h-[925px] 2xl:w-[460px] 2xl:h-[720px] 3xl:w-[574px] 3xl:h-[900px]"
  //     />
  //   </motion.div>
  // );

  const VideoWrapper = ({
    src,
    isActive, // Добавляем новый проп
    textSrc,
  }: {
    index: number;
    src: string;
    isActive: boolean;
    textSrc: string;
  }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      if (videoRef.current) {
        if (isActive) {
          videoRef.current.play().catch((error) => {
            if (error.name !== 'AbortError') {
              return error;
            }
          });
        } else {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }
    }, [isActive]);

    return (
      <motion.div
        initial={{ filter: 'grayscale(100%)' }}
        animate={{
          filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)',
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="w-full h-full"
      >
        <video
          ref={videoRef}
          playsInline
          muted
          loop
          src={src}
          className="w-[210px] h-[329px] sm:w-[350px] sm:h-[550px] md:w-[350px] md:h-[550px] lg:w-[474px] lg:h-[744px] xl:w-[589px] xl:h-[925px] 2xl:w-[460px] 2xl:h-[720px] 3xl:w-[574px] 3xl:h-[900px] object-cover"
        ></video>

        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="absolute inset-0 mb-[30px] flex items-end justify-center"
          >
            <Image
              alt="fef"
              width={200}
              height={90}
              src={textSrc}
              className="w-[110px] h-[50px] sm:w-[200px] sm:h-[40px] lg:w-[272px] lg:h-[60px] xl:w-[338px] xl:h-[80px] 2xl:w-[200px] 2xl:h-[40px] 3xl:w-[250px] 3xl:h-[60px]"
            />
          </motion.div>
        )}
      </motion.div>
    );
  };

  const items = [
    // <ImageWrapper key="slide-0" index={0} src="/img/slider/1.png" />,
    // <ImageWrapper key="slide-1" index={1} src="/img/slider/2.png" />,
    // <ImageWrapper key="slide-2" index={2} src="/img/slider/3.png" />,
    // <ImageWrapper key="slide-3" index={3} src="/img/slider/1.png" />,
    // <ImageWrapper key="slide-4" index={4} src="/img/slider/1.png" />,
    // <ImageWrapper key="slide-5" index={5} src="/img/slider/2.png" />,
    // <ImageWrapper key="slide-6" index={6} src="/img/slider/3.png" />,
    // <ImageWrapper key="slide-7" index={7} src="/img/slider/1.png" />,
    <VideoWrapper
      key="slide-0"
      textSrc="/img/slider/logitech/logitech.svg"
      index={0}
      isActive={currentIndex === 0}
      src={'/img/slider/logitech/logitech.mp4'}
    />,
    <VideoWrapper
      key="slide-1"
      textSrc="/img/slider/maxfactor/maxfactor.svg"
      index={1}
      isActive={currentIndex === 1}
      src={'/img/slider/maxfactor/maxfactor.mp4'}
    />,
    <VideoWrapper
      key="slide-2"
      textSrc="/img/slider/spotify/spotify.svg"
      index={2}
      isActive={currentIndex === 2}
      src={'/img/slider/spotify/spotify.mp4'}
    />,
    <VideoWrapper
      key="slide-3"
      textSrc="/img/slider/xiaomi/xiaomi.svg"
      index={3}
      isActive={currentIndex === 3}
      src={'/img/slider/xiaomi/xiaomi.mp4'}
    />,
  ];

  return (
    <div className="w-screen relative overflow-hidden">
      <div className="absolite left-[-50vw] w-[120vw]">
        <AnimatePresence>
          <Carousel
            showIndicators={false}
            showStatus={false}
            items={items}
            autoPlay={isPlaying}
            infiniteLoop
            pauseOnHover
            swipeable
            containerPadding="0px"
            defaultOption={{
              numOfSlides: carouselDimensions.numOfSlides,
              angleFactor: 0.5,
            }}
            containerWidth="100%"
            showArrows={false}
            width={carouselDimensions.width}
            height={carouselDimensions.height}
            onChange={(index) => {
              setCurrentIndex(index);
              setIsPlaying(!items[index].type.name.includes('Video'));
            }}
          />
        </AnimatePresence>
        {/* <SliderControls /> */}
      </div>
    </div>
  );
};

export default Slider;
