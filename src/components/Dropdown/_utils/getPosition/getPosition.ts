import { DropdownPositionParamsType, DropdownPositionType } from 'components';

type ParamsType = {
    position: DropdownPositionType;
    controlRect: ClientRect;
    dropdownRect: ClientRect;
};

const MARGING = 10;

export const getPosition = ({
    position,
    controlRect,
    dropdownRect,
}: ParamsType): DropdownPositionParamsType => {
    const { top, bottom, left, right } = controlRect;
    const { width, height } = dropdownRect;

    switch (position) {
        case 'auto': {
            const bottomSpace = document.documentElement.clientHeight - bottom;
            const rightSpace = document.documentElement.clientWidth - right;

            const isTop = height >= bottomSpace;
            const isRight = width >= rightSpace;

            return {
                top: window.pageYOffset + (isTop ? top - height - MARGING : bottom + MARGING),
                left: window.pageXOffset + (isRight ? left - width + controlRect.width : left),
            };
        }

        case 'top':
            return {
                top: top + window.pageYOffset,
                left: left + width / 2 + window.pageXOffset,
            };

        case 'bottom':
            return {
                top: bottom + window.pageYOffset,
                left: left + width / 2 + window.pageXOffset,
            };

        case 'left':
            return {
                top: top + height / 2 + window.pageYOffset,
                left: left + window.pageXOffset,
            };

        case 'right':
            return {
                top: top + height / 2 + window.pageYOffset,
                left: left + width + window.pageXOffset,
            };

        case 'top-left':
            return {
                top: top + window.pageYOffset,
                left: left + window.pageXOffset,
            };

        case 'top-right':
            return {
                top: top + window.pageYOffset,
                left: left + width + window.pageXOffset,
            };

        case 'bottom-left':
            return {
                top: top + height + window.pageYOffset,
                left: left + window.pageXOffset,
            };

        case 'bottom-right':
            return {
                top: top + height + window.pageYOffset,
                left: left + width + window.pageXOffset,
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
                left: left + width + window.pageXOffset,
            };

        case 'right-bottom':
            return {
                top: bottom + window.pageYOffset,
                left: left + width + window.pageXOffset,
            };

        default:
            return { left: 0, top: 0 };
    }
};
