type ParamsType = {
  value: string;
  maxValue: string;
  rangeWidth: number;
};

export const sumPercent = ({ value, maxValue, rangeWidth }: ParamsType): number =>
  Math.abs((Number(value) / Number(maxValue)) * rangeWidth);
