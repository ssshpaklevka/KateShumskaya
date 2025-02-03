import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';
interface Props {
  image: string;
}
const CardItem: FC<Props> = ({ image }) => {
  if (image === 'sponsor') {
    return (
      <button className="hover:bg-white hover:border-white transition-all hover:text-black border border-white/15 !size-[45vw] flex justify-center items-center">
        <p className="text-[10px] font-normal">Become a case</p>
      </button>
    );
  }

  return (
    <div className=" group hover:bg-white bg-white/5 border border-white/15 w-[45vw] h-[45vw] flex justify-center items-center transition-all">
      <Image
        alt="logotype"
        src={`/img/collaborated/${image}.svg`}
        width={3000}
        height={3000}
        className="w-[100px] h-auto transition-all group-hover:invert"
      />
    </div>
  );
};

export default CardItem;
