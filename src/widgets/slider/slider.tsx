'use client';
import Image from 'next/image';
import type { FC } from 'react';
import React, { useState, useContext } from 'react';
import { Carousel, CarouselContext } from 'react-responsive-3d-carousel';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-responsive-3d-carousel/dist/styles.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SliderControls = () => {
  const { slideNext, slidePrev } = useContext(CarouselContext);

  return (
    <div className="w-full gap-[65px] mt-[36px] absolute justify-center flex items-center">
      <ChevronLeft
        className="size-[42px] cursor-pointer"
        strokeWidth={0.5}
        onClick={slidePrev}
      />
      <ChevronRight
        className="size-[42px] cursor-pointer"
        strokeWidth={0.5}
        onClick={slideNext}
      />
    </div>
  );
};

const Slider: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ImageWrapper = ({ index, src }: { index: number; src: string }) => (
    <motion.div
      initial={{ filter: 'grayscale(100%)' }}
      animate={{
        filter: currentIndex === index ? 'grayscale(0%)' : 'grayscale(100%)',
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <Image width={210} height={329} alt="" src={src} />
    </motion.div>
  );

  const items = [
    <ImageWrapper key="sliderImage1" index={0} src="/img/slider/1.png" />,
    <ImageWrapper key="sliderImage2" index={1} src="/img/slider/2.png" />,
    <ImageWrapper key="sliderImage3" index={2} src="/img/slider/3.png" />,
  ];

  return (
    <div className="w-screen relative overflow-hidden">
      <div className="absolite left-[-50vw] w-[120vw]">
        <AnimatePresence>
          <Carousel
            showIndicators={false}
            showStatus={false}
            items={items}
            autoPlay
            infiniteLoop
            pauseOnHover
            swipeable
            containerPadding="0px"
            defaultOption={{
              numOfSlides: 3,
              angleFactor: 0.5,
            }}
            containerWidth="200vw"
            showArrows={false}
            width="210px"
            height={'329px'}
            onChange={(index) => setCurrentIndex(index)}
          />
        </AnimatePresence>
        <SliderControls />
      </div>
    </div>
  );
};

export default Slider;
