import React, {
    useEffect,
    forwardRef,
    memo,
    FunctionComponent,
    MutableRefObject,
    ReactNode,
} from 'react';
import { DropdownPositionParamsType, DropdownPositionType, DropdownThemeType } from 'components';
import classNames from 'classnames/bind';
import { modifyPositionElement } from './_utils';
import styles from './DropdownContent.module.scss';

const cn = classNames.bind(styles);
const CLASS_NAME = 'DropdownContent';

type PropsType = {
    className?: string;
    content: ReactNode;
    coordinates: DropdownPositionParamsType;
    duration: number;
    isShow: boolean;
    position: DropdownPositionType;
    theme: DropdownThemeType;
    withArrow: boolean;
    ref: React.Ref<HTMLDivElement>;
    onOpen: () => void;
};

export const DropdownContent: FunctionComponent<PropsType> = memo(
    forwardRef<HTMLDivElement, PropsType>(
        (
            {
                className,
                content,
                position,
                coordinates,
                duration,
                isShow,
                withArrow,
                theme,
                onOpen,
            },
            ref
        ) => {
            useEffect(() => {
                if (ref) {
                    const el: HTMLDivElement = (ref as MutableRefObject<HTMLDivElement>).current;
                    if (el && isShow) {
                        modifyPositionElement({ position, coordinates, duration, el });
                    }
                }
            }, [position, coordinates, duration, isShow]);

            useEffect(() => {
                if (ref) {
                    onOpen();
                }
            }, []);

            return (
                <div className={cn(CLASS_NAME, `${CLASS_NAME}--${position}`)} ref={ref}>
                    <div
                        className={cn(
                            `${CLASS_NAME}__element`,
                            `${CLASS_NAME}__element--theme-${theme}`,
                            {
                                [`${CLASS_NAME}__element--withArrow`]: withArrow,
                            },
                            className
                        )}
                    >
                        {content}
                    </div>
                </div>
            );
        }
    )
);

DropdownContent.displayName = 'DropdownContent';
