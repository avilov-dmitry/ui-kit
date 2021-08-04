export type ElementResizeListenerSize = {
    width: number;
    height: number;
};

export type ElementResizeListenerPropsType = {
    onResize: (viewSize: ElementResizeListenerSize) => void;
};
