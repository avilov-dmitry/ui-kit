import React, { FunctionComponent, memo } from 'react';
import { Overlay, Portal } from 'components';
import { MediaPlayerPropsType } from './_types';

export const MediaPlayer: FunctionComponent<MediaPlayerPropsType> = memo(({ isOpened = false }) => {
    return (
        <Portal isOpened={isOpened}>
            <Overlay>
                <div></div>
            </Overlay>
        </Portal>
    );
});

MediaPlayer.displayName = 'MediaPlayer';
