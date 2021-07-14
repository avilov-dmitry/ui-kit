import React, { FunctionComponent, memo, SyntheticEvent, ReactNode } from 'react';
import classnames from 'classnames/bind';
import styles from './Overlay.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'Overlay';

export type OverlayPropsType = {
    /** флаг меняющий свойство position с fixed на absolute */
    isAbsolute?: boolean;
    /** содержимое компонента */
    children: ReactNode;
    /** коллбек клика по оверлею */
    onClick?: (event: SyntheticEvent) => void;
    /** флаг меняющий backgroundColor на transparent */
    isTransparent?: boolean;
    /** флаг, который добавляет opacity для background */
    withOpacity?: boolean;
};

export const Overlay: FunctionComponent<OverlayPropsType> = memo(
    ({
        children,
        isAbsolute = false,
        isTransparent = false,
        onClick = () => false,
        withOpacity = true,
    }: OverlayPropsType) => {
        return (
            <div
                className={cn(CLASS_NAME, {
                    [`${CLASS_NAME}--isAbsolute`]: isAbsolute,
                    [`${CLASS_NAME}--isTransparent`]: isTransparent,
                    [`${CLASS_NAME}--withOpacity`]: withOpacity,
                })}
                onClick={onClick}
                role="presentation"
            >
                {children}
            </div>
        );
    }
);

Overlay.displayName = 'Overlay';
