'use client';
import type { FC } from 'react';
import React from 'react';

import Tiktok from './icons/tiktok';
import SocialItem from './social-item';
import Instagram from './icons/instagram';
import Youtube from './icons/youtube';

const SOCIAL_NETWORKS = [
  {
    network: 'TikTok',
    icon: Tiktok,
    symbol: 'M',
    subscribers: '12',
    link: 'https://instagram.com/',
  },
  {
    network: 'Instagram',
    icon: Instagram,
    subscribers: '2.5',
    symbol: 'M',
    link: 'https://instagram.com/',
  },
  {
    network: 'YouTube',
    icon: Youtube,
    symbol: 'K',
    subscribers: '19',
    link: 'https://instagram.com/',
  },
];

const SocialList: FC = () => {
  return (
    <div className="flex flex-col md:px-[63px] 2xl:px-0 2xl:grid grid-cols-2">
      {SOCIAL_NETWORKS.map((item, index) => (
        <SocialItem
          index={index}
          key={index}
          icon={item.icon}
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
