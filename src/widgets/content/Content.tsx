import type { FC } from 'react';
import React from 'react';

import Carousel from './carousel';

const Content: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-[8px] px-[20px]">
        <h2 className="uppercase text-[38px] leading-[38px] font-normal">
          Content
        </h2>
        <p className="text-[10px] leading-[14px] font-light">
          Katya&apos;s videos have millions of views <br /> and an audience that
          trusts her choice.
        </p>
      </div>
      <Carousel />
    </div>
  );
};

export default Content;
