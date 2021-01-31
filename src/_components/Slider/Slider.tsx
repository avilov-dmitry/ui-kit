import React, { forwardRef, useCallback, useState } from 'react';
import classNames from 'classnames';
import { SliderInput } from './_components/SliderInput/SliderInput';
import { SliderSize, SliderVariant } from './_types';

const CLASS_NAME = 'Slider';

type PropsType = {
  value: number | string;
  onChange: () => void;
  onAfterChange: (params: any) => void;
  min: number;
  max: number;
  step: number;
  disabled: boolean;
  size: SliderSize;
  variant: SliderVariant;
  className: string;
};

export const Slider = forwardRef(
  (
    {
      size,
      disabled = false,
      value,
      onChange = () => {},
      onAfterChange = () => {},
      min = 0,
      max = 100,
      step = 1,
      variant = 'primary',
      className
    }: PropsType,
    ref
  ) => {
    const [prevValue, setPrevValue] = useState();

    const onMouseUpOrTouchEnd = useCallback(
      (event) => {
        if (prevValue !== event.target.value) {
          onAfterChange({ event, value: event.target.valueAsNumber });
        }

        setPrevValue(event.target.value);
      },
      [prevValue, onAfterChange]
    );

    return (
      <div
        className={classNames(`${CLASS_NAME}__wrap`, { [`${CLASS_NAME}__wrap--${size}`]: size })}
      >
        <SliderInput
          className={classNames(className, CLASS_NAME, {
            [`${CLASS_NAME}__${size}`]: size,
            [`${CLASS_NAME}__disabled`]: disabled,
            [`${CLASS_NAME}__${variant}`]: variant
          })}
          isDisabled={disabled}
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
