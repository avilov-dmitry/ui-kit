import React from 'react';
import cn from 'classnames';
import './SelectButton.scss';
import { SelectArrowIcon } from '../SelectArrowIcon';

type PropsType = {
  text?: string;
  placeholder?: string;
  className?: string;
  withArrow: boolean;
  icon?: any;
};

const CLASS_NAME = 'SelectButton';

export const SelectButton = ({
  text = '',
  placeholder = '',
  className = '',
  withArrow,
  icon: Icon
}: PropsType) => (
  <button className={cn(CLASS_NAME, className)} type="button">
    {Icon && <Icon />}
    <span className={cn(`${CLASS_NAME}__text`)}>{text || placeholder}</span>
    {withArrow && (
      <span className={cn(`${CLASS_NAME}__arrow`)}>
        <SelectArrowIcon />
      </span>
    )}
  </button>
);
