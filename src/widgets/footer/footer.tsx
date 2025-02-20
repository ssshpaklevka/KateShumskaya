import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

const Footer: FC = () => {
  return (
    <div className="flex flex-col gap-[66px] sm:gap-[112px] lg:gap-[146px] xl:gap-[132px] 2xl:gap-[112px] 3xl:gap-[143px]">
      <div className="flex flex-row">
        <h3 className="text-[14px] sm:text-[24px] sm:leading-[33px] lg:text-[32px] lg:leading-[44px] xl:text-[36px] xl:leading-[50px] 2xl:text-[24px] 2xl:leading-[33px] font-light w-1/2">
          Social networks
        </h3>
        <h3 className="text-[14px] sm:text-[24px] sm:leading-[33px] lg:text-[32px] lg:leading-[44px] xl:text-[36px] xl:leading-[50px] 2xl:text-[24px] 2xl:leading-[33px] font-light w-1/2">
          Contacts
        </h3>
      </div>
      <div className="flex flex-row text-[10px] leading-[14px] sm:text-[16px] sm:leading-[22px] lg:text-[24px] lg:leading-[33px] xl:text-[24px] xl:leading-[33px] 2xl:text-[16px] 2xl:leading-[22px] font-light">
        <div className="w-1/2 flex flex-col gap-[18px] sm:gap-[33px] lg:gap-[39px] xl:gap-[73px] 2xl:gap-[33px] 3xl:gap-[40px]">
          <div className="flex justify-between max-w-[96px]">
            <Link
              className="text-[10px] sm:text-[16px] lg:text-[24px] 2xl:text-[16px] 3xl:text-[21px]"
              href={'#'}
            >
              Instagram
            </Link>
          </div>
          <div className="flex justify-between w-[100px] sm:w-[160px] lg:w-[210px] xl:w-[260px]">
            <Link
              className="text-[10px] sm:text-[16px] lg:text-[24px] 2xl:text-[16px] 3xl:text-[21px]"
              href={'#'}
            >
              TikTok
            </Link>
            <Link
              className="text-[10px] sm:text-[16px] lg:text-[24px] 2xl:text-[16px] 3xl:text-[21px]"
              href={'#'}
            >
              Twitch
            </Link>
          </div>
          <div className="flex justify-between w-[100px] sm:w-[160px] lg:w-[210px] xl:w-[260px]">
            <Link
              className="text-[10px] sm:text-[16px] lg:text-[24px] 2xl:text-[16px] 3xl:text-[21px]"
              href={'#'}
            >
              YouTube
            </Link>
            <Link
              className="text-[10px] sm:text-[16px] lg:text-[24px] 2xl:text-[16px] 3xl:text-[21px]"
              href={'#'}
            >
              X.com
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-[18px] sm:gap-[33px] lg:gap-[39px] xl:gap-[73px] 2xl:gap-[33px] 3xl:gap-[40px]">
          <div className="invisible flex justify-between max-w-[96px]">
            <Link
              className="text-[10px] sm:text-[16px] lg:text-[24px] 2xl:text-[16px] 3xl:text-[21px]"
              href={'#'}
            >
              ks@shumskayakate.com
            </Link>
          </div>{' '}
          <div className="flex justify-between max-w-[96px]">
            <Link
              className="text-[10px] sm:text-[16px] lg:text-[24px] 2xl:text-[16px] 3xl:text-[21px]"
              href={'#'}
            >
              ks@shumskayakate.com
            </Link>
          </div>
          <div className="flex text-nowrap justify-between w-[100px]">
            <Link
              className="text-[10px] sm:text-[16px] lg:text-[24px] 2xl:text-[16px] 3xl:text-[21px]"
              href={'#'}
            >
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
//  <div className="flex flex-row">
//    <div className="w-1/2">
//      <h3 className="text-[14px] font-light">Social networks</h3>
//      <div className="flex flex-row ">
//        <div className="w-1/2 flex flex-col gap-[19px]">
//          <Link href="#">Instagram</Link>
//          <Link href="#">Instagram</Link>
//          <Link href="#">Instagram</Link>
//        </div>
//      </div>
//    </div>
//    <div className="w-1/2">
//      <h3 className="text-[14px] font-light">Contacts</h3>
//    </div>
//  </div>;
