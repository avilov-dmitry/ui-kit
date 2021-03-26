import React from 'react';
import { ButtonChangeParamsType } from './_types';
import './Button.scss';
export declare type ButtonPropsType = {
    /***
     * Кастомное содержимое кнопки
     */
    children?: React.ReactNode;
    /**
     * className для переопределени дефолтных стилей
     */
    сlassName?: string;
    /**
     * Идентификатор кнопки
     */
    id?: string;
    /**
     * Индикатор не активной кнопки
     */
    isDisabled?: false;
    /**
     * Иконка слева от текста
     */
    leftIcon?: React.ElementType;
    /**
     * Обработчик нажатия кнопки
     */
    onClick?: (params: ButtonChangeParamsType) => void;
    /**
     * Иконка справа от текста
     */
    rightIcon?: React.ElementType;
    /**
     * Текст в кнопке, отображается, если НЕ передан children
     */
    text?: string;
    /**
     * Тип кнопки
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * Вариант кнопки
     */
    variant?: 'primary' | 'secondary';
};
export declare const Button: React.FunctionComponent<ButtonPropsType>;
