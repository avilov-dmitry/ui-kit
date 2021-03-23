import React, { memo, RefObject } from 'react';
import cn from 'classnames';
import { SliderValuesType } from '../../_types';
import { RANGE_MAX_VALUE, RANGE_MIN_VALUE, SLIDER_VALUES } from '../../_constants';
import { SliderThumb } from './_components/SliderThumb/SliderThumb';
import './TimeIntervelView.scss';

const CLASS_NAME = 'TimeIntervelView';

type PropsType = {
  firstVal: string;
  secondVal: string;
  trackRef: RefObject<HTMLDivElement>;
  firstTooltipText: string;
  secondTooltipText: string;
  mobileTooltipText: string;
  onChangeFirst: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSecond: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TimeIntervelView = memo(
  ({
    firstVal,
    secondVal,
    trackRef,
    firstTooltipText,
    secondTooltipText,
    mobileTooltipText,
    onChangeFirst,
    onChangeSecond
  }: PropsType) => (
    <div className={cn(CLASS_NAME)}>
      <input
        className={cn(`${CLASS_NAME}__range-input`)}
        max={RANGE_MAX_VALUE}
        min={RANGE_MIN_VALUE}
        onChange={onChangeFirst}
        type="range"
        value={firstVal}
      />

      <input
        className={cn(`${CLASS_NAME}__range-input`)}
        max={RANGE_MAX_VALUE}
        min={RANGE_MIN_VALUE}
        onChange={onChangeSecond}
        type="range"
        value={secondVal}
      />

      <div className={cn(`${CLASS_NAME}__slider`)}>
        <div className={cn(`${CLASS_NAME}__track`)} ref={trackRef}>
          <SliderThumb tooltipText={firstTooltipText} />

          <SliderThumb isMobile tooltipText={mobileTooltipText} />

          <SliderThumb tooltipText={secondTooltipText} />
        </div>
      </div>

      <div className={cn(`${CLASS_NAME}__time`)}>
        {SLIDER_VALUES.map(({ hourText, isVisible }: SliderValuesType) => (
          <div className={cn(`${CLASS_NAME}__hour-line`)} key={hourText}>
            {isVisible && <div className={cn(`${CLASS_NAME}__hour-text`)}>{hourText}</div>}
          </div>
        ))}
      </div>
    </div>
  )
);
