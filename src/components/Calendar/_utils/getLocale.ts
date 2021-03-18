export const getLocale = (inDate: string | Date) => {
  const dt = new Date(inDate);
  dt.setDate(dt.getDate() + 1);

  const options: any = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'UTC'
  };
  return dt.toLocaleDateString('en', options);
};
