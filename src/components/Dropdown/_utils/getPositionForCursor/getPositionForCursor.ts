import { DropdownPositionParamsType, DropdownPositionType } from 'components';

type ParamsType = {
    position: DropdownPositionType;
    cursorPosition: DropdownPositionParamsType;
    dropdownElement: HTMLElement;
};

// const MARGING = 10;

export const getPositionForCursor = ({
    position,
    cursorPosition,
    dropdownElement,
}: ParamsType): DropdownPositionParamsType => {
    const { top, left } = cursorPosition;
    const { scrollWidth, scrollHeight } = dropdownElement;

    const bottom = document.documentElement.clientHeight - top;
    const right = document.documentElement.clientWidth - left;

    switch (position) {
        case 'auto': {
            const isTop = scrollHeight >= bottom;
            const isRight = scrollWidth >= right;

            return {
                top: window.pageYOffset + (isTop ? top - scrollHeight : top),
                left: window.pageXOffset + (isRight ? left - scrollWidth : left),
            };
        }

        case 'top':
            return {
                top: top + window.pageYOffset,
                left: left + scrollWidth / 2 + window.pageXOffset,
            };

        case 'bottom':
            return {
                top: bottom + window.pageYOffset,
                left: left + scrollWidth / 2 + window.pageXOffset,
            };

        case 'left':
            return {
                top: top + scrollHeight / 2 + window.pageYOffset,
                left: left + window.pageXOffset,
            };

        case 'right':
            return {
                top: top + scrollHeight / 2 + window.pageYOffset,
                left: right + window.pageXOffset,
            };

        case 'top-left':
            return {
                top: top + window.pageYOffset,
                left: left + window.pageXOffset,
            };

        case 'top-right':
            return {
                top: top + window.pageYOffset,
                left: left + scrollWidth + window.pageXOffset,
            };

        case 'bottom-left':
            return {
                top: top + scrollHeight + window.pageYOffset,
                left: left + window.pageXOffset,
            };

        case 'bottom-right':
            return {
                top: top + scrollHeight + window.pageYOffset,
                left: left + scrollWidth + window.pageXOffset,
            };

        case 'left-top':
            return {
                top: top + window.pageYOffset,
                left: left + window.pageXOffset,
            };

        case 'left-bottom':
            return {
                top: bottom + window.pageYOffset,
                left: left + window.pageXOffset,
            };

        case 'right-top':
            return {
                top: top + window.pageYOffset,
                left: left + scrollWidth + window.pageXOffset,
            };

        case 'right-bottom':
            return {
                top: bottom + window.pageYOffset,
                left: left + scrollWidth + window.pageXOffset,
            };

        default:
            return { left: 0, top: 0 };
    }
};
