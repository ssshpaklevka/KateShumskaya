'use client';
import type { FC } from 'react';
import React from 'react';

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
    subtitle: (
      <>
        That&apos;s 153 thousand views per
        <br />
        hour or 2,546 views per minute
      </>
    ),
    iconSrc: '/eyes.svg',
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
      desktop: (
        <>
          Average level
          <br />
          of engagement
        </>
      ),
    },
    subtitle: <>Above industry average</>,
    iconSrc: '/people.svg',
  },
];
const PopularityList: FC = () => {
  return (
    <div className="gap-[48px] sm:gap-[80px] lg:gap-[118px] flex flex-col overflow-hidden">
      {POPULARITY.map((item, index) => (
        <PopularityItem
          key={index}
          description={item.description}
          number={item.number}
          subtitle={item.subtitle}
          iconSrc={item.iconSrc}
          symbol={item.symbol}
        />
      ))}
    </div>
  );
};

export default PopularityList;
