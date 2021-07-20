import { ReactElement, ReactNode } from 'react';

export type DropdownPropsType = {
    /** Время анимации появления */
    animationDuration?: number;
    /** Оборачиваемый элемент */
    children: ReactElement;
    /** Кастомный класс со стилями для всплывающего блока */
    className?: string;
    /** Контент,отображаемый в всплывающей подсказке */
    content: ReactNode;
    /** Флаг который включает правый клик */
    isRightClick: boolean;
    isWrapper: boolean;
    /** Положение всплывающего блока относительно оборачиваемого элемента */
    position: DropdownPositionType;
    /** Цветовая тема всплывающего блока */
    theme?: DropdownThemeType;
    /** Флаг показать/скрыть стрелочку на всплывающем блоке */
    withArrow?: boolean;
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
