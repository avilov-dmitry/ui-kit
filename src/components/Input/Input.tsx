import React, { FunctionComponent, useCallback, useState, useMemo, useRef, memo } from 'react';
import { InputPropsType } from './_types';
import classnames from 'classnames/bind';
import styles from './Input.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'Input';

export const Input: FunctionComponent<InputPropsType> = memo(({
    className = '',
    error = '',
    id,
    isFullWidth = false,
    isReadOnly = false,
    label,
    onChange,
    value = '',
}: InputPropsType) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRer = useRef<any>(null);
  
    const handleChange = useCallback(
        (event) => {
            if (!isReadOnly && onChange) {
                onChange({ event, id, value: event.target.value });
            }
        },
        [isReadOnly, id, onChange]
    );

    const handleClickOnLabel = useCallback(() => {
        inputRer.current.focus();
    }, []);
    const handleFocus = useCallback(() => setIsFocused(true), []);
    const handleBlur = useCallback(() => setIsFocused(false), []);

    const isVisibleLabel = useMemo(() => {
        return Boolean(label && (isFocused || value)); 
    }, [label, isFocused, value]);

    return (
        <>
            <div className={cn(`${CLASS_NAME}__wrapper`, { [`${CLASS_NAME}__wrapper--isFullWidth`]: isFullWidth }, className)}>
                <span className={cn(`${CLASS_NAME}__label`, {
                    [`${CLASS_NAME}__label--isVisibleLabel`]: isVisibleLabel,
                })} onClick={handleClickOnLabel}>{label}</span>
                <input
                    ref={inputRer}
                    className={cn(CLASS_NAME)}
                    id={id}
                    type="text"
                    value={value}
                    disabled={isReadOnly}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
            {Boolean(error) && <span className={cn(`${CLASS_NAME}__error`)}>{error}</span>}
        </>

    );
})

Input.displayName = 'Input';
