'use client';
import type { FC } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

const Heading: FC = () => {
  return (
    <motion.h1
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="leading-[calc(13vw)] heading md:leading-[72px] lg:leading-[13vw] xl:leading-[8vw] tracking-[-0.2vw] font-medium "
    >
      <motion.span
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        KATE
      </motion.span>
      <br />
      <motion.span
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        SHUMSKAYA
      </motion.span>
    </motion.h1>
  );
};

export default Heading;
