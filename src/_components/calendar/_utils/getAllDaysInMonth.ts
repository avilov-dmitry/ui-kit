export const getAllDaysInMonth = (getDate: Date) => {
  const getMonth = getDate.getMonth();
  const year = getDate.getFullYear();
  const date = new Date(year, getMonth, 1);
  const allDaysInMonth = [];
  while (date.getMonth() === getMonth) {
    allDaysInMonth.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return allDaysInMonth;
};
