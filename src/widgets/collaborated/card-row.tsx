import type { FC } from 'react';
import React from 'react';

import { cn } from '@/src/shared/lib/utils';

import CardItem from './card-item';

interface Props {
  direction: 'right' | 'left';
  items: string[];
}

const CardRow: FC<Props> = ({ direction, items }) => {
  return (
    <div
      className={cn(
        direction === 'right' ? 'justify-end' : 'justify-start',
        'flex flex-row gap-[12px]',
      )}
    >
      {items.map((item, index) => (
        <CardItem key={index} image={item} />
      ))}
    </div>
  );
};

export default CardRow;
