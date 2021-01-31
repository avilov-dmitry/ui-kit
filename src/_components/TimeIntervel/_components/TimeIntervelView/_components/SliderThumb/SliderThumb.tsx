import React, { memo } from 'react';
import cn from 'classnames';
import './SliderThumb.scss';

const CLASS_NAME = 'SliderThumb';

type PropsType = {
  tooltipText: string;
  isMobile?: boolean;
};

export const SliderThumb = memo(({ tooltipText, isMobile }: PropsType) => (
  <div
    className={cn(CLASS_NAME, {
      [`${CLASS_NAME}--isMobile`]: isMobile
    })}
  >
    <div
      className={cn(`${CLASS_NAME}__tooltip`, {
        [`${CLASS_NAME}__tooltip--isMobile`]: isMobile
      })}
    >
      {tooltipText}
    </div>
  </div>
));
