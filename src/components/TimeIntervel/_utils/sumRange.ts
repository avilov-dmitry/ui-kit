import { RANGE_GAP } from '../_constants';

type ParamsType = {
  firstVal: string;
  secondVal: string;
  isFirst: boolean;
};

export const sumRange = ({ firstVal, secondVal, isFirst }: ParamsType) => {
  const firstValNum = Number(firstVal);
  const secondValNum = Number(secondVal);

  const firstRange = secondValNum - RANGE_GAP;
  const secondRange = firstValNum + RANGE_GAP;

  if (isFirst && firstValNum >= firstRange) {
    return {
      firstRange: String(firstRange),
      secondRange: secondVal
    };
  }

  if (!isFirst && secondValNum <= secondRange) {
    return {
      firstRange: firstVal,
      secondRange: String(secondRange)
    };
  }

  return {
    firstRange: firstVal,
    secondRange: secondVal
  };
};
