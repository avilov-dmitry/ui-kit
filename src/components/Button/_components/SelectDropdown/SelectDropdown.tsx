import React from 'react';
import cn from 'classnames';
import { SelectOptionType } from '../../_types';
import { SelectDropdownItem } from './SelectDropdownItem';

import './SelectDropdown.scss';

const CLASS_NAME = 'SelectDropdown';

type PropsType = {
  fieldName: string;
  className?: string;
  selectedId?: string;
  options: Array<SelectOptionType | string>;
  onChange: (params: any) => void;
};

export const SelectDropdown = ({
  className = '',
  fieldName,
  selectedId = '',
  options,
  onChange
}: PropsType) => (
  <div className={cn(CLASS_NAME, className)}>
    {options.map((option: SelectOptionType | string) => (
      <SelectDropdownItem
        fieldName={fieldName}
        key={typeof option === 'string' ? option : option.id}
        onChange={onChange}
        option={option}
        selectedId={selectedId}
      />
    ))}
  </div>
);
