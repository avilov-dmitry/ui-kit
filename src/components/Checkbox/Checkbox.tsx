import React, { useRef } from 'react';
import cn from 'classnames';
import { generateShortId } from 'tools';
import { Icon } from 'components';
import './Checkbox.scss';

const CLASS_NAME = 'Checkbox';

type PropsType = {
    name?: string;
    value?: boolean;
    isDisabled?: boolean;
    onClick?: (params: { value: boolean }) => void;
};

export const Checkbox: React.FC<PropsType> = ({ name, value, isDisabled = false, onClick }) => {
    const id = useRef<string>(generateShortId());
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
        <div className={cn(CLASS_NAME, { isChecked: value })}>
            <input
                id={id.current}
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
                })}
                onClick={handleClick}
            >
                {value && <Icon icon="check" className={cn(`${CLASS_NAME}__icon`)} />}
            </div>
        </div>
    );
};
