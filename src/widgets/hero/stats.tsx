import type { FC } from 'react';
import React from 'react';

import StatsItem from './stats-item';

const STATS_LIST = [
  {
    title: '18 million',
    description: 'Amount of subscribers',
  },
  {
    title: '110 million',
    description: 'Views per month',
  },
];

const Stats: FC = () => {
  return (
    <div className="flex justify-between gap-[60px] mt-[24px]">
      {STATS_LIST.map((item, index) => (
        <StatsItem
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Stats;
