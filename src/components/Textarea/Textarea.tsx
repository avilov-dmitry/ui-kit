import React, { memo, FunctionComponent, useCallback, useState, useMemo, useRef, useEffect } from 'react';
import classnames from 'classnames/bind';
import { TextareaPropsType } from './_types';
import styles from './Textarea.module.scss';
import { KEY_CODES } from '../../constants';

const cn = classnames.bind(styles);
const CLASS_NAME = 'Textarea';

export const Textarea: FunctionComponent<TextareaPropsType> = memo(({
    className = '',
    error = '',
    id,
    isReadOnly = false,
    label,
    onChange,
    value = '',
}: TextareaPropsType) => {
    const [isFocused, setIsFocused] = useState(false);
    const textareaRer = useRef(null);

    useEffect(() => {
        const t = document.getElementById(id);
        t.addEventListener('keydown', handleKeyDown);
        return () => t.removeEventListener('keydown', handleKeyDown);
    }, [id]);
  
    const handleChange = useCallback(
        (event) => {
            if (!isReadOnly && onChange) {
                onChange({ event, id, value: event.target.value });
            }
        },
        [isReadOnly, id, onChange]
    );

    const handleKeyDown = useCallback(
        ({ target }) => {
            setTimeout(() => {
                target.style.height = 'auto';
                console.log('ewf');
                target.style.height = target.scrollHeight + 'px';
            }, 0);
        },
        []
    );

    const handleClickOnLabel = useCallback(() => {
        textareaRer.current.focus();
    }, []);

    const handleFocus = useCallback(() => setIsFocused(true), []);

    const handleBlur = useCallback(() => setIsFocused(false), []);

    const isVisibleLabel = useMemo(() => {
        return Boolean(label && (isFocused || value)); 
    }, [label, isFocused, value]);


    return (
        <>
            <div className={cn(`${CLASS_NAME}__wrapper`, className)}>
                <span className={cn(`${CLASS_NAME}__label`, {
                    [`${CLASS_NAME}__label--isVisibleLabel`]: isVisibleLabel,
                })} onClick={handleClickOnLabel}>{label}</span>
                <textarea
                    ref={textareaRer}
                    className={cn(CLASS_NAME)}
                    id={id}
                    value={value}
                    rows={1}
                    disabled={isReadOnly}
                    onChange={handleChange}
                    // onKeyDown={handleKeyDown}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
            {Boolean(error) && <span className={cn(`${CLASS_NAME}__error`)}>{error}</span>}
        </>

    );
});

Textarea.displayName = 'Textarea';
