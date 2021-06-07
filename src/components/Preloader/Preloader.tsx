import React, { FunctionComponent } from 'react';
import classnames from 'classnames/bind';
import PreloaderIcon from './PreloaderIcon.svg';
import styles from './Preloader.scss';
import { Overlay, Portal } from 'components';

const cn = classnames.bind(styles);
const CLASS_NAME = 'Preloader';

type PreloaderPropsType = {
    className?: string;
    isLoading?: boolean;
    withOverlay?: boolean;
    isAbsolute?: boolean;
    isTransparent?: boolean;
};

export const Preloader: FunctionComponent<PreloaderPropsType> = ({ className, withOverlay=false, isLoading=false, isAbsolute=false, isTransparent=false }) => {

    if(!withOverlay) {
        return (
            <PreloaderIcon className={cn(CLASS_NAME, className)} />
        )
    }

    return (
        <Portal isOpened={isLoading}>
            <Overlay isAbsolute={isAbsolute} isTransparent={isTransparent}>
                <PreloaderIcon className={cn(CLASS_NAME, className)} />
            </Overlay>
        </Portal>
    )
};
