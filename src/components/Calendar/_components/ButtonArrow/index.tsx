import React, { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classNames.bind(styles);
const CLASS_NAME = 'Button-arrow';

type PropsType = {
    destination: 'left' | 'right';
    onClick: () => void;
};

export const ButtonArrow = memo(({ destination, onClick }: PropsType) => {
    return (
        <button className={cn(`${CLASS_NAME}`)} type="button" onClick={onClick}>
            {/* <ArrowIcon
                className={cn(`${CLASS_NAME}__${destination}`)}
                width="14"
                height="14"
                viewBox="0 0 6 15"
            /> */}
            {'<-'}
        </button>
    );
});
