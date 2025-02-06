'use client';
import type { FC } from 'react';
import React from 'react';
import { Eye, User } from 'lucide-react';

import PopularityItem from './popularity-item';
const POPULARITY = [
  {
    number: 110,
    symbol: 'M',
    description: {
      default: (
        <>
          Views per
          <br />
          month
        </>
      ),
      desktop: 'Views per month',
    },
    icon: Eye,
    subtitle: (
      <>
        That&apos;s 153 thousand views per
        <br />
        hour or 2,546 views per minute
      </>
    ),
  },
  {
    number: 17,
    symbol: '%',
    description: {
      default: (
        <>
          Average level of
          <br />
          engagement
        </>
      ),
      desktop: 'Average level of engagement',
    },
    icon: User,
    subtitle: <>Above industry average</>,
  },
];
const PopularityList: FC = () => {
  return (
    <div className="gap-[48px] sm:gap-[80px] lg:gap-[118px] flex flex-col overflow-hidden">
      {POPULARITY.map((item, index) => (
        <PopularityItem
          key={index}
          icon={item.icon}
          description={item.description}
          number={item.number}
          subtitle={item.subtitle}
          symbol={item.symbol}
        />
      ))}
    </div>
  );
};

export default PopularityList;
