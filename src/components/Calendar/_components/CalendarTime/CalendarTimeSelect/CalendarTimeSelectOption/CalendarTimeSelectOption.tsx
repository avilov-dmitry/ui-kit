import React, { memo, useCallback, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import './CalendarTimeSelectOption.scss';

const CLASS_NAME = 'CalendarTimeSelectOption';
const cn = classNames;

type PropsType = {
  refLink: any;
  id: string;
  label: string;
  isSelected: boolean;
  index: number;
  onClick: (params: number) => void;
};

export const CalendarTimeSelectOption = memo(
  ({ refLink, id, label, isSelected, index, onClick }: PropsType) => {
    const refOption = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      if (isSelected && refLink.current !== null && refOption.current !== null) {
        const height = refOption.current.getBoundingClientRect().height;

        refLink.current.scrollTo({ top: index * height });
      }
    }, [refLink, index, isSelected]);

    const handleClick = useCallback(() => onClick(Number(id)), [id, onClick]);

    return (
      <button
        className={cn(`${CLASS_NAME}`, {
          [`${CLASS_NAME}--selected`]: isSelected
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
