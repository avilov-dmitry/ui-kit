import React, { FunctionComponent, memo } from 'react';
import classnames from 'classnames/bind';
import { CSSTransition } from 'react-transition-group';
import styles from './MediaPlayerHeader.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'MediaPlayerHeader';

type PropsType = {
    isVisible: boolean;
    onClose: () => void;
};

export const MediaPlayerHeader: FunctionComponent<PropsType> = memo(
    ({ isVisible, onClose }: PropsType) => {
        return (
            <CSSTransition
                in={isVisible}
                timeout={400}
                unmountOnExit
                classNames={{
                    enter: cn(`${CLASS_NAME}--enter`),
                    enterActive: cn(`${CLASS_NAME}--enter-active`),
                    exit: cn(`${CLASS_NAME}--exit`),
                    exitActive: cn(`${CLASS_NAME}--exit-active`),
                }}
            >
                <div className={cn(CLASS_NAME)}>
                    <button onClick={onClose}>Close</button>
                </div>
            </CSSTransition>
        );
    }
);

MediaPlayerHeader.displayName = 'MediaPlayerHeader';
