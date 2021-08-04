import React, { useCallback, useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { ThumbSlider, InfiniteScrollPropsType } from '../source/components';

export default {
    title: 'Example/ThumbSlider',
    background: '#EFEEEE',
    component: ThumbSlider,
} as Meta;

export const Simple: Story<InfiniteScrollPropsType> = () => {
    const [value, setValue] = useState(0);

    const handleChange = useCallback(({ value }) => {
        setValue(value);
    }, []);

    return (
        <div style={{ padding: 25, fontSize: 30 }}>
            <div style={{ width: 200 }}>
                <ThumbSlider value={value} onChange={handleChange} />
            </div>
            <div style={{ paddingTop: 25 }}>{value}</div>
        </div>
    );
};
