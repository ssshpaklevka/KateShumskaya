// 'use client';
// import type { FC } from 'react';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// import Roles from './roles';
// import Heading from './heading';
// import Stats from './stats';
// import ContactManager from '../../features/contact-manager/contact-manager';

// const Hero: FC = () => {
//   const [fixedHeight, setFixedHeight] = useState(0);

//   useEffect(() => {
//     const handleResize = () => {
//       const height = window.innerHeight; // Получаем высоту окна
//       setFixedHeight(height - 50); // Устанавливаем фиксированное значение
//     };

//     handleResize(); // Устанавливаем высоту при первом рендере
//     window.addEventListener('resize', handleResize); // Добавляем обработчик события изменения размера

//     return () => {
//       window.removeEventListener('resize', handleResize); // Убираем обработчик при размонтировании
//     };
//   }, []);
//   return (
//     <div className={`h-[${fixedHeight}px]`}>
//       <Roles />
//       <motion.div
//         initial={{ scale: 1.2, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1, ease: 'easeOut' }}
//       >
//         <svg
//           className="hidden xl:block absolute xl:-bottom-[80px] xl:right-[560px] z-10 w-[449px] h-[144px] md:w-[222px] md:h-[450px] blur-[40px]"
//           viewBox="0 0 222 450"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <ellipse
//             cx="111"
//             cy="225"
//             rx="111"
//             ry="225"
//             fill="hsla(0, 0%, 0%, 1)"
//             transform="rotate(-10)"
//           />
//         </svg>

//         {/* Тень снизу */}
//         <svg
//           className="hidden xl:block absolute xl:-bottom-40 xl:right-14 z-10 w-[449px] h-[144px] md:w-[822px] md:h-[263px] blur-[70px]"
//           viewBox="0 0 822 263"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <ellipse
//             cx="411"
//             cy="131.5"
//             rx="411"
//             ry="131.5"
//             fill="hsla(0, 0%, 0%, 1)"
//           />
//         </svg>

//         <Image
//           alt=""
//           src={'/img/hero/kate.png'}
//           height={3000}
//           width={3000}
//           className="-z-10 w-auto static md:absolute lg:static right-0 h-[63vh] lg:h-[70vh] sm:h-[68.2vh] md:h-screen mx-auto xl:h-screen xl:absolute "
//         />
//         {/* <Image
//           alt=""
//           src={'/img/hero/shadow.svg'}
//           width={582}
//           height={505}
//           className="absolute right-[0px] -bottom-[140px] lg:hidden xl:block xl:w-[65vw] xl:-bottom-[200px] 3xl:-bottom-[400px]"
//         /> */}
//       </motion.div>
//       <div className="z-20 bottom-28 sm:bottom-0 left-0 absolute w-full px-[20px] md:h-[68vh] md:justify-between md:flex md:flex-col md:mb-[60px] lg:block lg:h-auto xl:flex xl:justify-between xl:w-full xl:h-[65vh]">
//         <Heading />
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between md:-mb-[60px] w-full lg:block xl:flex">
//           <Stats />
//           <ContactManager />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
'use client';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/src/shared/lib/utils';
import { Button } from '@/src/shared/components/ui/button';

const Hero: FC = () => {
  return (
    <div className="relative flex md:h-[490px] lg:h-[1400px] xl:h-[820px] 2xl:h-[880px] 3xl:h-[960px] overflow-hidden">
      {/* пк версия */}
      <div className="hidden sm:hidden md:flex lg:hidden xl:flex 2xl:flex 3xl:flex flex-col md:mt-[50px] mt-[80px] md:gap-[0px] xl:gap-[0px] 2xl:gap-[190px] 3xl:gap-[80px]">
        <div className="flex md:gap-[15px] xl:gap-[23px] 2xl:gap-[75px] 3xl:gap-[95px]">
          <p className="md:text-[14px] md:leading-[19px] xl:text-[24px] xl:leading-[33px] 2xl:text-[16px] 2xl:leading-[22px] 3xl:text-[21px] 3xl:leading-[30px] uppercase font-normal tracking-[10%]">
            ARTIST
          </p>
          <p className="md:text-[14px] md:leading-[19px] xl:text-[24px] xl:leading-[33px] 2xl:text-[16px] 2xl:leading-[22px] 3xl:text-[21px] 3xl:leading-[30px] uppercase font-normal tracking-[10%]">
            INFLUENCER
          </p>
          <p className="md:text-[14px] md:leading-[19px] xl:text-[24px] xl:leading-[33px] 2xl:text-[16px] 2xl:leading-[22px] 3xl:text-[21px] 3xl:leading-[30px] uppercase font-normal tracking-[10%]">
            MODEL
          </p>
          <p className="md:text-[14px] md:leading-[19px] xl:text-[24px] xl:leading-[33px] 2xl:text-[16px] 2xl:leading-[22px] 3xl:text-[21px] 3xl:leading-[30px] uppercase font-normal tracking-[10%]">
            ACTRESS
          </p>
        </div>
        <div className="z-40">
          <p className="md:text-[74px] md:leading-[74px] xl:text-[122px] xl:leading-[122px] md:mt-[50px] md:mb-[145px] xl:mt-[120px] xl:mb-[244px] 2xl:mt-[0px] 2xl:mb-[0px] 3xl:mb-[160px] 2xl:text-[151px] 2xl:leading-[151px] 3xl:text-[196px] 3xl:leading-[196px]">
            KATE <br /> SHUMSKAYA
          </p>
        </div>
        <div className="z-40 flex md:gap-[62px] xl:gap-[103px] 2xl:gap-[150px] 3xl:gap-[150px]">
          <div className="flex flex-col xl:gap-[13px] 2xl:gap-[23px] 3xl:gap-[10px]">
            <p className="md:text-[36px] md:leading-[50px] xl:text-[60px] xl:leading-[84px] 2xl:text-[51px] 2xl:leading-[71px] 3xl:text-[67px] 3xl:leading-[94px] font-light">
              18 million
            </p>
            <p className="md:text-[16px] md:leading-[22px] xl:text-[24px] xl:leading-[33px] 2xl:text-[16px] 2xl:leading-[22px] 3xl:text-[21px] 3xl:leading-[30px] font-normal">
              Amount of subscribes
            </p>
          </div>
          <div className="flex flex-col xl:gap-[13px] 2xl:gap-[23px] 3xl:gap-[10px]">
            <p className="md:text-[36px] md:leading-[50px] xl:text-[60px] xl:leading-[84px] 2xl:text-[51px] 2xl:leading-[71px] 3xl:text-[67px] 3xl:leading-[94px] font-light">
              110 million
            </p>
            <p className="md:text-[16px] md:leading-[22px] xl:text-[24px] xl:leading-[33px] 2xl:text-[16px] 2xl:leading-[22px] 3xl:text-[21px] 3xl:leading-[30px] font-normal">
              Views per mounth
            </p>
          </div>
        </div>
      </div>
      <div className="hidden sm:hidden md:flex lg:hidden xl:flex 2xl:flex 3xl:flex">
        {/* боковая тень */}
        <svg
          className="absolute md:right-[260px] md:-bottom-14 xl:-bottom-[50px] xl:right-[500px] 2xl:-bottom-36  2xl:right-[610px] 3xl:right-[690px] 3xl:-bottom-28 z-10 w-[449px] h-[144px] md:w-[222px] md:h-[400px] 2xl:w-[222px] 2xl:h-[560px] 3xl:w-[268px] 3xl:h-[700px] 3xl:blur-[30px] md:blur-[20px] xl:blur-[40px] 2xl:blur-[30px]"
          viewBox="0 0 268 700"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="134"
            cy="350"
            rx="134"
            ry="350"
            fill="hsla(0, 0%, 0%, 1)"
          />
        </svg>
        {/* кружок тень */}
        <svg
          className="absolute md:right-[250px] md:-bottom-10 xl:-bottom-[50px] xl:right-[500px] 2xl:right-[580px] 3xl:right-[610px] 2xl:-bottom-[60px] z-10 w-[449px] h-[144px] md:w-[120px] md:h-[120px] 3xl:w-[180px] 3xl:h-[180px] md:blur-[20px] xl:blur-[40px] 2xl:blur-[30px] 3xl:blur-[30px]"
          viewBox="0 0 180 180"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="90" cy="90" rx="90" ry="90" fill="hsla(0, 0%, 0%, 1)" />
        </svg>

        {/* Тень снизу */}
        <svg
          className="absolute md:-bottom-28 md:right-5 xl:-bottom-28 xl:right-0 2xl:right-48 2xl:-bottom-36 3xl:-bottom-48 3xl:right-36 z-10 w-[449px] h-[144px] md:w-[400px] md:h-[220px] 2xl:w-[500px] 2xl:h-[250px] 3xl:w-[800px] 3xl:h-[250px] md:blur-[30px] xl:blur-[50px] 2xl:blur-[30px] 3xl:blur-[20px]"
          viewBox="0 0 800 250"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="400"
            cy="125"
            rx="400"
            ry="125"
            fill="hsla(0, 0%, 0%, 1)"
          />
        </svg>
        <Image
          alt=""
          src={'/img/hero/kate.png'}
          height={3000}
          width={3000}
          className="-z-10 w-auto static md:absolute right-0 md:h-[520px] xl:h-[920px] 2xl:h-[1100px] 3xl:h-[1200px] 3xl:-bottom-44"
        />
        {/* <Button className="w-full md:w-fit lg:w-full xl:w-fit hidden sm:hidden md:block lg:hidden xl:block 2xl:block 3xl:block absolute bottom-0 right-0 md:mb-[20px] xl:mb-[30px] 2xl:mb-[40px] md:mr-[20px] xl:mr-[30px] 2xl:mr-[40px]">
          Contact the manager
        </Button> */}
        <div className="z-40 mt-[34px] md:!w-fit lg:!w-full xl:!w-fit overflow-hidden mx-auto md:mx-0 xl:mx-0 lg:mx-auto">
          <div className="w-full md:w-fit lg:w-full xl:w-fit">
            <Button
              className="w-full md:w-fit lg:w-full xl:w-fit hidden sm:hidden md:block lg:hidden xl:block 2xl:block 3xl:block absolute bottom-6 right-6"
              onClick={() => {
                const formElement = document.getElementById('contact-form');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact the manager
            </Button>
          </div>
        </div>
      </div>

      {/* моб версия */}
      <div className="hidden sm:block md:hidden lg:block xl:hidden 2xl:hidden 3xl:hidden relative flex-col w-full">
        <div className="flex items-center">
          <div className="absolute pb-[90px] sm:pb-[120px] sm:pl-[40px] lg:pb-[220px] lg:pl-[60px] z-10">
            <div className="flex flex-col gap-[17px] sm:gap-[30px] lg:gap-[43px]">
              <p className="text-[8px] leading-[11px] sm:text-[14px] sm:leading-[19.6px] lg:text-[20px] lg:leading-[28px]">
                ARTIST
              </p>
              <p className="text-[8px] leading-[11px] sm:text-[14px] sm:leading-[19.6px] lg:text-[20px] lg:leading-[28px]">
                MODEL
              </p>
              <p className="text-[8px] leading-[11px] sm:text-[14px] sm:leading-[19.6px] lg:text-[20px] lg:leading-[28px]">
                INFLUENCER
              </p>
              <p className="text-[8px] leading-[11px] sm:text-[14px] sm:leading-[19.6px] lg:text-[20px] lg:leading-[28px]">
                ACTRESS
              </p>
            </div>
          </div>

          <div className="flex justify-center relative w-full">
            <Image
              src={'/img/hero/kate.png'}
              alt="kate"
              width={3000}
              height={3000}
              className="object-contain w-[235px] h-[360px] sm:w-[393px] sm:h-[520px] lg:w-full lg:h-screen"
            />
            <p
              className={cn(
                'text-[clamp(50px,14vw,97px)] leading-[1] sm:text-[97px] sm:leading-[97px] lg:text-[140px] lg:leading-[140px] absolute -bottom-14 sm:-bottom-28 lg:-bottom-40 pl-[0px] sm:pl-[60px]',
                'medium',
              )}
            >
              KATE SHUMSKAYA
            </p>
          </div>
        </div>

        <div className="mt-[90px] sm:mt-[150px] flex flex-col gap-8 pl-[0px] pr-[0px] sm:pl-[60px] ">
          <div className="flex mt-[10px] sm:mt-[40px] lg:mt-[60px] gap-[60px] sm:gap-[104px] lg:gap-[200px]">
            <div className="flex flex-col gap-[7px] sm:gap-[12px] lg:gap-[17px]">
              <p
                className={cn(
                  'text-[28px] leading-[40px] sm:text-[48px] sm:leading-[67px] lg:text-[69px] lg:leading-[96px]',
                  'font-light',
                )}
              >
                18 million
              </p>
              <p className="text-[10px] leading-[14px] sm:text-[16px] sm:leading-[22px] lg:text-[24px] lg:leading-[33px]">
                Amount of subscribers
              </p>
            </div>
            <div className="flex flex-col gap-[7px] sm:gap-[12px] lg:gap-[17px]">
              <p
                className={cn(
                  'text-[28px] leading-[40px] sm:text-[48px] sm:leading-[67px] lg:text-[69px] lg:leading-[96px]',
                  'font-light',
                )}
              >
                110 million
              </p>
              <p className="text-[10px] leading-[14px] sm:text-[16px] sm:leading-[22px] lg:text-[24px] lg:leading-[33px]">
                View per mounth
              </p>
            </div>
          </div>

          <div className="max-w-[calc(100%-40px)] sm:max-w-[calc(100%-120px)]">
            <Button
              size={'default'}
              className="w-full"
              onClick={() => {
                const formElement = document.getElementById('contact-form');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact the manager
            </Button>
          </div>
        </div>
      </div>

      {/* моб версия меньше sm */}
      <div className="block sm:hidden relative flex-col w-full">
        <div className="flex items-center">
          <div className="absolute top-[185px] px-[30px] z-50 w-full mix-blend-difference">
            <div className="flex justify-between gap-[17px] sm:gap-[30px] lg:gap-[43px]">
              <p className="text-[10px] leading-[11px] sm:text-[14px] sm:leading-[19.6px] lg:text-[20px] lg:leading-[28px]">
                ARTIST
              </p>
              <p className="text-[10px] leading-[11px] sm:text-[14px] sm:leading-[19.6px] lg:text-[20px] lg:leading-[28px]">
                MODEL
              </p>
              <p className="text-[10px] leading-[11px] sm:text-[14px] sm:leading-[19.6px] lg:text-[20px] lg:leading-[28px]">
                INFLUENCER
              </p>
              <p className="text-[10px] leading-[11px] sm:text-[14px] sm:leading-[19.6px] lg:text-[20px] lg:leading-[28px]">
                ACTRESS
              </p>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <Image
              src={'/img/hero/Group 1437256246_11zon.webp'}
              alt="kate"
              width={3000}
              height={3000}
              className="object-contain w-[100%] h-[100%] sm:w-[393px] sm:h-[520px] lg:w-full lg:h-screen "
            />
            <p
              className={cn(
                'mix-blend-difference text-center bottom-auto top-[35px] text-[clamp(50px,14vw,97px)] leading-[1] sm:text-[97px] sm:leading-[97px] lg:text-[140px] lg:leading-[140px] absolute pl-[0px] sm:pl-[60px]',
                'medium',
              )}
            >
              KATE SHUMSKAYA
            </p>
          </div>
        </div>

        <div className="absolute w-full b-0 top-[125vw] z-50 flex flex-col gap-8]">
          <div className="flex mt-[10px] max-[320px]:mb-[3vw] sm:mt-[40px] lg:mt-[60px] gap-[60px] sm:gap-[104px] lg:gap-[200px] pl-[26px] mb-[6vw]">
            <div className="flex flex-col">
              <p
                className={cn(
                  'text-[28px] max-[320px]:text-[20px] leading-[40px] sm:text-[48px] sm:leading-[67px] lg:text-[69px] lg:leading-[96px] ',
                  'font-light',
                )}
              >
                18 million
              </p>
              <p className="text-[10px] max-[320px]:text-[7px] leading-[14px] sm:text-[16px] sm:leading-[22px] lg:text-[24px] lg:leading-[33px]">
                Amount of subscribers
              </p>
            </div>
            <div className="flex flex-col">
              <p
                className={cn(
                  'text-[28px] max-[320px]:text-[20px] leading-[40px] sm:text-[48px] sm:leading-[67px] lg:text-[69px] lg:leading-[96px]',
                  'font-light',
                )}
              >
                110 million
              </p>
              <p className="text-[10px] max-[320px]:text-[7px] leading-[14px] sm:text-[16px] sm:leading-[22px] lg:text-[24px] lg:leading-[33px]">
                View per mounth
              </p>
            </div>
          </div>

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              type: 'spring',
              stiffness: 50,
            }}
            className=""
          >
            <Button
              size={'default'}
              className="w-full p-0 text-[15px]"
              variant={'link'}
              onClick={() => {
                const formElement = document.getElementById('contact-form');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact the manager
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
