import type { FC } from 'react';
import React from 'react';

import CardRow from './card-row';
const CARDS = [
  ['avon', 'nina-ricci'],
  ['la-roche-posay', 'xiaomi'],
  ['max-factor', 'spotify'],
  ['logitech', 'sponsor'],
];
const CardsList: FC = () => {
  return (
    <div className="flex flex-col gap-[12px] mt-[34px]">
      {CARDS.map((item, index) => (
        <CardRow
          items={item}
          key={index}
          direction={index % 2 === 0 ? 'right' : 'left'}
        />
      ))}
    </div>
  );
};

export default CardsList;
