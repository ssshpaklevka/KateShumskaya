'use client';
import type { FC } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  description: string;
}
const StatsItem: FC<Props> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col w-1/2 gap-1 text-nowrap"
    >
      <h3 className="text-[28px] sm:text-[48px] sm:leading-[67px] md:text-[36px] md:leading-[50px] lg:text-[69px] lg:leading-[96px] xl:text-[60px] xl:leading-[84px] 2xl:text-[51px] 2xl:leading-[71.5px] 3xl:text-[67px] 3xl:leading-[94px]  font-light leading-[40px]">
        {title}
      </h3>
      <p className="sm:text-[16px] sm:leading-[22.5px] md:text-[16px] md:leading-[22.5px] lg:text-[24px] lg:leading-[34px] xl:text-[24px] xl:leading-[34px] 2xl:text-[16px] 2xl:leading-[22.5px] 3xl:text-[21px] 3xl:leading-[30px] text-[10px] leading-[14px] font-normal">
        {description}
      </p>
    </motion.div>
  );
};

export default StatsItem;
