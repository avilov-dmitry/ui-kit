import React, { memo, useCallback, useState } from 'react';
import cn from 'classnames';
import { getBackground } from './_utils';

import './ThumbSlider.scss';

type PropsType = {
    max?: number;
    min?: number;
    onChange: (params: any) => void;
    value: number;
    className?: string;
};

const CLASS_NAME = 'ThumbSlider';

export const ThumbSlider = memo(({ className, max = 100, min = 0, onChange, value }: PropsType) => {
    const [styles, setStyles] = useState({
        background: getBackground({ progress: (value / max) * 100 }),
    });

    const handleChange = useCallback(
        (event) => {
            const value = event.target.value;
            const progress = Math.round((value / max) * 100);

            onChange({ value: progress });

            setStyles({ background: getBackground({ progress }) });
        },
        [max, onChange]
    );

    return (
        <input
            className={cn(CLASS_NAME, className)}
            style={styles}
            type="range"
            min={min}
            max={max}
            onChange={handleChange}
            value={value}
        />
    );
});
