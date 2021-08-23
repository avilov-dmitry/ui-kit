import React from 'react';
import classnames from 'classnames/bind';
import { Checkbox, CheckboxClickParamsType } from 'components';
import styles from './CheckboxList.modules.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'CheckboxList';

export type CheckboxItemType = {
    id: string;
    label?: string;
    name?: string;
    value: boolean;
};

export type CheckboxListPropsType = {
    isDisabled?: boolean;
    isLeftLabel?: boolean;
    isSquare?: boolean;
    items: Array<CheckboxItemType>;
    onClick?: (params: CheckboxClickParamsType) => void;
};

export const CheckboxList: React.FC<CheckboxListPropsType> = ({
    isDisabled,
    isLeftLabel = false,
    isSquare = false,
    items,
    onClick,
}) => {
    return (
        <div className={cn(CLASS_NAME, { [`${CLASS_NAME}--isLeftLabel`]: isLeftLabel })}>
            {items.map((item) => (
                <Checkbox
                    key={item.id}
                    onClick={onClick}
                    isDisabled={isDisabled}
                    isLeftLabel={isLeftLabel}
                    isSquare={isSquare}
                    className={cn(`${CLASS_NAME}__item`)}
                    {...item}
                />
            ))}
        </div>
    );
};
