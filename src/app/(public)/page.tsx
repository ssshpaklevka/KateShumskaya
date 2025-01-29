import type { FC } from 'react';

import Professional from '@/src/widgets/professional/Professional';
import SocialNetwork from '@/src/widgets/social-network/SocialNetwork';
import Header from '@/src/widgets/header/Header';
import Popularity from '@/src/widgets/popularity/Popularity';

const Home: FC = () => {
  return (
    <div className="flex flex-col gap-[140px]">
      {/* <div className="overflow-hidden">
        <p className="animate-fade-up text-2xl font-bold">
          Плавное появление текста снизу вверх
        </p>
      </div>

      <div className="flex items-center justify-center w-64 h-64">
        <svg
          className="w-full h-full animate-spin-slow"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            />
          </defs>

          <text fill="white" fontSize="9">
            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
              Этот текст огибает круг и вращается!
            </textPath>
          </text>
        </svg>
      </div>

      <div className="overflow-hidden">
        <p className="animate-slide-in text-2xl font-bold">
          Появление текста слева направо!
        </p>
      </div> */}
      <div className="px-[40px]">
        <Header />
        <Professional />
      </div>
      <SocialNetwork />
      <div className="px-[40px]">
        <Popularity />
      </div>
    </div>
  );
};

export default Home;
