import * as React from 'react';
export declare type DropPropsType = {
    /** Компонент при нажатии на которы появится dropdown */
    control: React.ReactNode;
    /** Скрытый по умолчанию компонент */
    dropdown: React.ReactNode;
    /** Определяет открыт ли компонент сейчас */
    isOpened?: boolean;
    /** Определяет вложенный ли это Drop */
    isSubDrop?: boolean;
    /** Обработчик для клика по control'у */
    onClickControl?: () => void;
    /** Обработчик для клика вне области */
    onClickOutside?: () => void;
};
