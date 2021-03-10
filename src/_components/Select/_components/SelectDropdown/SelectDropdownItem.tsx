import React, { useCallback } from 'react';
import cn from 'classnames';
import { SelectOptionType } from '../../_types';
import './SelectDropdownItem.scss';

type PropsType = {
  selectedId?: string;
  option: SelectOptionType;
  onChange: (params: any) => void;
};

const CLASS_NAME = 'SelectDropdownItem';

export const SelectDropdownItem = ({
  selectedId = '',
  option,
  option: { id, label },
  onChange
}: PropsType) => {
  const handleChange = useCallback(
    (event) => {
      onChange({ event, value: option });
    },
    [option, onChange]
  );

  return (
    <button
      className={cn(`${CLASS_NAME}`, {
        [`${CLASS_NAME}--active`]: selectedId === id
      })}
      type="button"
      onClick={handleChange}
    >
      {label}
    </button>
  );
};
