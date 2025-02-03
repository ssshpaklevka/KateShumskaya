import type { FC } from 'react';
import React from 'react';

import CardsList from './cards-list';

const Collaborated: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col gap-[8px] px-[20px]">
        <h2 className="uppercase text-[38px] leading-[38px] font-normal">
          Collaborated
        </h2>
        <p className="text-[10px] leading-[14px] font-light max-w-[270px]">
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
