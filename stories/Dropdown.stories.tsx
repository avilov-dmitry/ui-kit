import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, Dropdown, DropdownPropsType } from '../source/components';

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
    },
    args: {
        content: 'The test tooltip content',
        position: 'auto',
        animationDuration: 400,
    },
} as Meta;

export const Simple: Story<DropdownPropsType> = (args) => {
    return (
        <div style={{ margin: 150, height: '100vh' }}>
            <Dropdown {...args}>
                <Button text="Нажми" />
            </Dropdown>
        </div>
    );
};

export const RightClick: Story<DropdownPropsType> = (args) => {
    const handleButtonClick = () => console.log('left click');

    return (
        <div style={{ margin: 150, height: '100vh' }}>
            <Dropdown {...args} isRightClick>
                <Button text="Нажми" onClick={handleButtonClick} />
            </Dropdown>
        </div>
    );
};

export const RightClickSpaceBlock: Story<DropdownPropsType> = (args) => {
    return (
        <Dropdown {...args} content="Это контент враппера" isRightClick isWrapper>
            <div
                style={{
                    display: 'flex',
                    margin: 0,
                    flexDirection: 'column',
                    marginTop: 0,
                    height: '130vh',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px dashed #000',
                }}
            >
                <div style={{ marginBottom: '50px' }}>
                    <Dropdown
                        {...args}
                        position="auto"
                        isRightClick
                        content="Это контент кнопки !!!!"
                    >
                        <Button text="Нажми и проверь, что сработал только мой обработчик!" />
                    </Dropdown>
                </div>
                Right click on space!
            </div>
        </Dropdown>
    );
};

export const AutoPosition: Story<DropdownPropsType> = (args) => {
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

export const PositionAutoWithCustomContent: Story<DropdownPropsType> = (args) => {
    const content = (
        <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
            text
            <Button text="кнопка" variant="link" onClick={() => alert('Работает успешно')} />
        </div>
    );

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
            <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                <Dropdown {...args} content={content} position="auto">
                    <Button text="Нажми" />
                </Dropdown>
            </div>
            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                <Dropdown {...args} content={content} position="auto">
                    <Button text="Нажми" />
                </Dropdown>
            </div>
            <div style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
                <Dropdown {...args} content={content} position="auto">
                    <Button text="Нажми" />
                </Dropdown>
            </div>
            <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                <Dropdown {...args} content={content} position="auto">
                    <Button text="Нажми" />
                </Dropdown>
            </div>
        </div>
    );
};
