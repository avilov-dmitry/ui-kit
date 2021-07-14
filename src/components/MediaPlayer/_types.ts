export type MediaPlayerPropsType = {
    /** Флаг, который отвечает за показ плейра */
    isOpened?: boolean;
    /** Колбэк, для обработки закрытия плейра */
    onClose: () => void;
};
