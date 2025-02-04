import type { FC } from 'react';
import React from 'react';

import CardRow from './card-row';
import CardItem from './card-item';

const CARDS = [
  ['avon', 'nina-ricci'],
  ['la-roche-posay', 'xiaomi'],
  ['max-factor', 'spotify'],
  ['logitech', 'sponsor'],
];

const CardsList: FC = () => {
  return (
    <>
      <div className="flex xl:hidden flex-col gap-[12px] mt-[34px]">
        {CARDS.map((item, index) => (
          <CardRow
            items={item}
            key={index}
            direction={index % 2 === 0 ? 'right' : 'left'}
          />
        ))}
      </div>
      <div className="hidden xl:grid grid-cols-4 gap-x-[12px] mt-[34px] ml-[20px] mb-[100px]">
        {CARDS.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className={`flex flex-col gap-[12px] ${columnIndex % 2 !== 0 ? 'mt-[11.5vw]' : ''}`}
          >
            {column.map((item, itemIndex) => (
              <CardItem key={itemIndex} image={item} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default CardsList;
