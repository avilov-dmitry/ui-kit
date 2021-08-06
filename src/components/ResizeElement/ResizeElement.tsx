import React, { FunctionComponent, useCallback, useRef, useEffect, RefObject } from 'react';
import { ElementResizeListenerPropsType } from './_types';

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

    const handleLoad = useCallback(() => {
        handleResize();

        objectRef?.current?.contentWindow?.addEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        return () => objectRef?.current?.contentWindow?.addEventListener('resize', handleResize);
    }, []);

    return (
        <object
            ref={objectRef}
            tabIndex={-1}
            type="text/html"
            data="about:blank"
            onLoad={handleLoad}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                pointerEvents: 'none',
                zIndex: -1,
                opacity: 0,
            }}
        />
    );
};
