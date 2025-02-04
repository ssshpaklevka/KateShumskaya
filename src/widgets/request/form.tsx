import type { FC } from 'react';
import React from 'react';

const Form: FC = () => {
  return (
    <form className="flex flex-col xl:flex-row">
      <input
        type="text"
        placeholder="Name"
        className="text-center bg-black border-l border-r border-t xl:border-l-0 xl:border-r-0 xl:border-b text-white text-[16px] sm:text-[24px] sm:leading-[33px] lg:text-[40px] lg:leading-[55px] xl:text-[24px] xl:leading-[33px] 3xl:text-[30px] 3xl:leading-[42px] font-light placeholder:text-white/50  border-white w-full h-[160px] xl:h-[400px] 2xl:h-[500px] 3xl:h-[630px] outline-none"
      />
      <input
        type="email"
        placeholder="Mail"
        className="text-center bg-black text-white text-[16px] sm:text-[24px] sm:leading-[33px] lg:text-[40px] lg:leading-[55px] xl:text-[24px] xl:leading-[33px] 3xl:text-[30px] 3xl:leading-[42px] font-light placeholder:text-white/50 border border-white w-full h-[160px] xl:h-[400px] 2xl:h-[500px] 3xl:h-[630px] outline-none"
      />
      <button className="text-center bg-white text-[16px] sm:text-[24px] sm:leading-[33px] lg:text-[40px] lg:leading-[55px] xl:text-[24px] xl:leading-[33px] 3xl:text-[30px] 3xl:leading-[42px] font-light placeholder:text-white/50 border border-white w-full h-[160px] xl:h-[400px] 2xl:h-[500px] 3xl:h-[630px] outline-none text-black">
        Send
      </button>
    </form>
  );
};

export default Form;
