import React, { FunctionComponent, useCallback, useRef, useEffect, RefObject } from 'react';
import classnames from 'classnames/bind';
import { ElementResizeListenerPropsType } from './_types';
import styles from './Preloader.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'Preloader';

export const ElementResizeListener: FunctionComponent<ElementResizeListenerPropsType> = ({
    onResize,
}) => {
    const objectRef: RefObject<HTMLObjectElement> = useRef(null);

    const handleResize = useCallback(() => {
        if (objectRef.current) {
            onResize({
                width: objectRef.current.clientWidth,
                height: objectRef.current.clientHeight,
            });
        }
    }, []);

    useEffect(() => {
        handleResize();

        const frameWindow = objectRef?.current?.contentWindow;

        if (frameWindow) {
            frameWindow.addEventListener('resize', handleResize);
            return () => {
                frameWindow.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return (
        <object
            ref={objectRef}
            tabIndex={-1}
            onLoad={handleResize}
            type="text/html"
            className={cn(CLASS_NAME)}
        />
    );
};
