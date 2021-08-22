import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonClickParamsType, ButtonPropsType } from 'components';

export default {
    title: 'Example/Button',
    background: '#EFEEEE',
    component: Button,
    argTypes: {
        isDisabled: {
            control: { type: 'boolean' },
        },
        isFullWidth: {
            control: { type: 'boolean' },
        },
    },
    args: {
        text: 'Button',
        onClick: ({ id }: ButtonClickParamsType) => console.log('Clicked button with id - ', id),
    },
} as Meta;

const Template: Story<ButtonPropsType> = (args) => <Button {...args} />;
export const SimpleButton = Template.bind({});


const WithChildrenTemplate: Story<ButtonPropsType> = (args) => {
    const styles = { display: 'inline-block', 'fontSize': '16px', 'lineHeight': '24px' };

    return (
        <Button {...args} >
            <div>
                <span style={{ ...styles, color: '#333', textDecoration: 'line-through' }}>99 ₽</span>
                <span style={{ ...styles, color: args.variant === 'primary' ? '#fff' : '#023564', paddingLeft: '20px' }}>79 ₽ / мес</span>
            </div>
        </Button>
    );
};
export const PrimaryWithChildren = WithChildrenTemplate.bind({});

const Icon = () => {
    const styles = { display: 'flex', alignItems: 'center', justifyContent: 'center', 'width': '30px', 'height': '100%', fontSize: '16px', lineHeight: '24px' };
    return <span style={styles}>❤</span>;
};
export const WithLeftIcon: Story<ButtonPropsType> = (args) => <Button {...args} leftIcon={Icon} />;
export const WithRightIcon: Story<ButtonPropsType> = (args) => <Button {...args} rightIcon={Icon} />;
