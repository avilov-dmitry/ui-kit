import React, { SyntheticEvent } from 'react';
import './Overlay';
export declare type OverlayPropsType = {
    /** флаг меняющий свойство position с fixed на absolute */
    isAbsolute?: boolean;
    /** содержимое компонента */
    children: React.ReactNode;
    /** коллбек клика по оверлею */
    onClick?: (event: SyntheticEvent) => void;
    /** флаг меняющий backgroundColor на transparent */
    isTransparent?: boolean;
};
export declare const Overlay: React.FunctionComponent<OverlayPropsType>;
