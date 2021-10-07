import React, { memo, useCallback, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import { changeMonth, getLocaleMonthAndYear } from './_utils/date';
import { WeekDays } from './_types';
import { ButtonArrow, Month } from './_components';
import styles from './index.module.scss';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Calendar';

type PropsType = {
    locale?: string;
    title: string;
    weekDays: WeekDays;
    date: Date;
    onChange: (newDate: Date) => void;
};

export const Calendar = memo(({ title, date, locale = 'ru', weekDays, onChange }: PropsType) => {
    const [selectedDay, setSelectedDay] = useState(new Date().getDate());

    const handleClickPreviousMonth = useCallback(() => {
        onChange(changeMonth(date, 'previous'));
    }, [date]);

    const handleClickNextMonth = useCallback(() => {
        onChange(changeMonth(date));
    }, [date]);

    const handleClickDay = useCallback((day) => setSelectedDay(day), []);

    const monthName = useMemo(() => getLocaleMonthAndYear(date, locale), [date, locale]);
    const year = useMemo(() => date.getFullYear(), [date]);
    const month = useMemo(() => date.getMonth(), [date]);

    return (
        <div className={cn(CLASS_NAME)}>
            <div className={cn(`${CLASS_NAME}__header`)}>
                <span className={cn(`${CLASS_NAME}__title`)}>{title}</span>
                <div className={cn(`${CLASS_NAME}__date`)}>
                    <span className={cn(`${CLASS_NAME}__month-name`)}>{monthName}</span>
                    <div className={cn(`${CLASS_NAME}__left-arrow`)}>
                        <ButtonArrow destination="left" onClick={handleClickPreviousMonth} />
                    </div>
                    <div className={cn(`${CLASS_NAME}__right-arrow`)}>
                        <ButtonArrow destination="right" onClick={handleClickNextMonth} />
                    </div>
                </div>
            </div>
            <div className={cn(`${CLASS_NAME}__body`)}>
                <div className={cn(`${CLASS_NAME}__month`)}>
                    <Month
                        selectedDay={selectedDay}
                        year={year}
                        month={month}
                        weekDays={weekDays}
                        onClickDay={handleClickDay}
                    />
                </div>
            </div>
        </div>
    );
});
