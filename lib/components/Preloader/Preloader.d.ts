import { FunctionComponent } from 'react';
declare type PreloaderPropsType = {
    className?: string;
    isLoading?: boolean;
    isAbsolute?: boolean;
    isTransparent?: boolean;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    color?: 'dark' | 'white' | 'blue' | 'grey' | 'greyDark';
};
export declare const Preloader: FunctionComponent<PreloaderPropsType>;
export {};
