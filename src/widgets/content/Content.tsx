import type { FC } from 'react';
import React from 'react';

import Carousel from './carousel';

const Content: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-[8px] px-[20px] xl:items-center xl:flex-row xl:gap-[200px] 2xl:gap-[500px] 3xl:gap-[600px]">
        <h2 className="uppercase text-[38px] leading-[38px] sm:text-[64px] sm:leading-[64px] lg:text-[100px] lg:leading-[100px] xl:text-[80px] xl:leading-[80px] 2xl:text-[72px] 2xl:leading-[72px] 3xl:text-[90px] 3xl:leading-[90px] font-normal">
          Content
        </h2>
        <p className="text-[10px] leading-[14px] sm:text-[16px] sm:leading-[22px] lg:text-[24px] lg:leading-[33px] xl:text-[24px] xl:leading-[33px] 2xl:text-[16px] 2xl:leading-[22px] 3xl:text-[28px] 3xl:leading-[39px] font-light">
          Katya&apos;s videos have millions of views <br /> and an audience that
          trusts her choice.
        </p>
      </div>
      <Carousel />
    </div>
  );
};

export default Content;
