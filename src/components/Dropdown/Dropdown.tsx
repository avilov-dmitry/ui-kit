import React, {
    cloneElement,
    FunctionComponent,
    memo,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Portal } from 'ui-kit';
import { DropdownContent } from './_components';
import { DropdownPositionParamsType, DropdownPropsType } from './_types';
import { getPosition, getPositionForCursor } from './_utils';

const initialPosition = {
    top: 0,
    left: 0,
};

export const Dropdown: FunctionComponent<DropdownPropsType> = memo(
    ({
        animationDuration = 200,
        children,
        className,
        content,
        isRightClick,
        position = 'auto',
        theme = 'light',
        isWrapper,
        withArrow = false,
    }) => {
        const controlRef = useRef<HTMLElement>(null);
        const dropdownRef = useRef<HTMLDivElement>(null);

        const [isOpen, setIsOpen] = useState(false);
        const [cursorPosition, setCursorPosition] =
            useState<DropdownPositionParamsType>(initialPosition);
        const [elPosition, setElPosition] = useState<DropdownPositionParamsType>(initialPosition);

        const handleClickControl = useCallback(() => {
            setIsOpen((isVisible) => !isVisible);
        }, []);

        const handleDropdownOpen = useCallback(() => {
            const controlRect = controlRef?.current?.getBoundingClientRect();
            const dropdownElement = dropdownRef?.current;

            if (controlRect && dropdownElement) {
                const newPosition = isRightClick
                    ? getPositionForCursor({
                          position,
                          cursorPosition,
                          dropdownElement,
                      })
                    : getPosition({
                          position,
                          controlRect,
                          dropdownElement,
                      });

                setElPosition(newPosition);
            }
        }, [controlRef, dropdownRef, cursorPosition]);

        const handleOutsideControl = useCallback(
            (event: any) => {
                const isClickedOutside =
                    (isOpen &&
                        !dropdownRef?.current?.contains(event.target) &&
                        !controlRef?.current?.contains(event.target)) ||
                    (!dropdownRef?.current?.contains(event.target) && isRightClick);

                if (isClickedOutside) {
                    setIsOpen(false);
                }
            },
            [isRightClick, isOpen]
        );

        const handlelRightClick = useCallback(
            (event: any) => {
                event.preventDefault();
                event.stopPropagation();

                setCursorPosition({ left: event.x, top: event.y });

                if (!dropdownRef?.current?.contains(event.target)) {
                    setIsOpen(false);
                }
                if (isWrapper) {
                    setIsOpen(Boolean(controlRef?.current === event.target));
                } else {
                    setIsOpen(Boolean(controlRef?.current?.contains(event.target)));
                }
            },
            [isOpen]
        );

        useEffect(() => {
            document.addEventListener('click', handleOutsideControl);

            return () => {
                document.removeEventListener('click', handleOutsideControl);
            };
        }, [isOpen]);

        useEffect(() => {
            isRightClick && document.addEventListener('contextmenu', handlelRightClick);

            return () => {
                isRightClick && document.removeEventListener('contextmenu', handlelRightClick);
            };
        }, []);

        useEffect(() => {
            if (!isRightClick) {
                controlRef.current?.addEventListener('click', handleClickControl);
            }
        }, [controlRef]);

        return (
            <>
                {cloneElement(children, { ...children.props, ref: controlRef })}
                <Portal isOpened={isOpen}>
                    <DropdownContent
                        className={className}
                        content={content}
                        duration={animationDuration}
                        isShow={isOpen}
                        coordinates={elPosition}
                        ref={dropdownRef}
                        theme={theme}
                        position={position}
                        withArrow={withArrow}
                        onOpen={handleDropdownOpen}
                    />
                </Portal>
            </>
        );
    }
);

Dropdown.displayName = 'Dropdown';
