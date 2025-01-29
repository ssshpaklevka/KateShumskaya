/* eslint-disable react/no-unescaped-entities */
'use client';
import type { FC } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Popularity: FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="flex flex-col gap-[82px]">
      <div className="flex flex-col gap-[30px]">
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-[158px] leading-[128px] medium"
        >
          110<span className="light">M</span>
        </motion.p>

        {/* SVG иконка и линия */}
        <div className="w-full flex items-center">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-[2px] bg-white transform origin-right flex-grow"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={'/img/social/glaz.svg'}
              alt="popularity"
              width={50}
              height={50}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-between "
        >
          <p className="text-[48px] leading-[44px] medium">Views per month</p>
          <p className="text-[16px] leading-[22px] max-w-[236px] light">
            That's 153 thousand views per hour or 2,546 views per minute
          </p>
        </motion.div>
      </div>
      {/* PERCENTAGE */}
      <div className="flex flex-col gap-[30px]">
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-[158px] leading-[128px] medium"
        >
          17<span className="light">%</span>
        </motion.p>

        {/* SVG иконка и линия */}
        <div className="w-full flex items-center">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-[2px] bg-white transform origin-right flex-grow"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={'/img/social/percentage.svg'}
              alt="percentage"
              width={50}
              height={50}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-between "
        >
          <p className="text-[48px] leading-[44px] medium">
            Average level of engagement
          </p>
          <p className="text-[16px] leading-[22px] max-w-[236px] light">
            Above industry average
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Popularity;
