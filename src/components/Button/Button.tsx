import cn from 'classnames';
import React, { useCallback } from 'react';
import { ButtonChangeParamsType } from './_types';
import './Button.scss';

const CLASS_NAME = 'Button';

export type ButtonPropsType = {
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

export const Button: React.FunctionComponent<ButtonPropsType> = ({
    children,
    сlassName,
    id,
    leftIcon: LeftIcon,
    onClick,
    rightIcon: RightIcon,
    text = '',
    type = 'button',
    variant = 'primary',
}) => {
    const handleClick = useCallback(
        (event) => {
            if (onClick) {
                onClick({ event, id });
            }
        },
        [id, onClick]
    );

    return (
        <button
            id={id}
            className={cn(CLASS_NAME, { [`${CLASS_NAME}--isSecondary`]: variant === 'secondary' }, сlassName)}
            type={type}
            onClick={handleClick}
        >
            {
                children ||
                    <>
                        {LeftIcon && <LeftIcon />}
                        {text && <span className={cn(`${CLASS_NAME}__text`)}>{text}</span>}
                        {RightIcon && <RightIcon />}
                    </>
            }
        </button>
    );
};
