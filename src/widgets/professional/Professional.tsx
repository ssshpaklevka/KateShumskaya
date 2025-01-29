'use client';
import type { FC } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { cn } from '@/src/shared/lib/utils';
import { Button } from '@/src/shared/components/ui/button';

const Professional: FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeInVariants}
        transition={{ duration: 1.5 }}
        className="absolute left-0 w-full h-screen bg-cover bg-center flex items-end"
        style={{
          backgroundImage: 'url(/img/professional/kate.png)',
        }}
      >
        <div className="flex px-[40px] flex-col gap-[87px]">
          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2, duration: 1 }}
            className={cn('text-[24px] leading-[24px]', 'light')}
          >
            KATE SHUMSKAYA
          </motion.p>

          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-[-50px]">
              <div>
                {['PROFESSIONAL', 'CONTENT', 'CREATOR AND', 'INFLUENCER'].map(
                  (text, index) => (
                    <motion.p
                      key={text}
                      variants={fadeUpVariants}
                      initial="hidden"
                      animate={inView ? 'visible' : 'hidden'}
                      transition={{ delay: 0.4 + index * 0.2, duration: 1 }}
                      className={`text-[64px] leading-[64px] ${
                        text === 'INFLUENCER' ? 'text-end' : ''
                      }`}
                    >
                      {text}
                    </motion.p>
                  ),
                )}
              </div>

              <div className="relative w-[150px] h-[150px] animate-spin-slow -ml-[100px] overflow-hidden">
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
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="h-screen" />

      <motion.p
        variants={fadeUpVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ delay: 0.6, duration: 1 }}
        className="w-[430px] mt-[72px] mb-[72px] ml-[90px] text-[16px] leading-[22px]"
      >
        Katya became known around the world thanks to her striking resemblance
        to Scarlett Johansson, captivating millions with her unique content
      </motion.p>

      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <Button
          variant={'default'}
          className="w-full bg-transparent text-white border border-white"
        >
          Contact the manager
        </Button>
      </motion.div>
    </div>
  );
};

export default Professional;
