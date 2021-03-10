import React, { useMemo } from 'react';
import cn from 'classnames';
import { Drop } from '@pages';
import { SelectButton, SelectDropdown } from './_components';
import './Select.scss';
import { SelectOptionType } from './_types';

type PropsType = {
  value?: any;
  placeholder?: string;
  options: Array<SelectOptionType>;
  onChange: (params: any) => void;
};

const CLASS_NAME = 'Select';

export const Select = ({
  value: { id, label } = {},
  placeholder,
  options,
  onChange
}: PropsType) => {
  const control = useMemo(() => <SelectButton placeholder={placeholder} text={label} />, [
    label,
    placeholder
  ]);

  const dropdown = useMemo(
    () => <SelectDropdown options={options} selectedId={id} onChange={onChange} />,
    [id, options, onChange]
  );
  console.clear();
  console.log('options', options);

  return (
    <div className={cn(CLASS_NAME)}>
      <Drop control={control} dropdown={dropdown} />
    </div>
  );
};
