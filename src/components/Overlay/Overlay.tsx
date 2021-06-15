import React, { memo, SyntheticEvent } from 'react';
import classnames from 'classnames/bind';
import styles from './Overlay.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'Overlay';

export type OverlayPropsType = {
    /** флаг меняющий свойство position с fixed на absolute */
    isAbsolute?: boolean;
    /** содержимое компонента */
    children: React.ReactNode;
    /** коллбек клика по оверлею */
    onClick?: (event: SyntheticEvent) => void;
    /** флаг меняющий backgroundColor на transparent */
    isTransparent?: boolean;
};

export const Overlay: React.FunctionComponent<OverlayPropsType> = memo(
    ({ children, isAbsolute, isTransparent, onClick = () => false }: OverlayPropsType) => {
        return (
            <div
                className={cn(CLASS_NAME, {
                    [`${CLASS_NAME}--isTransparent`]: isTransparent,
                    [`${CLASS_NAME}--isAbsolute`]: isAbsolute,
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
