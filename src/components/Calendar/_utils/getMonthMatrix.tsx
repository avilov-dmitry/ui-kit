import { checkIsToday, checkIsPreviousDate } from './date';

export const getMonthMatrix = (year: number, month: number): any => {
    const ROWS = 6;
    const COLUMNS = 7;
    const MILLISECONDS_IN_DAY = 1000 * 3600 * 24;

    const firstDayOfMonth = new Date(year, month);
    const firstDayOfNextMonth = new Date(year, month + 1);

    const lastDayOfCurrentMonthMilliseconds = Number(firstDayOfNextMonth) - Number(firstDayOfMonth);

    const lastDayOfCurrentMonth = lastDayOfCurrentMonthMilliseconds / MILLISECONDS_IN_DAY;

    const monthMatrix = [];
    let dayOfWeekIndex = 1 - ((firstDayOfMonth.getDay() + 6) % 7);

    for (let i = 0; i < ROWS; i += 1) {
        const week = [];
        for (let j = 0; j < COLUMNS; j += 1) {
            week.push(
                dayOfWeekIndex > 0 && dayOfWeekIndex <= lastDayOfCurrentMonth ? dayOfWeekIndex : ''
            );
            dayOfWeekIndex += 1;
        }
        if (week.some((day) => day)) {
            monthMatrix.push({
                keyRow: i,
                week: week.map((day, index) => {
                    const date = new Date(year, month, day);
                    const lastDay = new Date(year, month + 1, 0).getDate();
                    const monday = index === 0;
                    const sunday = index === 6;

                    return {
                        day,
                        keyDay: `day_${i}-${index}`,
                        isPreviousDay: checkIsPreviousDate(date),
                        isLastMonthDay: false,
                        isToday: checkIsToday(date),
                        hasTopLeftRadius: day === 1 || (i === 1 && monday && day <= COLUMNS),
                        hasTopRightRadius: i === 0 && sunday,
                        hasBottomLeftRadius: day > lastDay - COLUMNS && monday,
                        hasBottomRightRadius:
                            day === lastDay || (day > lastDay - COLUMNS && sunday),
                    };
                }),
            });
        }
    }

    return monthMatrix;
};
