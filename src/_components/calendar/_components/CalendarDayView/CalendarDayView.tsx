import React, { memo, SyntheticEvent, useCallback } from 'react';
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
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const handleSelect = useCallback(
      (event: SyntheticEvent<HTMLButtonElement>) => {
        onClick({ event, value: event.currentTarget.value });
      },
      [onClick]
    );

    console.log('value', value);
    console.log('day', day);

    return (
      <button
        className={cn(`${CLASS_NAME}`, {
          [`${CLASS_NAME}-now`]: day.getTime() === now.getTime(),
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
