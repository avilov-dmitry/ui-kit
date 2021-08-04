import React, { FunctionComponent, memo, useCallback, useMemo, useRef, useState } from 'react';
import classnames from 'classnames/bind';
import { Overlay, Portal } from 'ui-kit';
import { MediaPlayerPropsType } from './_types';
import styles from './MediaPlayer.module.scss';
import {
    MediaPlayerAudio,
    MediaPlayerControlBox,
    MediaPlayerHeader,
    MediaPlayerVideo,
} from './_components';
import { getDisplayedCurrentTime } from './_utils';

const cn = classnames.bind(styles);
const CLASS_NAME = 'MediaPlayer';

export const MediaPlayer: FunctionComponent<MediaPlayerPropsType> = memo(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ file, file: { type }, isOpened = false, onClose, delay = 3000 }) => {
        const [isVisibleHeader, setIsVisibleHeader] = useState(false);
        const [process, setValue] = useState(50);
        const [showPause, setShowPause] = useState(false);
        const [displayedTime, setDisplayedTime] = useState('00:00');
        const audioRef = useRef<HTMLAudioElement>(null);
        const videoRef = useRef<HTMLVideoElement>(null);

        // const [timerId, setTimerId] = useState<null | number>(null);

        const handlePlay = useCallback(() => {
            console.log(handlePlay);
        }, []);

        const handlePause = useCallback(() => {
            console.log(handlePause);
        }, []);

        const handleError = useCallback(() => {
            console.log(handleError);
        }, []);

        const handlePlayPause = useCallback(() => {
            const activeRef = type === 'video' ? videoRef?.current : audioRef?.current;

            if (activeRef?.paused) {
                activeRef.play();
                setShowPause(true);
            } else {
                activeRef?.pause();
                setShowPause(false);
            }
        }, []);

        const handleRewind = useCallback(() => {
            const activeRef = type === 'video' ? videoRef?.current : audioRef?.current;
            if (activeRef) {
                activeRef.currentTime -= 15;
                setDisplayedTime(getDisplayedCurrentTime(activeRef.currentTime));
            }
        }, []);
        const handleFastForward = useCallback(() => {
            const activeRef = type === 'video' ? videoRef?.current : audioRef?.current;
            if (activeRef) {
                activeRef.currentTime += 15;
                setDisplayedTime(getDisplayedCurrentTime(activeRef.currentTime));
            }
        }, []);

        const handleTimeUpdate = useCallback(() => {
            const activeRef = type === 'video' ? videoRef?.current : audioRef?.current;
            if (activeRef) {
                setDisplayedTime(getDisplayedCurrentTime(activeRef.currentTime));
            }
        }, []);

        const handleEnded = useCallback(() => {
            const activeRef = type === 'video' ? videoRef?.current : audioRef?.current;

            if (activeRef) {
                activeRef.currentTime = 0;
            }
        }, []);

        const displayedFullTime = useMemo(() => '3:00', []);

        // const handleCloseAfterTimer = () => {
        //     setIsVisibleHeader(false);
        //     setTimerId(null);
        //     clearTimeout(timerId);
        // };

        // const handleMouseMove = useCallback(() => {
        //     setIsVisibleHeader(true);
        //     setTimerId(setTimeout(handleCloseAfterTimer, delay));
        // }, [timerId]);

        // useEffect(() => {
        //     document.addEventListener('mousemove', handleMouseMove);
        //     return () => document.removeEventListener('mousemove', handleMouseMove);
        // }, []);

        console.log({ file });

        return (
            <Portal isOpened={isOpened}>
                <Overlay withOpacity={false}>
                    <div className={cn(CLASS_NAME)}>
                        <MediaPlayerHeader isVisible={isVisibleHeader} onClose={onClose} />
                        {type === 'audio' && (
                            <MediaPlayerAudio
                                ref={audioRef}
                                file={file}
                                onPlay={handlePlay}
                                onPause={handlePause}
                                onError={handleError}
                            />
                        )}
                        {type === 'video' && (
                            <MediaPlayerVideo
                                ref={videoRef}
                                file={file}
                                onEnded={handleEnded}
                                onTimeUpdate={handleTimeUpdate}
                            />
                        )}

                        {type === 'img' && <img src={file.mimeType} alt={file.name} />}

                        <div style={{ zIndex: 1001, position: 'absolute', top: 100, left: 100 }}>
                            <button onClick={() => setIsVisibleHeader(true)}>Открыть !</button>
                            <button onClick={() => setIsVisibleHeader(false)}>Закрыть !</button>
                        </div>

                        <div
                            className={cn(`${CLASS_NAME}__controls`, {
                                [`${CLASS_NAME}__controls--isVisible`]: isVisibleHeader,
                            })}
                        >
                            <MediaPlayerControlBox
                                process={process}
                                showPause={showPause}
                                displayedFullTime={displayedFullTime}
                                displayedTime={displayedTime}
                                onChangeTime={({ value }) => setValue(value)}
                                onClickPlayPause={handlePlayPause}
                                onClickRewind={handleRewind}
                                onClickFastForward={handleFastForward}
                            />
                        </div>
                    </div>
                </Overlay>
            </Portal>
        );
    }
);

MediaPlayer.displayName = 'MediaPlayer';
