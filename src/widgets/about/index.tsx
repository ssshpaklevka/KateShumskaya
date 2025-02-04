'use client';
import type { FC } from 'react';
import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

import { Button } from '@/src/shared/components/ui/button';

const About: FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // amount определяет, какая часть элемента должна быть видима

  const headingVariants = {
    initial: { x: -100, opacity: 0 },
    animate: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative h-screen"
    >
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={
          isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }
        }
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Image
          alt=""
          src={'/img/professional/kate.png'}
          width={3000}
          height={3000}
          className="md:w-auto md:h-screen 2xl:w-auto 2xl:h-screen lg:w-screen lg:h-auto xl:w-[60vw] xl:-left-[200px] xl:bottom-[0px] xl:absolute mb-[20px] lg:static md:absolute  md:-left-[100px] md:bottom-[0px]"
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        className="absolute px-[20px] bottom-[20px] 2xl:max-w-[560px] 3xl:max-w-[900px]  3xl:right-[5vw] 2xl:right-[20vw] 2xl:top-[20vh]  w-full z-30 left-0 md:right-[20px]  md:left-auto md:max-w-[490px] lg:w-full lg:max-w-full lg:right-none lg:left-0  xl:right-[20px]   xl:left-auto xl:max-w-[933px]"
      >
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase text-[14px] font-light sm:text-[24px] lg:text-[36px] xl:text-[40px] 2xl:text-[24px] 3xl:text-[33px] max-w-[400px]"
        >
          Kate Shumskaya
        </motion.p>

        <div className="max-w-[335px] sm:max-w-[562px] lg:max-w-[825px] relative mt-[40px] sm:text-[64px] flex flex-col w-full gap-[2px] uppercase text-[40px] leading-[100%] md:text-[64px] lg:text-[92px] xl:text-[104px] 2xl:text-[64px] 3xl:text-[90px]">
          <h2 className="sr-only">
            Professional content creator and influencer
          </h2>
          {['Professional', 'content', 'creator and'].map((text, index) => (
            <motion.h2
              key={index}
              custom={index}
              variants={headingVariants}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
            >
              {text}
            </motion.h2>
          ))}

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute z-[-1] bg-black blur-md size-20 rounded-full right-[20px] bottom-[40px] sm:right-[90px] sm:bottom-[60px] md:-right-[25px] lg:size-[120px] lg:right-[140px] lg:bottom-[90px] xl:right-[60px] xl:bottom-[110px] 2xl:bottom-[42px] 2xl:right-[40px] 3xl:right-[160px] 3xl:bottom-[80px]"
          />

          <motion.div
            initial={{ rotate: 0, opacity: 0 }}
            animate={
              isInView ? { rotate: 360, opacity: 1 } : { rotate: 0, opacity: 0 }
            }
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              opacity: { duration: 0.5 },
            }}
            className="absolute z-[-2] right-[0px] sm: overflow-hidden bottom-[50px] sm:bottom-[80px] sm:right-[70px] w-[90px] h-[90px] md:-right-[35px] lg:size-[150px] lg:right-[100px] lg:bottom-[125px] xl:right-[20px] 2xl:bottom-[50px] 2xl:right-[5px] 3xl:right-[130px] 3xl:bottom-[90px]"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="circlePath"
                d="M 50,50 m -25,0 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0"
                fill="none"
              />
              <text className="text-[11px] fill-white">
                <textPath href="#circlePath">
                  artist model influencer actress
                </textPath>
              </text>
            </svg>
          </motion.div>

          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-right w-full italic"
          >
            influencer
          </motion.h2>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-full justify-end flex"
        >
          <p className="text-[10px] mr-[20px] font-light leading-[14px] lg:mr-0  mt-[40px] max-w-[245px] sm:text-[16px] sm:leading-[22.5px] md:text-[16px] md:leading-[22.5px] lg:text-[24px] lg:leading-[34px] xl:text-[24px] xl:leading-[34px] 2xl:text-[16px] 2xl:leading-[22.5px] 3xl:text-[21px] 3xl:leading-[30px] sm:max-w-[415px] md:max-w-[343px] lg:max-w-[609px] xl:max-w-[572px] 2xl:max-w-[344px] 3xl:max-w-[477px]">
            Katya became known around the world thanks to her striking
            resemblance to Scarlett Johansson, captivating millions with her{' '}
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="font-medium italic"
            >
              unique content
            </motion.span>
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.4,
            ease: [0.76, 0, 0.24, 1],
          }}
          style={{ originX: 0.5 }}
          className="mt-[42px]"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="w-full md:w-[305px] lg:w-full"
              variant={'outline'}
            >
              Contact the manager
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
