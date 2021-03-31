import classnames from 'classnames/bind';
import React, { FunctionComponent, useCallback } from 'react';
import { TogglePropsType } from './_types';
import styles from './Toggle.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'Toggle';

export const Toggle: FunctionComponent<TogglePropsType> = ({
    className,
    labelClassName,
    id,
    isDisabled = false,
    label = '',
    onClick,
    value,
}) => {
    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            if (onClick && !isDisabled) {
                onClick({ event, id, value: !value });
            }
        },
        [id, isDisabled, onClick]
    );

    return (
        <div className={cn(`${CLASS_NAME}__wrapper`)}>
            {Boolean(label) && <span  className={cn(`${CLASS_NAME}__label`, labelClassName)}>
                {label}
            </span>}
            <button
                id={id}
                className={cn(CLASS_NAME, {
                    [`${CLASS_NAME}--isDisabled`]: isDisabled,
                    [`${CLASS_NAME}--isActive`]: value,
                },
                className
                )}
                onClick={handleClick}
                disabled={isDisabled}
            >
                <div className={cn(`${CLASS_NAME}__thumb`)}  />
            </button>
        </div>
    );
};
