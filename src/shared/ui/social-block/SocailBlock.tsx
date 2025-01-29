import type { FC } from 'react';
import React from 'react';
import Link from 'next/link';

import { Button } from '../../components/ui/button';
interface Props {
  title: 'TikTok' | 'Instagram' | 'YouTube';
  view: string;
}
const SocailBlock: FC<Props> = ({ title, view }) => {
  const numericPart = view.replace(/[MK]/g, '');
  const suffix = view.match(/[MK]/)?.[0] || '';
  let socIcon =
    title === 'TikTok'
      ? '/img/social/tiktok.svg'
      : title === 'Instagram'
        ? '/img/social/insta.svg'
        : '/img/social/youtube.svg';
  let socLink =
    title === 'TikTok'
      ? 'https://www.tiktok.com/@mimisskate'
      : title === 'Instagram'
        ? 'https://www.instagram.com/mimisskate'
        : 'https://www.youtube.com/@mimisskate';

  return (
    <div className="bg-white flex flex-col px-[40px] py-[40px] gap-[270px]">
      <div className="flex flex-row justify-between items-center">
        <p className="text-[42px] leading-[42px] text-black">{title}</p>
        <img src={socIcon} alt={`${title} icon`} />
      </div>
      <div className="flex flex-col gap-[40px]">
        <div className="flex items-end flex-row gap-[60px]">
          <div className="flex items-baseline">
            <span className="text-[132px] leading-[102px] text-black medium">
              {numericPart}
            </span>
            <span className="text-[132px] leading-[102px] text-black light">
              {suffix}
            </span>
          </div>
          <p className="text-[16px] leading-[22px] text-black">subscribes</p>
        </div>
        <Link href={socLink}>
          <Button
            variant={'default'}
            className="bg-transparent border border-black w-full"
          >
            Follow the link
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SocailBlock;
