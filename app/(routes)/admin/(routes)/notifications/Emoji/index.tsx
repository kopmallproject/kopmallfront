import React from 'react';

type PageProps = {
  label: string;
  symbol: string;
};

function Emoji({ label, symbol }: PageProps) {
  return (
    <span
      className="emoji text-[20px]"
      role="img"
      aria-label={label !== undefined ? label : ''}
      aria-hidden={label ? 'false' : 'true'}
    >
      {symbol}
    </span>
  );
}

export default Emoji;
