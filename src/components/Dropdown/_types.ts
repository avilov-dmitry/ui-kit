import { ReactElement, ReactNode } from 'react';

export type DropdownPropsType = {
    /** Оборачиваемый элемент */
    children: ReactElement;
    /** Контент,отображаемый в всплывающей подсказке */
    content: ReactNode;
    /** Положение всплывающего блока относительно оборачиваемого элемента */
    position: DropdownPositionType;
    /** Цветовая тема всплывающего блока */
    theme?: DropdownThemeType;
    /** Время анимации появления */
    animationDuration?: number;
    /** Флаг показать/скрыть стрелочку на всплывающем блоке */
    withArrow?: boolean;
    /** Кастомный класс со стилями для всплывающего блока */
    className?: string;
};

export type DropdownPositionType =
    | 'auto'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'left-top'
    | 'left-bottom'
    | 'right-top'
    | 'right-bottom';

export type DropdownThemeType = 'dark' | 'light';

export type DropdownPositionParamsType = {
    top: number;
    left: number;
};
