import { DropdownPositionParamsType, DropdownPositionType } from 'components';

type ParamsType = {
    position: DropdownPositionType;
    controlRect: ClientRect;
    dropdownElement: HTMLElement;
};

const MARGING = 10;

export const getPosition = ({
    position,
    controlRect,
    dropdownElement,
}: ParamsType): DropdownPositionParamsType => {
    const { top, bottom, left, right } = controlRect;
    const { scrollWidth, scrollHeight } = dropdownElement;

    switch (position) {
        case 'auto': {
            const bottomSpace = document.documentElement.clientHeight - bottom;
            const rightSpace = document.documentElement.clientWidth - right;

            const isTop = scrollHeight >= bottomSpace;
            const isRight = scrollWidth >= rightSpace;

            return {
                top: window.pageYOffset + (isTop ? top - scrollHeight - MARGING : bottom + MARGING),
                left:
                    window.pageXOffset + (isRight ? left - scrollWidth + controlRect.width : left),
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
