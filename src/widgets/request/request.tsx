import type { FC } from 'react';
import React from 'react';

import Form from './form';

const Request: FC = () => {
  return (
    <div
      id="contact-form"
      className="flex flex-col gap-[48px] sm:gap-[80px] lg:gap-[130px] xl:gap-[54px] 2xl:gap-[90px] 3xl:gap-[96px]"
    >
      <div className="xl:px-[20px] flex flex-col xl:flex-row xl:items-center gap-[11px] sm:gap-[20px] lg:gap-[33px] xl:gap-[100px] 2xl:gap-[77px] 3xl:gap-[100px]">
        <h3 className="font-light text-[38px] leading-[53px] sm:text-[64px] sm:leading-[90px] lg:text-[105px] lg:leading-[150px] xl:text-[80px] xl:leading-[80px] 2xl:text-[55px] 2xl:leading-[76px] 3xl:text-[70px] 3xl:leading-[95px] text-center">
          Leave a request
        </h3>
        <p className="text-[10px] sm:text-[16px] sm:leading-[22px] lg:text-[26px] lg:leading-[37px] xl:text-[24px] xl:leading-[33px] 2xl:text-[16px] 2xl:leading-[22px] 3xl:text-[22px] 3xl:leading-[33px] text-center font-light leading-[14px]">
          and the manager will contact you
        </p>
      </div>
      <Form />
    </div>
  );
};

export default Request;
