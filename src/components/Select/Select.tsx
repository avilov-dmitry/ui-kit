import React, { useMemo } from 'react';
// import cn from 'classnames';
import { Drop } from '@custom';
import { SelectButton, SelectDropdown } from './_components';
import { SelectOptionType } from './_types';
import './Select.scss';

type PropsType = {
  selected?: SelectOptionType | string;
  fieldName: string;
  withArrow?: boolean;
  placeholder?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
  icon?: any;
  options: Array<SelectOptionType | string>;
  onChange: (params: any) => void;
};

// const CLASS_NAME = 'Select';

export const Select = ({
  selected = { id: '', label: '' },
  fieldName,
  placeholder,
  options,
  icon,
  withArrow = false,
  buttonClassName = '',
  dropdownClassName = '',
  onChange
}: PropsType) => {
  const control = useMemo(
    () => (
      <SelectButton
        className={buttonClassName}
        icon={icon}
        placeholder={placeholder}
        text={typeof selected === 'string' ? selected : selected.label}
        withArrow={withArrow}
      />
    ),
    [icon, withArrow, selected, placeholder, buttonClassName]
  );

  const dropdown = useMemo(
    () => (
      <SelectDropdown
        className={dropdownClassName}
        fieldName={fieldName}
        options={options}
        selectedId={typeof selected === 'string' ? selected : selected.id}
        onChange={onChange}
      />
    ),
    [selected, fieldName, options, onChange, dropdownClassName]
  );

  return (
    // <div className={cn(CLASS_NAME)}>
    <Drop control={control} dropdown={dropdown} />
    // </div>
  );
};
