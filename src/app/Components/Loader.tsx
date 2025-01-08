import React from 'react';

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="absolute top-1/2 left-1/2 h-14 w-14 animate-pulse overflow-hidden rounded-full border-[6px] border-blue-500 transform -translate-x-1/2 -translate-y-1/2"></div>
  );
};

export default Loader;
