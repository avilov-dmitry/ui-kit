import React, { FunctionComponent, memo } from 'react';
import classnames from 'classnames/bind';
import { IconButton, ThumbSlider, ThumbSliderChangeType } from 'ui-kit';
import styles from './MediaPlayerControlBox.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'MediaPlayerControlBox';

type PropsType = {
    displayedFullTime: string;
    displayedTime: string;
    showPause: boolean;
    onChangeTime: ThumbSliderChangeType;
    onClickFastForward: () => void;
    onClickPlayPause: () => void;
    onClickRewind: () => void;
    process: number;
};

export const MediaPlayerControlBox: FunctionComponent<PropsType> = memo(
    ({
        process,
        displayedTime,
        displayedFullTime,
        onChangeTime,
        showPause,
        onClickPlayPause,
        onClickRewind,
        onClickFastForward,
    }: PropsType) => {
        return (
            <div className={cn(CLASS_NAME)}>
                <div className={cn(`${CLASS_NAME}__slider`)}>
                    <ThumbSlider value={process} onChange={onChangeTime} />
                    <div className={cn(`${CLASS_NAME}__timers`)}>
                        <div className="timer">
                            <span aria-label="timer">{displayedTime}</span>
                        </div>
                        <div className="timer">
                            <span aria-label="timer">{displayedFullTime}</span>
                        </div>
                    </div>
                </div>

                <div className={cn(`${CLASS_NAME}__controls`)}>
                    <IconButton
                        id="MediaPlayerControlBoxRewind"
                        onClick={onClickRewind}
                        name="rewind-outlined"
                        color="white"
                        classNameIcon={cn(`${CLASS_NAME}__rewind`)}
                    />
                    <IconButton
                        id="MediaPlayerControlBoxPlay"
                        onClick={onClickPlayPause}
                        color="white"
                        name={showPause ? 'pause-outlined' : 'play-outlined'}
                        classNameIcon={cn(`${CLASS_NAME}__play`)}
                    />
                    <IconButton
                        id="MediaPlayerControlBoxRewind"
                        onClick={onClickFastForward}
                        color="white"
                        name="fast-forward-outlined"
                        classNameIcon={cn(`${CLASS_NAME}__fast-forward`)}
                    />
                </div>
            </div>
        );
    }
);

MediaPlayerControlBox.displayName = 'MediaPlayerControlBox';
