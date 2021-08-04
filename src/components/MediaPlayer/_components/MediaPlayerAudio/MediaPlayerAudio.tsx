import React, { forwardRef, FunctionComponent, memo, Ref, SyntheticEvent } from 'react';
import { MediaPlayerFileType } from 'components';
import classnames from 'classnames/bind';
import styles from './MediaPlayerAudio.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'MediaPlayerAudio';

type PropsType = {
    ref: Ref<HTMLAudioElement>;
    file: MediaPlayerFileType;
    onError: (event: SyntheticEvent) => void;
    onPlay: (event: SyntheticEvent) => void;
    onPause: (event: SyntheticEvent) => void;
    // onEnded: (event: SyntheticEvent) => void;
};

export const MediaPlayerAudio: FunctionComponent<PropsType> = memo(
    forwardRef(({ file: { src, mimeType }, onError, onPlay, onPause }, ref) => {
        return (
            <audio
                ref={ref}
                onError={onError}
                onPlay={onPlay}
                onPause={onPause}
                className={cn(CLASS_NAME)}
            >
                {/* <audio controls onError={onError} onPlay={onPlay} onPause={onPause} onEnded={onEnded}> */}
                <source src={src} type={mimeType} />
            </audio>
        );
    })
);

MediaPlayerAudio.displayName = 'MediaPlayerAudio';
