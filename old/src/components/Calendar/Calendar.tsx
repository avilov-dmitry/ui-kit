import React, { memo, useCallback, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import { getWeekDays, getMonthName, getAllDaysInMonth, getDaysOfNextMonth } from './_utils';
import { CalendarHeader } from './_components/CalendarHeader';
import { CalendarTime } from './_components/CalendarTime';
import { CalendarTimeType } from './_types';
import { CalendarDayView } from './_components/CalendarDayView';
import './Calendar.scss';

const CLASS_NAME = 'Calendar';
const cn = classNames;

type PropsType = {
  lang?: any;
  disabled?: boolean;
  id: string;
  onChange: any;
  value: any;
  withTime?: boolean;
};

export const Calendar = memo(
  ({ disabled = false, id, lang = 'en', onChange, value, withTime = false }: PropsType) => {
    const [getDate, setDate] = useState(new Date());
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const month: string = useMemo(
      () => `${getMonthName(lang, getDate.getMonth())} ${getDate.getFullYear()}`,
      [lang, getDate]
    );

    const weekDays = useMemo(() => getWeekDays(lang), [lang]);

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

    const firstWeelOfnextMonth = useMemo(
      () =>
        getDaysOfNextMonth(
          new Date(allDaysInMonth[0].getFullYear(), allDaysInMonth[0].getMonth() + 1, 1)
        ),
      [allDaysInMonth]
    );

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
        const newDate = new Date(value);
        newDate.setMinutes(minutes);
        newDate.setHours(hours);
        setDate(newDate);
        onChange({ value: newDate });
      },
      [value, onChange]
    );

    return (
      <div
        className={cn(CLASS_NAME, {
          [`${CLASS_NAME}--withTime`]: withTime
        })}
        id={id}
      >
        <div
          className={cn(`${CLASS_NAME}__month`, {
            [`${CLASS_NAME}__month--withTime`]: withTime
          })}
        >
          <CalendarHeader
            month={month}
            onNextMonth={handleNextMonth}
            onPrevMonth={handlePrevMonth}
          />
          <div className={cn(`${CLASS_NAME}__week`)}>
            {weekDays.map((dayName, key) => (
              <span
                className={cn(`${CLASS_NAME}__week-name`, {
                  [`${CLASS_NAME}__week-name-end`]: key >= 5
                })}
                key={`w${dayName}`}
              >
                {dayName}
              </span>
            ))}
          </div>
          <div className={cn(`${CLASS_NAME}__days`)}>
            {prevfirstDayOnWeek.map((el, index) => (
              <button className={cn(`${CLASS_NAME}__day-empty`)} key={el} type="button">
                {prevlastDayPrevMonth.getDate() - (prevfirstDayOnWeek.length - index - 1)}
              </button>
            ))}
            {allDaysInMonth.map((day, index) => (
              <CalendarDayView
                day={day}
                disabled={disabled}
                index={index}
                key={String(day)}
                length={allDaysInMonth.length}
                onClick={onChange}
                value={value}
              />
            ))}
            {firstWeelOfnextMonth.map((el, index) => (
              <button className={cn(`${CLASS_NAME}__day-empty`)} key={el} type="button">
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
  }
);
