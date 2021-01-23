import React, { memo, useCallback, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import './CalendarTimeSelect.scss';

const CLASS_NAME = 'CalendarTimeSelect';
const cn = classNames;

type PropsType = {
  options: Array<any>;
  value: number;
  onClick: (params: number) => void;
};

const CalendarTimeSelectOption = memo(
  ({ id, label, isSelected, onClick }: any) => {
    const refOption = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      if (isSelected && refOption.current !== null) {
        console.log(refOption.current.getBoundingClientRect());

        window.scrollTo(refOption.current.getBoundingClientRect());
      }
    }, [isSelected]);

    const handleClick = useCallback(() => onClick(Number(id)), [id, onClick]);

    return (
      <button
        className={cn(`${CLASS_NAME}__item`, {
          [`${CLASS_NAME}__item--selected`]: isSelected
        })}
        key={id}
        onClick={handleClick}
        ref={refOption}
        type="button"
      >
        {label}
      </button>
    );
  }
);

export const CalendarTimeSelect = ({ options, value, onClick }: PropsType) => {
  return (
    <div className={cn(`${CLASS_NAME}`)}>
      {options.map(({ id, label }: any) => (
        <CalendarTimeSelectOption
          id={id}
          isSelected={Boolean(value === id)}
          key={id}
          label={label}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
