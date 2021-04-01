import React, { useCallback, useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Toggle, ToggleClickParamsType, TogglePropsType } from 'components';

export default {
    title: 'Example/Toggle',
    background: '#EFEEEE',
    component: Toggle,
    argTypes: {
        value: {
            control: { type: 'boolean' },
        },
        isDisabled: {
            control: { type: 'boolean' },
        },
    },
    args: {
        id: 'ID',
        label: 'Test toggle',
        onClick: ({ id, value }: ToggleClickParamsType) => {
            console.log(`Clicked toggle with id - ${id}, value is ${value}`);
        },
    },
} as Meta;

export const SimpleInput: Story<TogglePropsType> = (args) => {
    const [value, setValue] = useState(false);

    const handleClick = useCallback((params: ToggleClickParamsType) => {
        setValue(params.value);
        args.onClick(params);
    }, [setValue, args]);

    return (
        <Toggle {...args} value={value} onClick={handleClick} />
    );
};
