import type { FC } from 'react';

import Professional from '@/src/widgets/professional/Professional';
import SocialNetwork from '@/src/widgets/social-network/SocialNetwork';
import Header from '@/src/widgets/header/Header';
import Popularity from '@/src/widgets/popularity/Popularity';
import Content from '@/src/widgets/content/Content';

const Home: FC = () => {
  return (
    <div className="flex flex-col gap-[140px]">
      <div className="px-[40px]">
        <Header />
        <Professional />
      </div>
      <SocialNetwork />
      <div className="flex flex-col gap-[140px] px-[40px]">
        <Popularity />
        <Content />
      </div>
    </div>
  );
};

export default Home;
