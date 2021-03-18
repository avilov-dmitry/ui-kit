import React, { useCallback } from 'react';
import cn from 'classnames';

import './Input.scss';

const CLASS_NAME = 'Input';

type PropsType = {
  id?: string;
  // label?: string;
  fieldName: string;
  className?: string;
  value?: string;
  isReadOnly?: boolean;
  leftIcon?: any;
  rightIcon?: any;
  onChange: (params: any) => void;
  [key: string]: any;
};

export const Input = ({
  id,
  // label,
  fieldName,
  className = '',
  value = '',
  isReadOnly = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onChange
}: PropsType) => {
  const handleChange = useCallback(
    (event) => {
      if (!isReadOnly && onChange) {
        onChange({ fieldName, value: event.target.value });
      }
    },
    [isReadOnly, fieldName, onChange]
  );

  return (
    <div className={cn(`${CLASS_NAME}__wrapper`, className)}>
      {/* {Boolean(label) && <label htmlFor={id}>{label}</label>} */}
      {LeftIcon && (
        <LeftIcon
          className={cn(`${CLASS_NAME}__icon`, {
            [`${CLASS_NAME}__icon--withLeftIcon`]: LeftIcon
          })}
        />
      )}
      <input
        className={cn(`${CLASS_NAME}`, {
          [`${CLASS_NAME}--withLeftIcon`]: LeftIcon,
          [`${CLASS_NAME}--withRightIcon`]: RightIcon
        })}
        id={id}
        type="text"
        value={value}
        onChange={handleChange}
      />
      {RightIcon && (
        <RightIcon
          className={cn(`${CLASS_NAME}__icon`, {
            [`${CLASS_NAME}__icon--withRightIcon`]: RightIcon
          })}
        />
      )}
    </div>
  );
};
