import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Drop, DropPropsType } from 'components';

export default {
    title: 'Example/Drop',
    background: '#EFEEEE',
    component: Drop,
} as Meta;

export const Simple: Story<DropPropsType> = (args) => {
    const styles = { display: 'inline-block', 'fontSize': '16px', 'lineHeight': '24px', width: '100px', height: '50px' };

    const Controls = () => <button style={{ ...styles, color: '#333' }}>open</button>
    const Dropdown = () => (
        <div>
            <span style={{ ...styles, height: '250px', paddingLeft: '20px' }}>Dropdown</span>
        </div>
    )

    return (
        <Drop control={<Controls />} dropdown={<Dropdown />}/>
    );
};
