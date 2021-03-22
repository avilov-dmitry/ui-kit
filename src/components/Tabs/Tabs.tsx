import React from 'react';
import cn from 'classnames';
import { Tab } from './_components';
import './Tabs.scss';

type TabType = {
  id: string;
  text: string;
};

type PropsType = {
  tabs: Array<TabType>;
  activeTab: string;
  onChange: (params: any) => void;
};

const CLASS_NAME = 'Tabs';

export const Tabs = ({ tabs, activeTab, onChange }: PropsType) => (
  <div className={cn(CLASS_NAME)}>
    {tabs.map(({ id, text }) => (
      <Tab activeTab={activeTab} id={id} key={id} text={text} onChangeTab={onChange} />
    ))}
  </div>
);
