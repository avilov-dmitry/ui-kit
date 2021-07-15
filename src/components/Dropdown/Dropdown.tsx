import React, {
    cloneElement,
    FunctionComponent,
    memo,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { DropdownContent } from './_components';
import { DropdownPositionParamsType, DropdownPropsType } from './_types';
import { getPosition } from './_utils';

export const Dropdown: FunctionComponent<DropdownPropsType> = memo(
    ({
        animationDuration = 200,
        children,
        className,
        content,
        position = 'auto',
        theme = 'light',
        withArrow = false,
    }) => {
        const controlRef = useRef<HTMLElement>(null);
        const dropdownRef = useRef<HTMLDivElement>(null);

        const [isOpen, setIsOpen] = useState(false);
        const [elPosition, setElPosition] = useState<DropdownPositionParamsType>({
            top: 0,
            left: 0,
        });

        const handleClickControl = useCallback(() => {
            setIsOpen((isVisible) => !isVisible);
        }, []);

        const handleDropdownOpen = useCallback(() => {
            const controlRect = controlRef?.current?.getBoundingClientRect();
            const dropdownRect = dropdownRef?.current?.getBoundingClientRect();

            if (controlRect && dropdownRect) {
                const newPosition = getPosition({
                    position,
                    controlRect,
                    dropdownRect,
                });

                setElPosition(newPosition);
            }
        }, [controlRef, dropdownRef]);

        const handleOutsideControl = useCallback(
            (event: any) => {
                if (
                    isOpen &&
                    !dropdownRef?.current?.contains(event.target) &&
                    !controlRef?.current?.contains(event.target)
                ) {
                    setIsOpen(false);
                }
            },
            [isOpen]
        );

        useEffect(() => {
            document.addEventListener('click', handleOutsideControl);
            return () => document.removeEventListener('click', handleOutsideControl);
        }, [isOpen]);

        useEffect(() => {
            controlRef.current?.addEventListener('click', handleClickControl);
        }, [controlRef]);

        return (
            <>
                {cloneElement(children, { ...children.props, ref: controlRef })}
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
            </>
        );
    }
);

Dropdown.displayName = 'Dropdown';
