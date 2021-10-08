export const changeMonth = (date: Date, destination: 'previous' | 'next' = 'next'): Date => {
    const month = destination === 'next' ? date.getMonth() + 1 : date.getMonth() - 1;

    return new Date(date.getFullYear(), month, 1);
};

export const getLocaleMonthAndYear = (date: Date, locale: string): string => {
    return `${date?.toLocaleString(locale, {
        month: 'long',
    })} ${date.getFullYear()}`;
};

export const getStartOfDay = (date: Date = new Date()): string =>
    new Date(date.setHours(0, 0, 0, 0)).toISOString();

export const checkIsToday = (date: Date): boolean => {
    const today = getStartOfDay();

    return getStartOfDay(date) === today;
};

export const checkIsPreviousDate = (date: Date): boolean => {
    const today = getStartOfDay();

    const todayTimestamp = new Date(today).getTime();

    return date.getTime() < todayTimestamp;
};
