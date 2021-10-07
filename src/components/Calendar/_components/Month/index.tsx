import React, { useMemo, memo } from 'react';
import classNames from 'classnames/bind';
import { getMonthMatrix } from '../../_utils/getMonthMatrix';
import { WeekDays } from '../../_types';
import { DayCell } from '../DayCell';
import styles from './index.module.scss';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Month';

type PropsType = {
    selectedDay: number;
    year: number;
    month: number;
    weekDays: WeekDays;
    onClickDay: (day: number) => void;
};

export const Month = memo(({ selectedDay, year, month, weekDays, onClickDay }: PropsType) => {
    const monthMatrix = useMemo(() => getMonthMatrix(year, month), [month, year]);

    return (
        <div className={cn(CLASS_NAME)}>
            <div className={cn(`${CLASS_NAME}__header`)}>
                {weekDays.long.map((weekDay) => (
                    <div key={weekDay} className={cn(`${CLASS_NAME}__week-day`)}>
                        {weekDay}
                    </div>
                ))}
            </div>
            <div className={cn(`${CLASS_NAME}__header-mobile`)}>
                {weekDays.short.map((weekDay, index) => (
                    <div
                        key={weekDay}
                        className={cn(`${CLASS_NAME}__week-day`, {
                            [`${CLASS_NAME}__week-day--weekend`]: index >= 5,
                        })}
                    >
                        {weekDay}
                    </div>
                ))}
            </div>
            <div className={cn(`${CLASS_NAME}__body`)}>
                {monthMatrix &&
                    monthMatrix.map(({ keyRow, week }: any) => (
                        <div key={keyRow} className={cn(`${CLASS_NAME}__week`)}>
                            {week.map((day: any) => {
                                return (
                                    <DayCell
                                        key={day.keyDay}
                                        day={day}
                                        selectedDay={selectedDay}
                                        onClickDay={onClickDay}
                                    />
                                );
                            })}
                        </div>
                    ))}
            </div>
        </div>
    );
});
