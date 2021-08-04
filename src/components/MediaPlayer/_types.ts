export type MediaPlayerFileType = {
    id: string;
    name: string;
    type: string;
    /** Ссылка содержимое файла. */
    src: string;
    mimeType: string;
    /** Ссылка на картинку, которая будет отображаться, пока видео не доступно или не вопроизводится. Используется для видео. */
    posterUrl?: string;
};

export type MediaPlayerPropsType = {
    /** Флаг, который отвечает за показ плеера */
    isOpened?: boolean;
    /** Колбэк, для обработки закрытия плеера */
    onClose: () => void;
    /** Колбэк, для включения предыдущего файла */
    onClickPrevFile: (params: { file: MediaPlayerFileType }) => void;
    /** Колбэк, для включения следующего файла */
    onClickNextFile: (params: { file: MediaPlayerFileType }) => void;
    /** Файл который нужно воспроизвести */
    file: MediaPlayerFileType;
    /** Время таймера через который скроются контролы после движения мышки */
    delay?: number;
};
