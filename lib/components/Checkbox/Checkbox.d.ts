import React from 'react';
declare type PropsType = {
    name?: string;
    value?: boolean;
    isDisabled?: boolean;
    onClick?: (params: {
        value: boolean;
    }) => void;
};
export declare const Checkbox: React.FC<PropsType>;
export {};
