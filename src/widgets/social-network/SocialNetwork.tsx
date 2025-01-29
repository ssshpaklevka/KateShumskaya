import type { FC } from 'react';
import React from 'react';

import SocailBlock from '@/src/shared/ui/social-block/SocailBlock';

const SocialNetwork: FC = () => {
  return (
    <div className="flex flex-col gap-[1px]">
      <SocailBlock title="TikTok" view="12M" />
      <SocailBlock title="Instagram" view="2.5M" />
      <SocailBlock title="YouTube" view="19K" />
    </div>
  );
};

export default SocialNetwork;
