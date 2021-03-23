import React, { forwardRef, useCallback } from 'react';
import classNames from 'classnames';
import { SliderInput } from './_components/SliderInput/SliderInput';
import { SliderChangeParamsType, SliderSize, SliderVariant } from './_types';
import './Slider.scss';

const CLASS_NAME = 'Slider';

type PropsType = {
  value: number | string;
  onChange: (params: SliderChangeParamsType) => void;
  onAfterChange?: (params: any) => void;
  min?: number;
  max?: number;
  step?: number;
  isDisabled?: boolean;
  size?: SliderSize;
  variant?: SliderVariant;
  className?: string;
  customThumb?: React.ReactNode;
};

export const Slider = forwardRef(
  (
    {
      size = 'l',
      isDisabled = false,
      value,
      onChange = () => {},
      onAfterChange = () => {},
      min = 0,
      max = 100,
      step = 1,
      variant = 'primary',
      className,
      customThumb = null
    }: PropsType,
    ref
  ) => {
    const onMouseUpOrTouchEnd = useCallback(
      ({ event }) => {
        if (value !== event.target.value) {
          onAfterChange({ event, value: event.target.valueAsNumber });
        }

        onChange({ event, value: event.target.value });
      },
      [value, onAfterChange, onChange]
    );

    return (
      <div
        className={classNames(`${CLASS_NAME}__wrap`, { [`${CLASS_NAME}__wrap--${size}`]: size })}
      >
        <SliderInput
          className={classNames(
            CLASS_NAME,
            {
              [`${CLASS_NAME}--${size}`]: size,
              [`${CLASS_NAME}--isDisabled`]: isDisabled,
              [`${CLASS_NAME}--${variant}`]: variant
            },
            className
          )}
          customThumb={customThumb}
          isDisabled={isDisabled}
          max={max}
          min={min}
          onChange={onChange}
          onMouseUpOrTouchEnd={onMouseUpOrTouchEnd}
          ref={ref}
          step={step}
          value={value}
        />
      </div>
    );
  }
);
