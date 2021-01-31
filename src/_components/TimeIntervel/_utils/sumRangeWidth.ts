import { RefObject } from 'react';
import { RANGE_MAX_VALUE, RANGE_REVERSE_VALUES, RANGE_WIDTH_IN_PERCENT } from '../_constants';
import { sumPercent } from './sumPercent';

type ParamsType = {
  trackRef: RefObject<HTMLDivElement>;
  isFirst?: boolean;
  isInit?: boolean;
  firstRange: string;
  secondRange: string;
};

export const sumRangeWidth = ({ isFirst, firstRange, secondRange, isInit }: ParamsType) => {
  const value = isFirst ? firstRange : secondRange;
  let left = '';
  let right = '';

  if (isFirst) {
    const leftPercent = sumPercent({
      value,
      maxValue: RANGE_MAX_VALUE,
      rangeWidth: RANGE_WIDTH_IN_PERCENT
    });

    left = `${leftPercent}%`;
  } else {
    const rightPercent = sumPercent({
      value: RANGE_REVERSE_VALUES[Number(value)],
      maxValue: RANGE_MAX_VALUE,
      rangeWidth: RANGE_WIDTH_IN_PERCENT
    });

    right = `${rightPercent}%`;
  }

  if (isInit) {
    const leftPercent = sumPercent({
      value: firstRange,
      maxValue: RANGE_MAX_VALUE,
      rangeWidth: RANGE_WIDTH_IN_PERCENT
    });

    const rightPercent = sumPercent({
      value: RANGE_REVERSE_VALUES[Number(secondRange)],
      maxValue: RANGE_MAX_VALUE,
      rangeWidth: RANGE_WIDTH_IN_PERCENT
    });

    left = `${leftPercent}%`;
    right = `${rightPercent}%`;
  }

  return {
    left,
    right
  };
};
