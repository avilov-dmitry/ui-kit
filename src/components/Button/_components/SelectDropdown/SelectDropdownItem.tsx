import React, { useCallback, useMemo } from 'react';
import cn from 'classnames';
import { SelectOptionType } from '../../_types';

import './SelectDropdownItem.scss';

const CLASS_NAME = 'SelectDropdownItem';

type PropsType = {
  selectedId?: string;
  fieldName: string;
  option: SelectOptionType | string;
  onChange: (params: any) => void;
};

export const SelectDropdownItem = ({ selectedId = '', fieldName, option, onChange }: PropsType) => {
  const handleChange = useCallback(
    (event) => {
      onChange({ event, value: option, fieldName });
    },
    [fieldName, option, onChange]
  );

  const isSelected = useMemo(
    () => (typeof option === 'string' ? selectedId === option : selectedId === option.id),
    [option, selectedId]
  );

  const text = useMemo(
    () => (typeof option === 'string' ? selectedId === option : selectedId === option.label),
    [option, selectedId]
  );

  return (
    <button
      className={cn(`${CLASS_NAME}`, {
        [`${CLASS_NAME}--active`]: isSelected
      })}
      onClick={handleChange}
      type="button"
    >
      {text}
    </button>
  );
};
