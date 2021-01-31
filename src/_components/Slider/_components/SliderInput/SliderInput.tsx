import React, { memo, useCallback } from 'react';

type PropsType = {
  className: string;
  isDisabled: boolean;
  max: number;
  min: number;
  onChange: (params: any) => void;
  onMouseUp?: (params: any) => void;
  onMouseUpOrTouchEnd?: (params: any) => void;
  onTouchEnd?: (params: any) => void;
  ref?: any;
  step: number;
  value: number | string;
  [key: string]: any;
};

export const SliderInput = memo(
  ({
    className,
    max,
    min,
    onChange,
    onMouseUp,
    onMouseUpOrTouchEnd,
    onTouchEnd,
    step,
    value,
    ...rest
  }: PropsType) => {
    const handleOnChange = useCallback(
      (event) => onChange({ event, value: event.target.valueAsNumber }),
      [onChange]
    );

    const handleOnMouseUp = useCallback(
      (event) => {
        onMouseUpOrTouchEnd({ event });
        if (onMouseUp) {
          onMouseUp({ event });
        }
      },
      [onMouseUp, onMouseUpOrTouchEnd]
    );

    const handleOnTouchEnd = useCallback(
      (event) => {
        onMouseUpOrTouchEnd({ event });
        if (onTouchEnd) {
          onTouchEnd({ event });
        }
      },
      [onTouchEnd, onMouseUpOrTouchEnd]
    );

    return (
      <input
        className={className}
        max={max}
        min={min}
        onChange={handleOnChange}
        onMouseUp={handleOnMouseUp}
        onTouchEnd={handleOnTouchEnd}
        step={step}
        type="range"
        value={value}
        {...rest}
      />
    );
  }
);
