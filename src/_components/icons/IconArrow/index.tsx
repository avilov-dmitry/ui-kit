import React from 'react';

type PropsType = {
  className?: string;
  color?: string;
  isRight?: boolean;
};

const PATH_LEFT =
  'M4.41412 10.0001L10.707 16.293L9.2928 17.7072L0.585693 9.00008L9.2928 0.292969L10.707 1.70718L4.41412 8.00008H18.9999V10.0001H4.41412Z';
const PATH_RIGHT =
  'M14.5858 10.0001H0V8.00008H14.5858L8.29289 1.70718L9.70711 0.292969L18.4142 9.00008L9.70711 17.7072L8.29289 16.293L14.5858 10.0001Z';

export const IconArrow = ({ className = '', color = '#d1cfd7', isRight = false }: PropsType) => (
  <svg
    className={className}
    height={24}
    viewBox="-2 -2 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d={isRight ? PATH_RIGHT : PATH_LEFT}
      fill="#d1cfd7"
      fillRule="evenodd"
      key={isRight ? PATH_RIGHT : PATH_LEFT}
    />
  </svg>
);
