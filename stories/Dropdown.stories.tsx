import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, Dropdown, TooltipPropsType } from 'components';

export default {
    title: 'Example/Dropdown',
    background: '#EFEEEE',
    component: Dropdown,
    argTypes: {
        position: {
            control: { type: 'select' },
        },
        theme: {
            control: { type: 'select' },
        },
        withArrow: {
            control: { type: 'boolean' },
        },
    },
    args: {
        content: 'The test tooltip content',
        position: 'bottom',
        animationDuration: 200,
    },
} as Meta;

export const Simple: Story<TooltipPropsType> = (args) => {
    return (
        <div style={{ margin: 150, height: '100vh' }}>
            <Dropdown {...args}>
                <Button text="Нажми" />
            </Dropdown>
        </div>
    );
};

export const AutoPosition: Story<TooltipPropsType> = (args) => {
    return (
        <div style={{ top: 0, right: 0, left: 0, height: '200vh' }}>
            <div style={{ position: 'relative', top: '200px', right: 0, left: 0, height: '900px' }}>
                <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                    <Dropdown {...args} position="auto">
                        <Button text="Нажми" />
                    </Dropdown>
                </div>
                <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                    <Dropdown {...args} position="auto">
                        <Button text="Нажми" />
                    </Dropdown>
                </div>
                <div style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
                    <Dropdown {...args} position="auto">
                        <Button text="Нажми" />
                    </Dropdown>
                </div>
                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                    <Dropdown {...args} position="auto">
                        <Button text="Нажми" />
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};

export const WithCustomComponent: Story<TooltipPropsType> = (args) => {
    const content = (
        <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
            text
            <Button text="кнопка" variant="link" onClick={() => alert('Работает успешно')} />
        </div>
    );

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
            <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                <Dropdown {...args} content={content} withArrow>
                    <Button text="Нажми" />
                </Dropdown>
            </div>
        </div>
    );
};
