'use client';
import type { FC } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

const ROLES_LIST = [
  {
    title: 'Artist',
  },
  {
    title: 'Model',
  },
  {
    title: 'Influencer',
  },
  {
    title: 'Actress',
  },
];
const Roles: FC = () => {
  return (
    <div className="flex flex-col max-h-none md:max-h-[60px] max-w-none md:max-w-[170px] flex-wrap gap-[18px] md:gap-[14px] lg:max-w-[142px] lg:max-h-full xl:gap-[23px] xl:max-w-[290px] xl:max-h-[120px] top-[15vh] md:top-[58px] lg:top-[25vh] xl:top-[35px] absolute">
      {ROLES_LIST.map((item, index) => (
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-[8px] sm:text-[14px] sm:leading-[20px] lg:text-[20px] lg:leading-[28px] xl:text-[24px] xl:leading-[33.6px] 2xl:text-[16px] 2xl:leading-[22.4px] 3xl:text-[21px] 3xl:leading-[30px] uppercase font-normal leading-[11px] tracking-[10%]"
          key={index}
        >
          {item.title}
        </motion.p>
      ))}
    </div>
  );
};

export default Roles;
