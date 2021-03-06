import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Overlay, OverlayPropsType } from 'components';

export default {
    title: 'Example/Overlay',
    background: '#EFEEEE',
    component: Overlay,
    argTypes: {
        isAbsolute: {
            control: { type: 'boolean' },
        },
        isTransparent: {
            control: { type: 'boolean' },
        },
    },
    args: {
        onClick: () => console.warn('Click on Overlay'),
    },
} as Meta;

export const Simple: Story<OverlayPropsType> = (args: OverlayPropsType) => {
    return (
        <div  style={{ width: '200px', height: '200px', margin: 'auto', position: 'relative' }}>
            <Overlay {...args}>
                <div>
                    <span style={{ color: '#333', textDecoration: 'line-through' }}>99 ₽</span>
                </div>
            </Overlay>
        </div>
    );
};
