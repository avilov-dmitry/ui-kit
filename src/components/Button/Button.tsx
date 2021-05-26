import classNames from 'classNames/bind';
import React, { FunctionComponent, useCallback } from 'react';
import { ButtonPropsType } from './_types';
import styles from './Button.scss';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Button';

export const Button: FunctionComponent<ButtonPropsType> = ({
    children,
    className,
    id,
    isDisabled = false,
    isFullWidth = false,
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
            className={cn(CLASS_NAME, {
                [`${CLASS_NAME}--isSecondary`]: variant === 'secondary',
                [`${CLASS_NAME}--isDisabled`]: isDisabled,
                [`${CLASS_NAME}--isFullWidth`]: isFullWidth,
            },
            className
            )}
            type={type}
            onClick={handleClick}
            disabled={isDisabled}
        >
            {
                children ||
                <>
                    {LeftIcon && <span className={cn(`${CLASS_NAME}__icon--left`)}><LeftIcon /></span>}
                    {text && <span className={cn(`${CLASS_NAME}__text`)}>{text}</span>}
                    {RightIcon && <span className={cn(`${CLASS_NAME}__icon--right`)}><RightIcon /></span>}
                </>
            }
        </button>
    );
};
