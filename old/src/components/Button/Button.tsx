import React, { useCallback } from 'react';
import cn from 'classnames';
import { ButtonType, ButtonColorsType } from './_types';

import './Button.scss';

const CLASS_NAME = 'Button';

type PropsType = {
  name?: string;
  text?: string;
  color?: ButtonColorsType;
  type?: ButtonType;
  leftIcon?: React.ElementType;
  rightIcon?: React.ElementType;
  buttonClassName?: string;
  onClick: any;
};

export const Button = ({
  name = '',
  text = '',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  color = 'black',
  buttonClassName,
  type = 'button',
  onClick
}: PropsType) => {
  const handleClick = useCallback(
    (event) => {
      if (onClick) {
        onClick({ event, name });
      }
    },
    [name, onClick]
  );

  return (
    <button
      className={cn(CLASS_NAME, { [`${CLASS_NAME}--${color}`]: color }, buttonClassName)}
      type={type}
      onClick={handleClick}
    >
      {LeftIcon && <LeftIcon />}
      {text && <span className={cn(`${CLASS_NAME}__text`)}>{text}</span>}
      {RightIcon && <RightIcon />}
    </button>
  );
};
