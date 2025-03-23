import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import { cn } from '@/src/shared/lib/utils';
import { Button } from '@/src/shared/components/ui/button';

const Header: FC = () => {
  return (
    <div>
      <div className="relative flex-col items-center">
        <div className="flex items-center justify-center">
          <div className="relative mr-[-15px] mb-[100px] z-10 flex flex-col gap-[30px]">
            <p className="text-[14px] leading-[19.6px]">ARTIST</p>
            <p className="text-[14px] leading-[19.6px]">MODEL</p>
            <p className="text-[14px] leading-[19.6px]">INFLUENCER</p>
            <p className="text-[14px] leading-[19.6px]">ACTRESS</p>
          </div>
          <div className="relative">
            <Image
              src={'/img/hero/kate.webp'}
              alt="kate"
              width={3000}
              height={3000}
              className="object-contain w-full h-full"
            />
            <p
              className={cn(
                'text-[clamp(50px,14vw,97px)] leading-[1] absolute bottom-0 left-[-80px]',
                'medium',
              )}
            >
              KATE SHUMSKAYA
            </p>
          </div>
        </div>

        <div className="mt-[150px] flex flex-col  gap-8 w-full">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <p className={cn('text-[48px] leading-[67px]', 'light')}>
                18 million
              </p>
              <p className="text-[16px] leading-[22px]">
                Amount of subscribers
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className={cn('text-[48px] leading-[67px]', 'light')}>
                110 million
              </p>
              <p className="text-[16px] leading-[22px]">View per mountg</p>
            </div>
          </div>

          <Button size={'default'} className="w-full">
            Contact the manager
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
