import React from 'react';
import ReactDOM from 'react-dom';

export type PortalPropsType = {
  isOpened: boolean;
  children: React.ReactNode;
};

export const Portal: React.FunctionComponent<PortalPropsType> = ({ isOpened, children }) => {
  if (!isOpened) {
    return null;
  }

  return (
    ReactDOM.createPortal(children, document.body)
  );
};
