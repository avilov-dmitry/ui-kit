import classnames from 'classnames';
import React, { useCallback } from 'react';
import { ButtonChangeParamsType } from './_types';
import styles from './Button.module.scss';

const cn = classnames.bind(styles);
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

export const Button: React.FunctionComponent<ButtonPropsType> = ({
    children,
    сlassName,
    id,
    isDisabled = false,
    leftIcon: LeftIcon,
    onClick,
    rightIcon: RightIcon,
    text = '',
    type = 'button',
    variant = 'primary',
}) => {
    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            if (onClick && !isDisabled) {
                onClick({ event, id });
            }
        },
        [id, isDisabled, onClick]
    );

    return (
        <button
            id={id}
            className={cn(CLASS_NAME, { [`${CLASS_NAME}--isSecondary`]: variant === 'secondary', [`${CLASS_NAME}--isDisabled`]: isDisabled }, сlassName)}
            type={type}
            onClick={handleClick}
            disabled={isDisabled}
        >
            {
                children ||
                <>
                    {LeftIcon && <span className={cn(`${CLASS_NAME}__icon`, `${CLASS_NAME}__icon--left`)}><LeftIcon /></span>}
                    {text && <span className={cn(`${CLASS_NAME}__text`)}>{text}</span>}
                    {RightIcon && <span className={cn(`${CLASS_NAME}__icon`, `${CLASS_NAME}__icon--right`)}><RightIcon /></span>}
                </>
            }
        </button>
    );
};
