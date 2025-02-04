import type { FC } from 'react';
import React from 'react';

import CardsList from './cards-list';

const Collaborated: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col 2xl:flex-row 2xl:gap-[135px] 3xl:gap-[85px] gap-[8px] px-[20px] sm:gap-[30px]">
        <h2 className="uppercase text-[38px] leading-[38px] sm:text-[64px] sm:leading-[64px] lg:text-[86px] lg:leading-[86px] xl:text-[80px] xl:leading-[80px] 2xl:text-[72px] 2xl:leading-[72px] 3xl:text-[90px] 3xl:leading-[90px] font-normal">
          Collaborated
        </h2>
        <p className="text-[10px] leading-[14px] sm:text-[16px] sm:leading-[22px] lg:text-[24px] lg:leading-[33px] xl:text-[24px] xl:leading-[33px] 2xl:text-[16px] 2xl:leading-[22px] 3xl:text-[28px] 3xl:leading-[39px] font-light max-w-[270px] sm:max-w-[440px] lg:max-w-[840px] xl:max-w-[860px] 2xl:max-w-[603px] 3xl:max-w-[971px]">
          Katya Shumskaya has become popular thanks to her creative and viral
          videos, which receive millions of views. Her vibrant personality and
          unique approach have attracted the attention of brands such as
          Spotify, Max Factor and Logitech.
        </p>
      </div>
      <CardsList />
    </div>
  );
};

export default Collaborated;
