import React, { useCallback } from 'react';
import cn from 'classnames';
import './Tab.scss';

type PropsType = {
  id: string;
  text: string;
  activeTab: string;
  onChangeTab: (params: any) => void;
};

const CLASS_NAME = 'Tab';

export const Tab = ({ id, text, activeTab, onChangeTab }: PropsType) => {
  const handleChange = useCallback(() => {
    onChangeTab({ id });
  }, [id, onChangeTab]);

  return (
    <button
      className={cn(CLASS_NAME, { [`${CLASS_NAME}--active`]: activeTab === id })}
      type="button"
      onClick={handleChange}
    >
      {text}
    </button>
  );
};
