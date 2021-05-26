/// <reference types="react" />
export declare type TogglePropsType = {
    /** className для переопределени дефолтных стилей переключателя */
    className?: string;
    /** Идентификатор переключателя */
    id?: string;
    /** Индикатор не активного переключателя */
    isDisabled?: boolean;
    /** Текст который находится слева от переключателя */
    leftText?: string;
    /** className для текста слева от переключателя */
    leftTextClassName?: string;
    /** Обработчик нажатия переключателя */
    onClick?: (params: ToggleClickParamsType) => void;
    /** Текст который находится справа от переключателя */
    rightText?: string;
    /** className для текста справа от переключателя */
    rightTextClassName?: string;
    /** className для ползунка */
    thumbClassName?: string;
    /** Текущее значение */
    value: boolean;
};
export declare type ToggleClickParamsType = {
    event: React.MouseEvent<HTMLElement>;
    id?: string;
    value: boolean;
};
