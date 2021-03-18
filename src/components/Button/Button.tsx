import React, { useCallback } from 'react';
import cn from 'classnames';

import './Button.scss';

const CLASS_NAME = 'Button';

type PropsType = {
  name: string;
  text?: string;
  type?: 'button' | 'submit';
  icon?: any;
  buttonClassName?: string;
  onClick: any;
};

export const Button = ({
  name,
  text,
  icon,
  buttonClassName,
  type = 'button',
  onClick
}: PropsType) => {
  const handleClick = useCallback(() => {}, []);

  return (
    <button className={cn(CLASS_NAME)} type={type}>
      {text}
    </button>
  );
};
