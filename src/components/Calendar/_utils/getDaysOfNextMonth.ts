export const getDaysOfNextMonth = (firstDayNextMonth: Date) => {
  let countDays;
  if (firstDayNextMonth.getDay() === 0) {
    countDays = 1;
  } else if (firstDayNextMonth.getDay() === 1) {
    countDays = 0;
  } else {
    countDays = 8 - firstDayNextMonth.getDay();
  }

  return Array.from(Array(countDays).keys());
};
