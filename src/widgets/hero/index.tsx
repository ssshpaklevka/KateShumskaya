'use client';
import type { FC } from 'react';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Roles from './roles';
import Heading from './heading';
import Stats from './stats';
import ContactManager from '../../features/contact-manager/contact-manager';

const Hero: FC = () => {
  return (
    <div className="h-screen">
      <Roles />
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Image
          alt=""
          src={'/img/hero/kate.png'}
          height={3000}
          width={3000}
          className="w-auto static md:absolute lg:static right-0 h-[63vh] lg:h-[70vh] sm:h-[68.2vh] md:h-screen mx-auto xl:h-screen xl:absolute"
        />
        {/* <Image
          alt=""
          src={'/img/hero/shadow.svg'}
          width={582}
          height={505}
          className="absolute right-[0px] -bottom-[140px] lg:hidden xl:block xl:w-[65vw] xl:-bottom-[200px] 3xl:-bottom-[400px]"
        /> */}
      </motion.div>
      <div className="bottom-[20px] left-0 absolute w-full px-[20px] md:h-[68vh] md:justify-between md:flex md:flex-col md:mb-[60px] lg:block lg:h-auto xl:flex xl:justify-between xl:w-full xl:h-[65vh]">
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
