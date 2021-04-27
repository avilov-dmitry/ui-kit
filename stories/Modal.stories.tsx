import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Modal, ModalPropsType } from 'components';

export default {
    title: 'Example/Modal',
    background: '#EFEEEE',
    component: Modal,
    argTypes: {
        isOpened: {
            control: { type: 'boolean' }
        },
        withCloseIcon: {
            control: { type: 'boolean' }
        },
    },
    args: {
        text: 'Modal',
        onClose: () => console.log('Close Modal'),
    },
} as Meta;


export const WithChildrenTemplate: Story<ModalPropsType> = (args: ModalPropsType) => {
    const styles = { display: 'inline-block', 'fontSize': '16px', 'lineHeight': '24px' };

    return (
        <Modal {...args} >
            <div>
                <span style={{ ...styles, color: '#333',  textDecoration: 'line-through' }}>99 ₽</span>
            </div>
        </Modal>
    );
};