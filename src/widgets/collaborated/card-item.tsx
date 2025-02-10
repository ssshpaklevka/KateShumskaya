import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';
interface Props {
  image: string;
}
const CardItem: FC<Props> = ({ image }) => {
  if (image === 'sponsor') {
    return (
      <button className="hover:bg-white hover:border-white transition-all hover:text-black border border-white/15 size-[45vw] xl:size-[23vw] flex justify-center items-center">
        <p className="text-[10px] sm:text-[16px] sm:leading-[22px] lg:text-[24px] lg:leading-[33px] 2xl:text-[16px] 2xl:leading-[22px] 3xl:text-[21px] 3xl:leading-[30px] font-normal">
          Become a case
        </p>
      </button>
    );
  }

  return (
    <div className="group hover:bg-white bg-white/5 border border-white/15 w-[45vw] h-[45vw] xl:w-[23vw] xl:h-[23vw] flex justify-center items-center transition-all">
      <Image
        alt="logotype"
        src={`/img/collaborated/${image}.svg`}
        width={3000}
        height={3000}
        className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] xl:w-[210px] 2xl:w-[250px] 3xl:w-[290px] h-auto transition-all group-hover:invert"
      />
    </div>
  );
};

export default CardItem;
