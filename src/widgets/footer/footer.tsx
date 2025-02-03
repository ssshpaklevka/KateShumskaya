import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

const Footer: FC = () => {
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-row">
        <h3 className="text-[14px] font-light w-1/2">Social networks</h3>
        <h3 className="text-[14px] font-light w-1/2">Contacts</h3>
      </div>
      <div className="flex flex-row mt-[66px] text-[10px] leading-[14px] font-light">
        <div className="w-1/2 flex flex-col gap-[18px]">
          <div className="flex justify-between max-w-[96px]">
            <Link href={'#'}>Instagram</Link>
          </div>
          <div className="flex justify-between w-[100px]">
            <Link href={'#'}>TikTok</Link>
            <Link href={'#'}>Twitch</Link>
          </div>
          <div className="flex justify-between w-[100px]">
            <Link href={'#'}>YouTube</Link>
            <Link href={'#'}>X.com</Link>
          </div>
        </div>
        <div className="flex flex-col gap-[18px]">
          <div className="invisible flex justify-between max-w-[96px]">
            <Link href={'#'}>ks@shumskayakate.com</Link>
          </div>{' '}
          <div className="flex justify-between max-w-[96px]">
            <Link href={'#'}>ks@shumskayakate.com</Link>
          </div>
          <div className="flex text-nowrap justify-between w-[100px]">
            <Link href={'#'}>Политика конфиденциальности</Link>
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
