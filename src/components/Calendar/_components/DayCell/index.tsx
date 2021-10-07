import React, { memo, useCallback, useMemo } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Day-cell';

type DayType = {
    day: number;
    isToday: boolean;
    isLastMonthDay: boolean;
    isPreviousDay: boolean;
    hasTopLeftRadius: boolean;
    hasTopRightRadius: boolean;
    hasBottomLeftRadius: boolean;
    hasBottomRightRadius: boolean;
};

type PropsType = {
    day: DayType;
    selectedDay: number;
    onClickDay: (day: number) => void;
};

export const DayCell = memo(
    ({
        day: {
            day,
            isToday,
            isLastMonthDay,
            isPreviousDay,
            hasTopLeftRadius,
            hasTopRightRadius,
            hasBottomLeftRadius,
            hasBottomRightRadius,
        },
        selectedDay,
        onClickDay,
    }: PropsType) => {
        const handleClickDay = useCallback((event) => {
            onClickDay(Number(event.target.dataset.day));
        }, []);

        const isFirstDay = useMemo(() => day === 1, [day]);

        const isSelected = useMemo(() => selectedDay === day, [day, selectedDay]);

        const optional = useMemo(() => {
            return day
                ? {
                      'data-day': day,
                      onClick: handleClickDay,
                      role: 'button',
                      tabIndex: 0,
                  }
                : {};
        }, [day]);

        return (
            <div
                className={cn(`${CLASS_NAME}`, {
                    [`${CLASS_NAME}--today`]: isToday && Boolean(day),
                    [`${CLASS_NAME}--past`]: isPreviousDay,
                    [`${CLASS_NAME}--top-left`]: hasTopLeftRadius,
                    [`${CLASS_NAME}--top-right`]: hasTopRightRadius,
                    [`${CLASS_NAME}--bottom-left`]: hasBottomLeftRadius,
                    [`${CLASS_NAME}--bottom-right`]: hasBottomRightRadius,
                    [`${CLASS_NAME}--is-first`]: isFirstDay,
                    [`${CLASS_NAME}--is-last`]: isLastMonthDay,
                    [`${CLASS_NAME}--selected`]: isSelected,
                    [`${CLASS_NAME}--hidden`]: Boolean(!day),
                })}
                {...optional}
            >
                {day}
            </div>
        );
    }
);
