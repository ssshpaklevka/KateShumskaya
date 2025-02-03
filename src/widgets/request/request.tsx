import type { FC } from 'react';
import React from 'react';

import Form from './form';

const Request: FC = () => {
  return (
    <div className="flex flex-col gap-[48px]">
      <div className="flex flex-col gap-[11px]">
        <h3 className="font-light text-[38px] leading-[53px] text-center">
          Leave a request
        </h3>
        <p className="text-[10px] text-center font-light leading-[14px]">
          and the manager will contact you
        </p>
      </div>
      <Form />
    </div>
  );
};

export default Request;
