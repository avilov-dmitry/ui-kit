import * as React from 'react';
import { DropPropsType } from './_types';
import './Drop';
declare type StateType = {
    controlHeight: string;
    controlWidth: string;
    dropdownHeight: string;
    dropdownWidth: string;
    isVisible: boolean;
    openToLeft: boolean;
    openToTop: boolean;
};
export declare class Drop extends React.PureComponent<DropPropsType, StateType> {
    private readonly wrapperRef;
    private readonly controlRef;
    private readonly dropdownRef;
    constructor(props: DropPropsType);
    componentDidMount(): void;
    componentDidUpdate(prevProps: DropPropsType): void;
    handleClickOutside: (e: any) => void;
    handleOnControl: (e: any) => void;
    render(): JSX.Element;
}
export {};
