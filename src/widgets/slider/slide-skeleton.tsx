// import type { FC } from 'react';
// import React from 'react';

// import { cn } from '@/src/shared/lib/utils';

// interface SlideStyles {
//   width: string;
//   height: string;
//   translateX: number;
// }

// interface SlideSkeletonProps {
//   styles: SlideStyles;
//   distance: number;
//   translateX: number;
//   isActive: boolean;
// }

// // SlideSkeleton.tsx
// const SlideSkeleton: React.FC<SlideSkeletonProps> = ({
//   styles,
//   distance,
//   translateX,
//   isActive,
// }) => {
//   return (
//     <div
//       className={cn(
//         'animate-pulse relative rounded-lg overflow-hidden',
//         styles.width,
//         styles.height,
//       )}
//       style={{
//         transform: `translateX(${translateX}px) scale(${isActive ? 1 : 0.8}) rotateY(${
//           isActive ? 0 : distance * -30
//         }deg) translateZ(0)`,
//         zIndex: isActive ? 30 : 20 - Math.abs(distance),
//         filter: isActive ? 'none' : 'grayscale(100%)',
//         transition: 'transform 0.5s ease-out',
//         isolation: 'isolate',
//         backfaceVisibility: 'hidden',
//         willChange: 'transform',
//       }}
//     >
//       <div className="absolute inset-0 bg-gray-200" />
//       <div className="absolute inset-0 flex flex-col items-center justify-center">
//         <div className="w-1/2 h-12 bg-gray-300 rounded mb-4" />
//         <div className="w-3/4 h-4 bg-gray-300 rounded" />
//       </div>
//     </div>
//   );
// };

// export default SlideSkeleton;

import type { FC } from 'react';
import React from 'react';

const SlideSkeleton: FC = () => {
  return (
    <div className="w-full h-full bg-gray-300 animate-pulse flex items-center justify-center rounded-lg overflow-hidden">
      <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
    </div>
  );
};

export default SlideSkeleton;
