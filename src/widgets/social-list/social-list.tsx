'use client';
import type { FC } from 'react';
import React from 'react';

import SocialItem from './social-item';
import Youtubeb from './icons/youtubeb';
import Youtubew from './icons/youtubew';
import Instagramw from './icons/instagramw';
import Instagramb from './icons/instagramb';
import Tiktokw from './icons/tiktokw';
import Tiktokb from './icons/tiktokb';

const SOCIAL_NETWORKS = [
  {
    network: 'TikTok',
    iconBlack: Tiktokb,
    iconWhite: Tiktokw,
    symbol: 'M',
    subscribers: '12',
    link: 'https://instagram.com/',
  },
  {
    network: 'Instagram',
    iconBlack: Instagramb,
    iconWhite: Instagramw,
    subscribers: '2.5',
    symbol: 'M',
    link: 'https://instagram.com/',
  },
  {
    network: 'YouTube',
    iconBlack: Youtubeb,
    iconWhite: Youtubew,
    symbol: 'K',
    subscribers: '19',
    link: 'https://instagram.com/',
  },
];

const SocialList: FC = () => {
  return (
    <div className="flex flex-col gap-[1px] md:px-[63px] lg:px-[0px] xl:px-[63px] 2xl:px-0 2xl:grid grid-cols-2">
      {SOCIAL_NETWORKS.map((item, index) => (
        <SocialItem
          index={index}
          key={index}
          iconBlack={item.iconBlack}
          iconWhite={item.iconWhite}
          link={item.link}
          network={item.network}
          subscribers={item.subscribers}
          symbol={item.symbol}
        />
      ))}
    </div>
  );
};

export default SocialList;
