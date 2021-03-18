import React, { memo, useCallback, useMemo } from 'react';
import classNames from 'classnames/bind';
import './CalendarTime.scss';
import { CalendarTimeType } from '../../_types';
import { getTimeOptions } from '../../_utils/getTimeOptions';
import { CalendarTimeSelect } from './CalendarTimeSelect';

const CLASS_NAME = 'CalendarTime';
const cn = classNames;

type PropsType = {
  hours: number;
  minutes: number;
  onChange: (params: CalendarTimeType) => void;
};

export const CalendarTime = memo(({ minutes, hours, onChange }: PropsType) => {
  const hoursOptions = useMemo(() => getTimeOptions(24), []);
  const minutesOptions = useMemo(() => getTimeOptions(60), []);

  const handleChangeHours = useCallback(
    (selected) => {
      onChange({ minutes, hours: selected });
    },
    [minutes, onChange]
  );

  const handleChangeMinutes = useCallback(
    (selected) => {
      onChange({ hours, minutes: selected });
    },
    [hours, onChange]
  );

  const time = useMemo(() => {
    const visibleHours = `${hours < 10 ? `0${hours}` : hours}`;
    const visibleMinutes = `${minutes < 10 ? `0${minutes}` : minutes}`;
    return `${visibleHours} : ${visibleMinutes}`;
  }, [hours, minutes]);

  return (
    <div className={cn(`${CLASS_NAME}`)}>
      <div className={cn(`${CLASS_NAME}__selected-time`)}>{time}</div>
      <div className={cn(`${CLASS_NAME}__selects`)}>
        <CalendarTimeSelect onClick={handleChangeHours} options={hoursOptions} value={hours} />
        <CalendarTimeSelect
          onClick={handleChangeMinutes}
          options={minutesOptions}
          value={minutes}
        />
      </div>
    </div>
  );
});