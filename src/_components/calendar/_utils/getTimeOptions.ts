export const getTimeOptions = (size: number) =>
  new Array(size).fill(0).map((item, index) => ({
    id: index,
    label: index < 10 ? `0${index}` : `${index}`
  }));
