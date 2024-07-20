// components/InfiniteScrollText.tsx

import React from 'react';

const InfiniteScrollText: React.FC = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap  bg-tertiary font-serif z-0 py-2">

      <div className="animate-scroll inline-block text-2xl px-7 text-black">
        <span className="mr-10 urdu z-1" style={{ fontFamily: 'Noto Nastaliq Urdu' }}>Love Marriage Expert, Love Problem Solution, One Side Love, Family Problem Solution, Divorce Problem<b> Whatsapp: </b>+ 92 300 0825124, <b>Call: </b>+92-300 0512401 </span>
      </div>
    </div>
  );
};

export default InfiniteScrollText;
