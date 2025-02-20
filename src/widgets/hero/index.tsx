'use client';
import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Roles from './roles';
import Heading from './heading';
import Stats from './stats';
import ContactManager from '../../features/contact-manager/contact-manager';

const Hero: FC = () => {
  const [fixedHeight, setFixedHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight; // Получаем высоту окна
      setFixedHeight(height - 50); // Устанавливаем фиксированное значение
    };

    handleResize(); // Устанавливаем высоту при первом рендере
    window.addEventListener('resize', handleResize); // Добавляем обработчик события изменения размера

    return () => {
      window.removeEventListener('resize', handleResize); // Убираем обработчик при размонтировании
    };
  }, []);
  return (
    <div className={`h-[${fixedHeight}px]`}>
      <Roles />
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <svg
          className="hidden xl:block absolute xl:-bottom-[80px] xl:right-[560px] z-10 w-[449px] h-[144px] md:w-[222px] md:h-[450px] blur-[40px]"
          viewBox="0 0 222 450"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="111"
            cy="225"
            rx="111"
            ry="225"
            fill="hsla(0, 0%, 0%, 1)"
            transform="rotate(-10)"
          />
        </svg>

        {/* Тень снизу */}
        <svg
          className="hidden xl:block absolute xl:-bottom-40 xl:right-14 z-10 w-[449px] h-[144px] md:w-[822px] md:h-[263px] blur-[70px]"
          viewBox="0 0 822 263"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="411"
            cy="131.5"
            rx="411"
            ry="131.5"
            fill="hsla(0, 0%, 0%, 1)"
          />
        </svg>

        <Image
          alt=""
          src={'/img/hero/kate.png'}
          height={3000}
          width={3000}
          className="-z-10 w-auto static md:absolute lg:static right-0 h-[63vh] lg:h-[70vh] sm:h-[68.2vh] md:h-screen mx-auto xl:h-screen xl:absolute "
        />
        {/* <Image
          alt=""
          src={'/img/hero/shadow.svg'}
          width={582}
          height={505}
          className="absolute right-[0px] -bottom-[140px] lg:hidden xl:block xl:w-[65vw] xl:-bottom-[200px] 3xl:-bottom-[400px]"
        /> */}
      </motion.div>
      <div className="z-20 bottom-28 sm:bottom-0 left-0 absolute w-full px-[20px] md:h-[68vh] md:justify-between md:flex md:flex-col md:mb-[60px] lg:block lg:h-auto xl:flex xl:justify-between xl:w-full xl:h-[65vh]">
        <Heading />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:-mb-[60px] w-full lg:block xl:flex">
          <Stats />
          <ContactManager />
        </div>
      </div>
    </div>
  );
};

export default Hero;
