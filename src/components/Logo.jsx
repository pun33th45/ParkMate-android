import React from 'react';

const Logo = ({ className = "w-10 h-10", innerColor = "#111827", outerColor = "#6ba793" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Map Pin Background */}
    <path d="M50 5C26 5 10 21 10 45C10 70 50 95 50 95C50 95 90 70 90 45C90 21 74 5 50 5Z" fill={outerColor} />
    {/* Letter p */}
    <path fillRule="evenodd" clipRule="evenodd" d="M38 25V60H48V49C56 49 62 44 62 37C62 30 56 25 48 25H38ZM48 40H46V33H48C51 33 53 34.5 53 36.5C53 38.5 51 40 48 40Z" fill={innerColor} />
  </svg>
);

export default Logo;
