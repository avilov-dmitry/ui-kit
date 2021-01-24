import React, { useCallback, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import { getWeekDays } from './_utils';
import { CalendarHeader } from './_components/CalendarHeader';
import { getMonthName } from './_utils/getMonthName';
import { CalendarTime } from './_components/CalendarTime';
import { CalendarTimeType } from './_types';
import { CalendarDayView } from './_components/CalendarDayView';
import { getAllDaysInMonth } from './_utils/getAllDaysInMonth';
import { getDaysOfNextMonth } from './_utils/getDaysOfNextMonth';
import './Calendar.scss';

const CLASS_NAME = 'Calendar';
const cn = classNames;

type PropsType = {
  lang?: any;
  disabled?: boolean;
  id: string;
  onClick: any;
  value: any;
  withTime?: boolean;
};

export const Calendar = ({
  disabled = false,
  id,
  lang = 'en',
  onClick,
  value,
  withTime = false
}: PropsType) => {
  const [getDate, setDate] = useState(new Date());
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const month: string = useMemo(
    () => `${getMonthName(lang, getDate.getMonth())} ${getDate.getFullYear()}`,
    [lang, getDate]
  );

  const weekDays = useMemo(() => getWeekDays(lang), [lang]);

  const handlePrevMonth = useCallback(() => {
    const prevMont = getDate.setMonth(getDate.getMonth() - 1);
    setDate(new Date(prevMont));
  }, [getDate]);

  const handleNextMonth = useCallback(() => {
    const nextMont = getDate.setMonth(getDate.getMonth() + 1);
    setDate(new Date(nextMont));
  }, [getDate]);

  const handleChangeTime = useCallback(
    ({ minutes, hours }: CalendarTimeType) => {
      const newDate = getDate;
      getDate.setMinutes(minutes);
      getDate.setHours(hours);
      setDate(new Date(newDate));
    },
    [getDate]
  );

  // todo
  const handleChangeDate = useCallback(
    ({ minutes, hours }: CalendarTimeType) => {
      const newDate = getDate;
      getDate.setMinutes(minutes);
      getDate.setHours(hours);
      setDate(new Date(newDate));

      if (withTime) {
        onClick();
      } else {
        onClick();
      }
    },
    [getDate, onClick, withTime]
  );

  const allDaysInMonth = useMemo(() => getAllDaysInMonth(getDate), [getDate]);

  const prevfirstDayOnWeek = new Array(
    allDaysInMonth[0] && allDaysInMonth[0].getDay() === 0 ? 6 : allDaysInMonth[0].getDay() - 1
  )
    .fill(1)
    .map((item, index) => item + index);

  const prevlastDayPrevMonth = new Date(
    allDaysInMonth[0].getFullYear(),
    allDaysInMonth[0].getMonth(),
    0
  );

  const firstDayNextMonth = useMemo(
    () => new Date(allDaysInMonth[0].getFullYear(), allDaysInMonth[0].getMonth() + 1, 1),
    [allDaysInMonth]
  );

  const nextfirstDayOnWeek = useMemo(() => getDaysOfNextMonth(firstDayNextMonth), [
    firstDayNextMonth
  ]);
  // todo end

  return (
    <div className={cn(CLASS_NAME, {})} id={id}>
      <div className={cn(`${CLASS_NAME}__month`)}>
        <CalendarHeader month={month} onNextMonth={handleNextMonth} onPrevMonth={handlePrevMonth} />
        <div className={cn(`${CLASS_NAME}__week`)}>
          {weekDays.map((dayName, key) => (
            <span
              key={`w${dayName}`}
              className={cn(`${CLASS_NAME}__week-name`, {
                [`${CLASS_NAME}__week-name-end`]: key >= 5
              })}
            >
              {dayName}
            </span>
          ))}
        </div>
        <div className={cn(`${CLASS_NAME}__days`)}>
          {prevfirstDayOnWeek.map((el, index) => (
            <button key={el} className={cn(`${CLASS_NAME}__day-empty`)} type="button">
              {prevlastDayPrevMonth.getDate() - (prevfirstDayOnWeek.length - index - 1)}
            </button>
          ))}
          {allDaysInMonth.map((day, index) => (
            <CalendarDayView
              key={day}
              day={day}
              disabled={disabled}
              index={index}
              length={allDaysInMonth.length}
              onClick={onClick}
              value={value}
            />
          ))}
          {nextfirstDayOnWeek.map((el, index) => (
            <button key={el} className={cn(`${CLASS_NAME}__day-empty`)} type="button">
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      {withTime && (
        <div className={cn(`${CLASS_NAME}__time`)}>
          <CalendarTime
            hours={getDate.getHours()}
            minutes={getDate.getMinutes()}
            onChange={handleChangeTime}
          />
        </div>
      )}
    </div>
  );
};
