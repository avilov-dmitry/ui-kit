import React, { SyntheticEvent } from 'react';
import './Overlay.scss';
declare type OverlayPropsType = {
    /** флаг меняющий свойство position с fixed на absolute */
    isAbsolute?: boolean;
    /** содержимое компонента */
    children: React.ReactNode;
    /** прозрачность оверлея */
    opacity?: string;
    /** коллбек клика по оверлею */
    onClick?: (event: SyntheticEvent) => void;
    /** флаг меняющий backgroundColor на transparent */
    isTransparent?: boolean;
};
export declare const Overlay: React.FunctionComponent<OverlayPropsType>;
export {};
