import React, { FunctionComponent, memo } from 'react';

type PropsType = {
    isOpened: boolean;
};

export const MediaPlayerControls: FunctionComponent<PropsType> = memo(({ isOpened }: PropsType) => {
    return (
        <div>
            {isOpened ? (
                <span>MediaPlayerControls</span>
            ) : (
                <span>Not visible MediaPlayerControls</span>
            )}
        </div>
    );
});

MediaPlayerControls.displayName = 'MediaPlayerControls';
