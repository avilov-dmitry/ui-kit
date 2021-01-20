import React, { useCallback, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import { getWeekDays } from './_utils';
import './calendar.scss';
import { CalendarHeader } from './_components/calendar-header';
import { getMonthName } from './_utils/getMonthName';

const CLASS_NAME = 'Calendar';
const cn = classNames;

type PropsType = {
  id: string;
  lang: any;
};

export const Calendar = ({ id, lang }: PropsType) => {
  const [getDate, setDate] = useState(new Date());
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const month: string = useMemo(
    () => `${getMonthName(lang, getDate.getMonth())} ${getDate.getFullYear()}`,
    [getDate],
  );

  const weekDays = useMemo(() => getWeekDays(lang), []);

  const handlePrevMonth = useCallback(() => {
    const prevMont = getDate.setMonth(getDate.getMonth() - 1);
    setDate(new Date(prevMont));
  }, [getDate]);

  const handleNextMonth = useCallback(() => {
    const nextMont = getDate.setMonth(getDate.getMonth() + 1);
    setDate(new Date(nextMont));
  }, [getDate]);

  return (
    <div className={cn(CLASS_NAME, {})} id={id}>
      <CalendarHeader
        month={month}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <div className={cn(`${CLASS_NAME}__week`)}>
        {weekDays.map((dayName, key) => (
          <span
            className={cn(`${CLASS_NAME}__week-name`, {
              [`${CLASS_NAME}__week-name-end`]: key >= 5,
            })}
            key={`w${dayName}`}
          >
            {dayName}
          </span>
        ))}
      </div>
    </div>
  );
};
