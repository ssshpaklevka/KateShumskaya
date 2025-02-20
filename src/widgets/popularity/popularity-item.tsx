'use client';
import type { FC } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import { cn } from '@/src/shared/lib/utils';

interface Props {
  number: number;
  symbol: string;
  description: {
    default: React.JSX.Element;
    desktop: string | React.JSX.Element;
  };
  subtitle: React.JSX.Element;
  iconSrc: string; // Добавьте это
}

const PopularityItem: FC<Props> = ({
  description,
  number,
  subtitle,
  symbol,
  iconSrc,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      {/* до 2xl */}
      <div className="flex flex-col gap-[5px] 2xl:hidden mb-[12px]">
        <motion.h3
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="text-[94px] leading-[94px] sm:text-[158px] sm:leading-[158px] lg:text-[206px] lg:leading-[206px] font-medium tracking-[-3px]"
        >
          {number} <span className="font-light">{symbol}</span>
        </motion.h3>

        <div className="w-full flex items-center">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="h-px bg-white w-full transform origin-right"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-[32px] h-[32px] sm:w-[54px] sm:h-[54px] lg:w-[72px] lg:h-[72px] p-[6px] border border-white"
          >
            <div className="bg-white text-black w-[18px] h-[18px] sm:w-[40px] sm:h-[40px] lg:w-[58px] lg:h-[58px] p-[2px] flex items-center justify-center">
              <Image
                className="w-[14px] h-[14px] sm:w-[26px] sm:h-[26px] lg:w-[34px] lg:h-[34px] 2xl:w-[26px] 2xl:h-[17px]"
                src={iconSrc}
                alt="icon"
                width={20}
                height={20}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="flex flex-row w-full justify-between items-end"
        >
          <p className="max-w-1/2 font-medium text-[24px] leading-[21px] sm:text-[48px] sm:leading-[43px] lg:text-[64px] lg:leading-[57px] text-wrap">
            <span className="2xl:hidden">{description.default}</span>
            <span className="hidden 2xl:inline">{description.desktop}</span>
          </p>
          <p className="max-w-1/2 font-light text-[10px] leading-[14px] sm:text-[16px] sm:leading-[22px] lg:text-[24px] lg:leading-[33px] text-wrap">
            {subtitle}
          </p>
        </motion.div>
      </div>

      {/* 2xl */}
      <div className="hidden 2xl:flex 2xl:flex-col 2xl:h-full 2xl:gap-[20px]">
        <div className="flex flex-row justify-between items-center">
          <motion.h3
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className={cn(
              'text-[158px] leading-[158px] 3xl:text-[213px] 3xl:leading-[213px] font-medium tracking-[-3px]',
              number === 17 ? 'ml-[20%]' : 'ml-[1%]',
            )}
          >
            {number} <span className="font-light">{symbol}</span>
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="flex flex-col gap-[20px]"
          >
            <p className="font-medium text-[36px] leading-[50px] 3xl:text-[51px] 3xl:leading-[71px] text-wrap">
              <span className="2xl:hidden">{description.default}</span>
              <span className="hidden 2xl:inline">{description.desktop}</span>
            </p>
            <p className="font-light text-[16px] leading-[22px] 3xl:text-[28px] 3xl:leading-[39px] text-wrap mr-[410px]">
              {subtitle}
            </p>
          </motion.div>
        </div>

        <div className="w-full flex items-center">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className={cn(
              'h-px bg-white w-full transform origin-right',
              number === 17 ? 'ml-[20%]' : 'ml-[0%]',
            )}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-[72px] h-[72px] p-[6px] border border-white"
          >
            <div className="bg-white text-black w-[58px] h-[58px] p-[2px] flex items-center justify-center">
              {/* <Icon className="w-[54px] h-[54px]" fill="black" stroke="white" /> */}
              <Image
                className="2xl:w-[34px] 2xl:h-[34px] 3xl:w-[44px] 3xl:h-[44px]"
                src={iconSrc}
                alt="icon"
                width={20}
                height={20}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PopularityItem;
