'use client';
import type { FC } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

import { Button } from '@/src/shared/components/ui/button';

const ContactManager: FC = () => {
  return (
    <motion.div
      initial={{ width: '0%' }}
      animate={{ width: '100%' }}
      transition={{
        duration: 0.8,
        delay: 0.6,
        ease: [0.76, 0, 0.24, 1], // custom easing
      }}
      className="mt-[34px] md:!w-fit lg:!w-full xl:!w-fit overflow-hidden mx-auto md:mx-0 xl:mx-0 lg:mx-auto"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full md:w-fit lg:w-full xl:w-fit"
      >
        <Button className="w-full md:w-fit lg:w-full xl:w-fit">
          Contact the manager
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default ContactManager;
