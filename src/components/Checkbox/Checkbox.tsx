import React, { useRef } from 'react';
import classnames from 'classnames/bind';
import { Icon } from 'components';
import styles from './Checkbox.modules.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'Checkbox';

export type CheckboxPropsType = {
    id: string;
    label?: string;
    name?: string;
    value?: boolean;
    isLeftLabel?: boolean;
    isSquare?: boolean;
    isDisabled?: boolean;
    onClick?: (params: { value: boolean }) => void;
};

export const Checkbox: React.FC<CheckboxPropsType> = ({
    id,
    label,
    name,
    value,
    isLeftLabel = false,
    isSquare = false,
    isDisabled = false,
    onClick,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (event: any) => {
        if (!isDisabled && onClick) {
            onClick({ value: event.target.checked as boolean });
        }
    };

    const handleClick = () => {
        const input = inputRef.current;

        if (input && !input.disabled) {
            input.click();
        }
    };

    return (
        <div className={cn(CLASS_NAME, { [`${CLASS_NAME}--isLeftLabel`]: isLeftLabel })}>
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
