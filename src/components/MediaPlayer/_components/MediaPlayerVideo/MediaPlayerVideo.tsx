import React, { forwardRef, FunctionComponent, memo, Ref, SyntheticEvent } from 'react';
import { MediaPlayerFileType } from 'components';
import classnames from 'classnames/bind';
import styles from './MediaPlayerVideo.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'MediaPlayerVideo';

type PropsType = {
    ref: Ref<HTMLVideoElement>;
    file: MediaPlayerFileType;
    onTimeUpdate: (event: SyntheticEvent) => void;
    onEnded: (event: SyntheticEvent) => void;
};

export const MediaPlayerVideo: FunctionComponent<PropsType> = memo(
    forwardRef(({ file: { src, posterUrl }, onTimeUpdate, onEnded }, ref) => {
        return (
            <video
                src={src}
                className={cn(CLASS_NAME)}
                ref={ref}
                onEnded={onEnded}
                onTimeUpdate={onTimeUpdate}
                poster={posterUrl}
            />
        );
    })
);

MediaPlayerVideo.displayName = 'MediaPlayerVideo';
