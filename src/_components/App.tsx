import React from 'react';
import classname from 'classnames/bind';
import styles from './App.module.scss'

const CLASS_NAME = "App";
const cn = classname.bind(styles);

function App() {
  return (
    <div className={cn(CLASS_NAME)}>
      <header className={cn(`${CLASS_NAME}__header`)}>
      1234
      </header>
    </div>
  );
}

export default App;
