import React from 'react';
import cn from 'classnames';
import './SelectDropdown.scss';
import { SelectOptionType } from '../../_types';
import { SelectDropdownItem } from './SelectDropdownItem';

type PropsType = {
  selectedId?: string;
  options: Array<SelectOptionType>;
  onChange: (params: any) => void;
};

const CLASS_NAME = 'SelectDropdown';

export const SelectDropdown = ({ selectedId = '', options, onChange }: PropsType) => (
  <div className={cn(CLASS_NAME)}>
    {options.map((option: SelectOptionType) => (
      <SelectDropdownItem
        key={option.id}
        option={option}
        selectedId={selectedId}
        onChange={onChange}
      />
    ))}
  </div>
);
