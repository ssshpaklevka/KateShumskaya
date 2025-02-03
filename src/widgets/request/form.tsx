import type { FC } from 'react';
import React from 'react';

const Form: FC = () => {
  return (
    <form className="flex flex-col">
      <input
        type="text"
        placeholder="Name"
        className="text-center bg-black border-l border-r border-t text-white text-[16px] font-light placeholder:text-white/50  border-white w-full h-[160px] outline-none"
      />
      <input
        type="email"
        placeholder="Mail"
        className="text-center bg-black text-white text-[16px] font-light placeholder:text-white/50 border border-white w-full h-[160px] outline-none"
      />
      <button className="text-center bg-white text-[16px] font-light placeholder:text-white/50 border border-white w-full h-[160px] outline-none text-black">
        Send
      </button>
    </form>
  );
};

export default Form;
