import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { CheckboxItemType, CheckboxList, CheckboxListPropsType } from 'ui-kit';
import { useState } from 'react';

export default {
    title: 'Example/CheckboxList',
    background: '#EFEEEE',
    component: CheckboxList,
    args: {
        content: 'The test tooltip content',
        position: 'auto',
        animationDuration: 400,
    },
} as Meta;

const list: Array<CheckboxItemType> = [
    { value: false, id: 'id_1', label: 'Не понимаю, откуда у меня подписка' },
    { value: false, id: 'id_2', label: 'Неудобный сайт или приложение' },
    { value: false, id: 'id_3', label: 'Пользуюсь другим платным диском' },
    { value: false, id: 'id_4', label: 'Высокая цена' },
    { value: false, id: 'id_5', label: 'Сейчас нет необходимости, буду пользоваться позже' },
    { value: false, id: 'id_other', label: 'Другое' },
];

export const Simple: Story<CheckboxListPropsType> = (args) => {
    const [items, setItems] = useState(list);
    const handleChange = ({ id, value }) => {
        setItems(items.map((item) => (item.id === id ? { ...item, value } : item)));
    };

    return (
        <div style={{ margin: 150, height: '100vh', display: 'flex' }}>
            <CheckboxList {...args} items={items} onClick={handleChange} />
        </div>
    );
};
