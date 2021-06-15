import React, { FunctionComponent, memo, useMemo } from 'react';
import classnames from 'classnames/bind';
import { Overlay, Portal } from 'components';
import PreloaderIcon from './PreloaderIcon.svg';
import styles from './Preloader.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'Preloader';

type PreloaderPropsType = {
    className?: string;
    isLoading?: boolean;
    isAbsolute?: boolean;
    isTransparent?: boolean;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    color?: 'dark' | 'white' | 'blue' | 'grey' | 'greyDark';
};

export const Preloader: FunctionComponent<PreloaderPropsType> = memo(
    ({
        className,
        isLoading = false,
        isAbsolute = false,
        isTransparent = false,
        size = 'l',
        color = 'blue',
    }) => {
        const Loader = useMemo(() => {
            return () => (
                <PreloaderIcon
                    className={cn(
                        CLASS_NAME,
                        { [`${CLASS_NAME}--size-${size}`]: Boolean(size), [`${CLASS_NAME}--color-${color}`]: Boolean(color) },
                        className
                    )}
                />
            );
        }, [size, color, className]);

        if (isAbsolute) {
            return isLoading ? <Loader /> : <></>;
        }

        return (
            <Portal isOpened={isLoading}>
                <Overlay isAbsolute={isAbsolute} isTransparent={isTransparent}>
                    <Loader />
                </Overlay>
            </Portal>
        );
    }
);

Preloader.displayName = 'Preloader';
