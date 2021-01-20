import React, { memo } from 'react';
import classNames from 'classnames/bind';
import '../calendar.scss';

const CLASS_NAME = 'Calendar-header';
const cn = classNames;

type PropsType = {
  month: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
};

export const CalendarHeader = memo(
  ({ month, onPrevMonth, onNextMonth }: PropsType) => (
    <div className={cn(`${CLASS_NAME}`)}>
      <button
        className={cn(`${CLASS_NAME}__icon`)}
        onClick={onPrevMonth}
        type="button"
      >
        {'<-'}
      </button>

      <span className={cn(`${CLASS_NAME}__month-name`)}>{month}</span>

      <button
        className={cn(`${CLASS_NAME}__icon`)}
        onClick={onNextMonth}
        type="button"
      >
        {'->'}
      </button>
    </div>
  ),
);
