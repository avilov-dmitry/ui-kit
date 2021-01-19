import React from 'react';
import classNames from 'classnames/bind';
import { getWeekDays } from './_utils';
import './calendar.scss';

const CLASS_NAME = 'Calendar';
const cn = classNames;

type PropsType = {
  id: string;
  lang: any;
};

export const Calendar = ({ id, lang }: PropsType) => {
  const weekDays = getWeekDays(lang);

  return (
    <div className={cn(CLASS_NAME, {})} id={id}>
      <div className={cn(`${CLASS_NAME}__week`)}>
        {weekDays.map((dayName, key) => (
          <span
            key={`w${dayName}`}
            className={cn(`${CLASS_NAME}__week-name`, {
              [`${CLASS_NAME}__week-name-end`]: key >= 5,
            })}
          >
            {dayName}
          </span>
        ))}
      </div>
    </div>
  );
};
