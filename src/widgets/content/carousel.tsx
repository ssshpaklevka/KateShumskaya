'use client';
import type { FC } from 'react';
import React, { useState } from 'react';
import Marquee from 'react-simple-marquee';
import Link from 'next/link';

import CustomCursor from '@/src/shared/ui/custom-cursor/CustomCursor';
const CONTENT = [
  {
    image: '/img/carousel/image.webp',
  },
  {
    image: '/img/carousel/image1.webp',
  },
  {
    image: '/img/carousel/image2.webp',
  },
  {
    image: '/img/carousel/image3.webp',
  },
  {
    image: '/img/carousel/image4.webp',
  },
  {
    image: '/img/carousel/image5.webp',
  },
  {
    image: '/img/carousel/image6.webp',
  },
];
const Carousel: FC = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link
      href={'https://www.instagram.com/mimisskate?igsh=MTlldzF1ejZ3MW5mdw=='}
    >
      <div className="relative min-h-[280px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[720px] xl:min-h-[900px] 2xl:min-h-[590px] 3xl:min-h-[710px]  flex items-center justify-center">
        <CustomCursor isVisible={isHovering} text="look" />

        {/* Градиенты */}
        <div className="absolute left-0 top-0 h-full w-[50px] z-30 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute right-0 top-0 h-full w-[50px] z-30 bg-gradient-to-l from-black to-transparent" />

        <Marquee
          className="mt-[10px] h-[260px] sm:h-[436px] md:h-[513px] lg:h-[698px] xl:h-[872px] 2xl:h-[547px] 3xl:h-[684px] flex flex-row items-center"
          style={{
            marginTop: '10px',
          }}
          velocity={0.05}
          speed={0.8}
        >
          {[...CONTENT, ...CONTENT].map((item, index) => (
            <div
              key={index}
              className="relative group mr-[6px] sm:mr-[10px] md:mr-[12px] lg:mr-[16px] xl:mr-[20px] 2xl:mr-[16px] 3xl:mr-[20px]"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={{ cursor: 'none' }}
            >
              {/* Невидимая область для ховера */}
              <div className="absolute h-[260px] w-[162px] sm:h-[436px] sm:w-[270px] md:h-[513px] md:w-[318px] lg:h-[698px] lg:w-[432px] xl:h-[872px] xl:w-[540px] 2xl:h-[547px] 2xl:w-[340px] 3xl:h-[684px] 3xl:w-[424px] z-20" />

              {/* Изображение с grayscale */}
              <div
                className="h-[112px] w-[75px] sm:h-[186px] sm:w-[125px] md:h-[220px] md:w-[147px] lg:h-[298px] lg:w-[200px] xl:h-[372px] xl:w-[250px] 2xl:h-[240px] 2xl:w-[166px] 3xl:h-[300px] 3xl:w-[208px] transition-all duration-300 
                group-hover:h-[260px] group-hover:w-[162px] sm:group-hover:h-[436px] sm:group-hover:w-[270px] md:group-hover:h-[513px] md:group-hover:w-[318px] lg:group-hover:h-[698px] lg:group-hover:w-[432px] xl:group-hover:h-[872px] xl:group-hover:w-[540px] 2xl:group-hover:h-[547px] 2xl:group-hover:w-[340px] 3xl:group-hover:h-[684px] 3xl:group-hover:w-[424px]
                bg-white ml-4 bg-cover bg-center grayscale 
                group-hover:grayscale-0"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Текст */}
              {/* <div
              className="z-10 absolute text-nowrap left-[190px] sm:left-[300px] md:left-[360px] lg:left-[480px] xl:left-[580px] 2xl:left-[400px] 3xl:left-[460px] top-0 
              flex flex-col gap-[6px] sm:gap-[10px] opacity-0 transition-opacity 
              duration-300 group-hover:opacity-100 pointer-events-none"
            >
              <h3 className="text-[24px] leading-[34px] sm:text-[36px] sm:leading-[50px] md:text-[42px] md:leading-[58px] lg:text-[56px] lg:leading-[78px] xl:text-[72px] xl:leading-[100px] 2xl:text-[38px] 2xl:leading-[52px] 3xl:text-[51px] 3xl:leading-[71px] font-medium">
                {item.title}
              </h3>
              <p className="text-[14px] leading-[20px] sm:text-[24px] sm:leading-[33px] md:text-[24px] md:leading-[33px] lg:text-[36px] lg:leading-[50px] xl:text-[48px] xl:leading-[67px] 2xl:text-[16px] 2xl:leading-[22px] 3xl:text-[28px] 3xl:leading-[40px] font-light">
                {item.description}
              </p>
            </div> */}
            </div>
          ))}
        </Marquee>
      </div>
    </Link>
  );
};

export default Carousel;
