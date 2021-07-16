import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, MediaPlayer, MediaPlayerPropsType } from 'components';

export default {
    title: 'Example/MediaPlayer',
    background: '#EFEEEE',
    component: MediaPlayer,
} as Meta;

export const Simple: Story<MediaPlayerPropsType> = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(!isOpen);

    return (
        <div style={{ margin: 150, height: '100vh' }}>
            <Button text="Нажми" onClick={handleClick} />

            <MediaPlayer isOpened={isOpen} onClose={handleClick} />
        </div>
    );
};
