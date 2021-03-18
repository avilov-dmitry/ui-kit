import React from 'react';
import cn from 'classnames';
import './SelectButton.scss';
import { SelectArrowIcon } from '../SelectArrowIcon';

type PropsType = {
  text?: string;
  placeholder?: string;
  className?: string;
};

const CLASS_NAME = 'SelectButton';

export const SelectButton = ({ text = '', placeholder = '', className = '' }: PropsType) => (
  <button className={cn(CLASS_NAME, className)} type="button">
    <span className={cn(`${CLASS_NAME}__text`)}>{text || placeholder}</span>
    <span className={cn(`${CLASS_NAME}__arrow`)}>
      <SelectArrowIcon />
    </span>
  </button>
);
