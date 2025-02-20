'use client';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

import { Button } from '@/src/shared/components/ui/button';
import { cn } from '@/src/shared/lib/utils';

interface Props {
  network: string;
  iconBlack: FC;
  iconWhite: FC;
  subscribers: string;
  link: string;
  symbol: string;
  index: number;
}

const SocialItem: FC<Props> = ({
  iconBlack: IconBlack,
  iconWhite: IconWhite,
  link,
  index,
  network,
  symbol,
  subscribers,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn('2xl:contents', index === 2 && '2xl:col-span-2')}
    >
      <Link
        href={link}
        className={cn(
          'block',
          index === 2 && '2xl:col-span-2 2xl:border-b 2xl:border-white',
          '2xl:border-white 2xl:border-t ',
        )}
      >
        <motion.div
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className={cn(
            'group',
            'text-black bg-white w-full min-w-1/2 aspect-square xl:aspect-video justify-between flex flex-col p-[20px] sm:p-[40px] lg:p-[60px] xl:p-[82px]',
            'h-[378px]',
            'sm:h-[634px]',
            'lg:h-[1014px]',
            'xl:h-[633px] 2xl:h-[758px] 3xl:h-[1019px]',
            index === 2 && '2xl:h-[400px]',
            index === 2 &&
              '2xl:flex 2xl:flex-row 2xl:justify-between 2xl:items-center',
            // TikTok - всегда черный
            index === 0 && [
              '2xl:bg-black 2xl:text-white',
              '2xl:hover:bg-black 2xl:hover:text-white', // Блок всегда остается черным
            ],
            // Instagram - всегда белый
            index === 1 && [
              '2xl:bg-white 2xl:text-black',
              '2xl:hover:bg-white 2xl:hover:text-black', // Блок всегда остается белым
            ],
            // YouTube - всегда черный
            index === 2 && [
              '2xl:h-[255px] 3xl:h-[344px]',

              '2xl:bg-black 2xl:text-white',
              '2xl:hover:bg-black 2xl:hover:text-white', // Блок всегда остается черным
            ],
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={cn(
              'flex justify-between items-center',
              index === 2 && 'gap-[60px] items-center',
            )}
          >
            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[24px] sm:text-[42px] lg:text-[64px] xl:text-[80px] 2xl:text-[48px] 3xl:text-[67px] font-normal"
            >
              {network}
            </motion.p>
            <motion.div
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="2xl:hidden">
                <IconBlack />
              </div>

              <div className="hidden 2xl:block">
                {index === 0 ? (
                  // TikTok - всегда белая иконка
                  <IconWhite />
                ) : index === 1 ? (
                  // Instagram - всегда черная иконка
                  <IconBlack />
                ) : (
                  // YouTube - всегда белая иконка
                  <IconWhite />
                )}
              </div>
            </motion.div>
          </motion.div>

          <div className="flex flex-col gap-[24px] xl:flex-row xl:justify-between xl:items-end max-w-[250px] sm:max-w-[415px] lg:max-w-[666px] xl:max-w-full 2xl:gap-[60px]">
            <div
              className={cn(
                'flex flex-row justify-between items-end 2xl:items-start 2xl:flex-col',
                index === 2 &&
                  '2xl:flex-row 2xl:items-end 2xl:gap-[43px] 3xl:gap-[60px]',
              )}
            >
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 0.7,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="text-[78px] text-nowrap leading-[70%] sm:text-[132px] md:text-[132px] lg:text-[210px] xl:text-[160px] 3xl:text-[210px] font-medium tracking-[-3px]"
              >
                {subscribers}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.3 }}
                  className="font-light tracking-[-10px]"
                >
                  {' '}
                  {symbol}
                </motion.span>
              </motion.p>
              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className={cn(
                  'mb-3 text-[10px] font-light sm:text-[16px] sm:leading-[22.5px] md:text-[16px] md:leading-[22.5px] xl:mb-0 ml-[60px] lg:text-[24px] lg:leading-[34px] xl:text-[24px] xl:leading-[34px] 2xl:text-[16px] 2xl:leading-[22.5px] 2xl:ml-[0px] 2xl:mt-[12px] 3xl:text-[21px] 3xl:leading-[30px] leading-[14px]',
                  index === 2 && '2xl:leading-[12px] 3xl:leading-[14px]',
                )}
              >
                subscribers
              </motion.p>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 0.9,
                duration: 0.7,
                ease: [0.76, 0, 0.24, 1],
              }}
              style={{ originX: 0 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className={cn(
                    'bg-white border-black w-full xl:w-[30vw]',
                    '2xl:w-fit 2xl:h-[40px]',
                    // TikTok
                    index === 0 && [
                      '2xl:bg-black 2xl:text-white 2xl:border-white',
                      '2xl:group-hover:bg-white 2xl:group-hover:text-black 2xl:group-hover:border-black',
                    ],
                    // Instagram
                    index === 1 && [
                      '2xl:bg-black 2xl:text-white 2xl:border-white',
                      '2xl:group-hover:bg-white 2xl:group-hover:text-black 2xl:group-hover:border-black',
                    ],
                    // YouTube
                    index === 2 && [
                      '2xl:bg-black 2xl:text-white 2xl:border-white',
                      '2xl:group-hover:bg-white 2xl:group-hover:text-black 2xl:group-hover:border-black',
                    ],
                  )}
                  variant={'outline'}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.3 }}
                  >
                    Follow the link
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default SocialItem;
