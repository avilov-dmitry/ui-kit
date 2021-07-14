import React, { FunctionComponent, memo, useState } from 'react';
import classnames from 'classnames/bind';
import { Overlay, Portal } from 'components';
import { MediaPlayerPropsType } from './_types';
import styles from './MediaPlayer.module.scss';
import { MediaPlayerHeader } from './_components';

const cn = classnames.bind(styles);
const CLASS_NAME = 'MediaPlayer';

export const MediaPlayer: FunctionComponent<MediaPlayerPropsType> = memo(
    ({ isOpened = false, onClose }) => {
        const [isVisibleHeader, setIsVisibleHeader] = useState(false);
        return (
            <Portal isOpened={isOpened}>
                <Overlay withOpacity={false}>
                    <div className={cn(CLASS_NAME)}>
                        <MediaPlayerHeader isVisible={isVisibleHeader} onClose={onClose} />
                    </div>
                </Overlay>
            </Portal>
        );
    }
);

MediaPlayer.displayName = 'MediaPlayer';
