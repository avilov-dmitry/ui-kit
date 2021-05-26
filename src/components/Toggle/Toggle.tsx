import cn from 'classnames/bind';
import React, { FunctionComponent, useCallback } from 'react';
import { TogglePropsType } from './_types';
import './Toggle';

const CLASS_NAME = 'Toggle';

export const Toggle: FunctionComponent<TogglePropsType> = ({
    className,
    id,
    isDisabled = false,
    leftText = '',
    leftTextClassName,
    onClick,
    rightText = '',
    rightTextClassName,
    thumbClassName,
    value,
}) => {
    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            if (onClick && !isDisabled) {
                onClick({ event, id, value: !value });
            }
        },
        [id, isDisabled, value, onClick]
    );

    return (
        <div className={cn(`${CLASS_NAME}__wrapper`)}>
            {Boolean(leftText) && <span  className={cn(`${CLASS_NAME}__leftText`, leftTextClassName)}>
                {leftText}
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
                <span className={cn(`${CLASS_NAME}__thumb`, {
                    [`${CLASS_NAME}__thumb--isActive`]: value,
                }, thumbClassName)} />
            </button>
            {Boolean(rightText) && <span  className={cn(`${CLASS_NAME}__rightText`, rightTextClassName)}>
                {rightText}
            </span>}
        </div>
    );
};
