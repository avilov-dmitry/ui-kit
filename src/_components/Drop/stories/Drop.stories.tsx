import React, { useState, memo } from 'react';
import { storiesOf } from '@storybook/react';
import { Drop } from '../Drop';
import { Calendar } from '../../Calendar';

const DropStoryContainer = ({ children }: any) => {
  const [isOpened, setValue] = useState(false);

  const handleClickControl = (params: any) => {
    console.log('handleClickControl');
    setValue(true);
  };
  const handleClickOutside = (params: any) => {
    console.log(params);
    setValue(false);
  };

  return children({
    onClickControl: handleClickControl,
    onClickOutside: handleClickOutside,
    isOpened
  });
};

const Button = memo(() => <button>test</button>);

storiesOf('Drop', module)
  .addParameters({
    component: Drop,
    componentSubtitle: 'Компонент .....'
  })
  .add('Drop simple', () => (
    <DropStoryContainer>
      {({ isOpened, onClickControl, onClickOutside }: any) => (
        <Drop
          control={<Button />}
          dropdown={
            <Calendar id={'12'} onChange={(value: any) => console.log(value)} value={new Date()} />
          }
          isOpened={Number('isOpened') || isOpened}
          onClickControl={onClickControl}
          onClickOutside={onClickOutside}
        />
      )}
    </DropStoryContainer>
  ));
