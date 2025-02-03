'use client';
import type { LucideProps } from 'lucide-react';
import type { FC } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  number: number;
  symbol: string;
  description: React.JSX.Element;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  subtitle: React.JSX.Element;
}

const PopularityItem: FC<Props> = ({
  description,
  icon: Icon,
  number,
  subtitle,
  symbol,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="flex flex-col gap-[5px]">
      <motion.h3
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        className="text-[94px] font-medium leading-[94px] tracking-[-3px]"
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
          className="!w-[32px] !h-[32px] p-[6px] border border-white"
        >
          <div className="bg-white text-black !w-[18px] !h-[18px] p-[2px]">
            <Icon className="w-[14px] h-[14px]" fill="black" stroke="white" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="flex flex-row w-full justify-between items-end"
      >
        <p className="max-w-1/2 font-medium text-[24px] leading-[21px] text-wrap h-[45px]">
          {description}
        </p>
        <p className="max-w-1/2 font-light text-[10px] leading-[14px] text-wrap">
          {subtitle}
        </p>
      </motion.div>
    </div>
  );
};

export default PopularityItem;
