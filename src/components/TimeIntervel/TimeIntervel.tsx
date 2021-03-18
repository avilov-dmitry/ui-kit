import React, { memo, RefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { sumRange } from './_utils/sumRange';
import { SLIDER_VALUES } from './_constants';
import { IntervalValuesType } from './_types';
import { TimeIntervelView } from './_components';
import { sumRangeWidth } from './_utils/sumRangeWidth';

type PropsType = {
  id?: string;
  onChange: (values: IntervalValuesType) => void;
};

export const TimeIntervel = memo(({ id = '', onChange }: PropsType) => {
  const [firstVal, setFirstVal] = useState<any>('4'); // 12 часов
  const [secondVal, setSecondVal] = useState<any>('10'); // 18 часов

  const trackRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trackRef && trackRef.current) {
      const { left, right } = sumRangeWidth({
        firstRange: firstVal,
        secondRange: secondVal,
        trackRef,
        isInit: true
      });

      trackRef.current.style.left = left;
      trackRef.current.style.right = right;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeRange = useCallback(
    ({ firstRange, secondRange }) => {
      setFirstVal(firstRange);
      setSecondVal(secondRange);
      onChange({
        hourFrom: SLIDER_VALUES[firstRange].hour,
        hourTo: SLIDER_VALUES[secondRange].hour
      });
    },
    [onChange]
  );

  const handleChangeFirst = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      const { firstRange, secondRange } = sumRange({
        firstVal: value,
        secondVal,
        isFirst: true
      });

      const { left, right } = sumRangeWidth({
        trackRef,
        isFirst: true,
        firstRange,
        secondRange
      });
      if (trackRef.current) {
        trackRef.current.style.left = left;
        trackRef.current.style.right = right;
      }

      changeRange({ firstRange, secondRange });
    },
    [changeRange, secondVal]
  );

  const handleChangeSecond = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      const { firstRange, secondRange } = sumRange({
        firstVal,
        secondVal: value,
        isFirst: false
      });

      const { left, right } = sumRangeWidth({
        trackRef,
        firstRange,
        secondRange
      });
      if (trackRef.current) {
        trackRef.current.style.left = left;
        trackRef.current.style.right = right;
      }

      changeRange({ firstRange, secondRange });
    },
    [changeRange, firstVal]
  );

  const firstTooltipText = useMemo(
    () => (firstVal ? `с ${SLIDER_VALUES[firstVal].hourText}` : ''),
    [firstVal]
  );

  const secondTooltipText = useMemo(
    () => (secondVal ? `до ${SLIDER_VALUES[secondVal].hourText}` : ''),
    [secondVal]
  );

  const mobileTooltipText = useMemo(() => `${firstTooltipText} ${secondTooltipText}`, [
    firstTooltipText,
    secondTooltipText
  ]);

  return (
    <TimeIntervelView
      firstTooltipText={firstTooltipText}
      firstVal={firstVal}
      mobileTooltipText={mobileTooltipText}
      onChangeFirst={handleChangeFirst}
      onChangeSecond={handleChangeSecond}
      secondTooltipText={secondTooltipText}
      secondVal={secondVal}
      trackRef={trackRef}
    />
  );
});
