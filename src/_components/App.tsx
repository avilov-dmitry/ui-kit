import React from 'react';
import classname from 'classnames/bind';
import styles from './App.module.scss';

const CLASS_NAME = 'App';
const cn = classname.bind(styles);

function App() {
  return <div className={cn(CLASS_NAME)}>ewrf</div>;
}

export default App;
