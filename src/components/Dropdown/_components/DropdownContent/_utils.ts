import { DropdownPositionParamsType, DropdownPositionType } from '../../_types';

type ParamsType = {
    position: DropdownPositionType;
    coordinates: DropdownPositionParamsType;
    duration: number;
    el: HTMLDivElement;
};

export const modifyPositionElement = ({
    position,
    coordinates,
    duration,
    el,
}: ParamsType): void => {
    el.style.transitionDuration = duration + 'ms';

    if (position === 'auto') {
        el.style.top = `${coordinates.top}px`;
        el.style.left = `${coordinates.left}px`;
        el.style.transform = `scale(1)`;
    } else if (position === 'top') {
        el.style.top = `${coordinates.top - el.clientHeight}px`;
        el.style.left = `${coordinates.left}px`;
        el.style.transform = `translateX(-50%) scale(1)`;
    } else if (position === 'bottom') {
        el.style.top = `${coordinates.top}px`;
        el.style.left = `${coordinates.left}px`;
        el.style.transform = `translateX(-50%) scale(1)`;
    } else if (position === 'left') {
        el.style.top = `${coordinates.top}px`;
        el.style.left = `${coordinates.left - el.clientWidth}px`;
        el.style.transform = `translateY(-50%) scale(1)`;
    } else if (position === 'right') {
        el.style.top = `${coordinates.top}px`;
        el.style.left = `${coordinates.left}px`;
        el.style.transform = `translateY(-50%) scale(1)`;
    } else if (position === 'top-left') {
        el.style.top = `${coordinates.top - el.clientHeight}px`;
        el.style.left = `${coordinates.left}px`;
        el.style.transform = `scale(1)`;
    } else if (position === 'top-right') {
        el.style.top = `${coordinates.top - el.clientHeight}px`;
        el.style.left = `${coordinates.left}px`;
        el.style.transform = `translateX(-100%) scale(1)`;
    } else if (position === 'bottom-left') {
        el.style.top = `${coordinates.top}px`;
        el.style.left = `${coordinates.left}px`;
        el.style.transform = `scale(1)`;
    } else if (position === 'bottom-right') {
        el.style.top = `${coordinates.top}px`;
        el.style.left = `${coordinates.left}px`;
        el.style.transform = `translateX(-100%) scale(1)`;
    } else if (position === 'left-top') {
        el.style.top = `${coordinates.top}px`;
        el.style.left = `${coordinates.left - el.clientWidth}px`;
        el.style.transform = `scale(1)`;
    } else if (position === 'left-bottom') {
        el.style.top = `${coordinates.top}px`;
        el.style.left = `${coordinates.left - el.clientWidth}px`;
        el.style.transform = `translateY(-100%) scale(1)`;
    } else if (position === 'right-top') {
        el.style.top = `${coordinates.top}px`;
        el.style.left = `${coordinates.left}px`;
        el.style.transform = `scale(1)`;
    } else if (position === 'right-bottom') {
        el.style.top = `${coordinates.top}px`;
        el.style.left = `${coordinates.left}px`;
        el.style.transform = `translateY(-100%) scale(1)`;
    }

    el.style.opacity = '1';
};
