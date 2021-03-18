import React, { memo } from 'react';
import classNames from 'classnames/bind';
import { IconArrow } from './_components';
import './CalendarHeader.scss';

const CLASS_NAME = 'CalendarHeader';
const cn = classNames;

type PropsType = {
  month: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
};

export const CalendarHeader = memo(({ month, onPrevMonth, onNextMonth }: PropsType) => (
  <div className={cn(`${CLASS_NAME}`)}>
    <button className={cn(`${CLASS_NAME}__icon`)} type="button" onClick={onPrevMonth}>
      <IconArrow />
    </button>

    <span className={cn(`${CLASS_NAME}__month-name`)}>{month}</span>

    <button className={cn(`${CLASS_NAME}__icon`)} type="button" onClick={onNextMonth}>
      <IconArrow isRight />
    </button>
  </div>
));
