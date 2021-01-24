import React, { memo, SyntheticEvent, useCallback, useMemo } from 'react';
import classNames from 'classnames/bind';
import { getLocale } from '../../_utils/getLocale';
import './CalendarDayView.scss';

const cn = classNames;
const CLASS_NAME = 'CalendarDayView';

type PropsType = {
  day: Date;
  disabled: boolean;
  onClick: any;
  index: number;
  length: number;
  value: Date;
};

export const CalendarDayView = memo(
  ({ day, disabled, onClick, index, length, value }: PropsType) => {
    const isNow = useMemo(() => day.getTime() === new Date().getTime(), [day]);

    const handleSelect = useCallback(
      (event: SyntheticEvent<HTMLButtonElement>) => {
        onClick({ event, value: day });
      },
      [day, onClick]
    );

    return (
      <button
        className={cn(`${CLASS_NAME}`, {
          [`${CLASS_NAME}--now`]: isNow,
          [`${CLASS_NAME}-select`]: getLocale(value) === getLocale(day),
          [`${CLASS_NAME}--firstup`]:
            index === 0 || (day.getDate() >= 2 && day.getDate() < 8 && day.getDay() === 1),
          [`${CLASS_NAME}--lastup`]: day.getDay() === 0 && index < 7,
          [`${CLASS_NAME}--lastdown`]:
            day.getDate() === length || (day.getDate() > 24 && day.getDay() === 0),
          [`${CLASS_NAME}--firstdown`]:
            (day.getDate() === length && day.getDay() === 1) ||
            (day.getDate() > 24 && day.getDay() === 1)
        })}
        disabled={disabled}
        onClick={handleSelect}
        type="button"
        value={`${day}`}
      >
        {day.getDate()}
      </button>
    );
  }
);
