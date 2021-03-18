import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Slider } from '../Slider';

const SliderStoryContainer = ({ children }: any) => {
  const [value, setValue] = useState();

  const handleChange = ({ value }: any) => setValue(value);

  return children({
    onChange: handleChange,
    value
  });
};

storiesOf('Slider', module)
  .addParameters({
    component: Slider,
    componentSubtitle: 'Компонент .....'
  })
  .add('Slider simple', () => (
    <SliderStoryContainer>
      {({ onChange, value }: any) => (
        <Slider onChange={onChange} value={Number('value') || value} variant="info" />
      )}
    </SliderStoryContainer>
  ));
