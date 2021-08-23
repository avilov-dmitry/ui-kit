import React, { useCallback, useRef } from 'react';
import classnames from 'classnames/bind';
import { Icon } from 'ui-kit';
import styles from './Checkbox.modules.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'Checkbox';

export type CheckboxClickParamsType = { id: string; value: boolean };

export type CheckboxPropsType = {
    className?: string;
    id: string;
    isDisabled?: boolean;
    isLeftLabel?: boolean;
    isSquare?: boolean;
    label?: string;
    name?: string;
    onClick?: (params: CheckboxClickParamsType) => void;
    value: boolean;
};

export const Checkbox: React.FC<CheckboxPropsType> = ({
    className,
    id,
    isDisabled = false,
    isLeftLabel = false,
    isSquare = false,
    label,
    name,
    onClick,
    value,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = useCallback(
        (event: any) => {
            if (!isDisabled && onClick) {
                onClick({ id, value: event.target.checked as boolean });
            }
        },
        [id, isDisabled, onClick]
    );

    const handleClick = useCallback(() => {
        const input = inputRef.current;

        if (input && !input.disabled) {
            input.click();
        }
    }, []);

    return (
        <div className={cn(CLASS_NAME, { [`${CLASS_NAME}--isLeftLabel`]: isLeftLabel }, className)}>
            <input
                id={id}
                ref={inputRef}
                name={name}
                type="checkbox"
                checked={value}
                className={cn(`${CLASS_NAME}__input`)}
                onClick={handleChange}
                disabled={isDisabled}
            />
            <div
                className={cn(`${CLASS_NAME}__icon-wrapper`, {
                    [`${CLASS_NAME}__icon-wrapper--isChecked`]: value,
                    [`${CLASS_NAME}__icon-wrapper--isDisabled`]: isDisabled,
                    [`${CLASS_NAME}__icon-wrapper--isSquare`]: isSquare,
                })}
                onClick={handleClick}
            >
                {value && <Icon name="ok-outlined" className={cn(`${CLASS_NAME}__icon`)} />}
            </div>
            {label && (
                <label
                    htmlFor={id}
                    className={cn(`${CLASS_NAME}__label`, {
                        [`${CLASS_NAME}__label--isLeftLabel`]: isLeftLabel,
                    })}
                >
                    {label}
                </label>
            )}
        </div>
    );
};
