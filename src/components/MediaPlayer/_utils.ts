import { getDisplayedNumber } from '_utils';
import { MediaPlayerFileType } from './_types';

type ParamsType = {
    list: Array<MediaPlayerFileType>;
    currentFile: MediaPlayerFileType;
};

const getPrevFile = ({ list, currentFile }: ParamsType): MediaPlayerFileType => {
    const currentFileIndex = list.findIndex((item) => item.id === currentFile.id);

    if (currentFileIndex === list.length - 1) {
        return list[0];
    }

    return list[currentFileIndex + 1];
};

const getNextFile = ({ list, currentFile }: ParamsType): MediaPlayerFileType => {
    const currentFileIndex = list.findIndex((item) => item.id === currentFile.id);

    if (currentFileIndex === 0) {
        return list[list.length - 1];
    }

    return list[currentFileIndex - 1];
};

export const getDisplayedCurrentTime = (time: number): string => {
    const amountOfSecondsInHour = 60 * 60;
    let hours = Math.floor(time / amountOfSecondsInHour);
    const remainOfHours = time % amountOfSecondsInHour;
    let mimunes = Math.floor(remainOfHours / 60);
    let seconds = Math.ceil(remainOfHours % 60);

    if (seconds === 60) {
        seconds = 0;
        mimunes = mimunes + 1;
    }
    if (mimunes === 60) {
        mimunes = 0;
        hours = hours + 1;
    }

    const result = `${getDisplayedNumber(mimunes)}:${getDisplayedNumber(seconds)}`;

    return hours === 0 ? result : `${getDisplayedNumber(hours)}:${result}`;
};

export const MediaPlayerTools = {
    getPrevFile,
    getNextFile,
};
