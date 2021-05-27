import React, { memo } from 'react';
import ReactDOM from 'react-dom';

export type PortalPropsType = {
  isOpened: boolean;
  children: React.ReactNode;
};

export const Portal: React.FunctionComponent<PortalPropsType> = memo(({ isOpened, children }) => {
  if (!isOpened) {
    return null;
  }

  return (
    ReactDOM.createPortal(children, document.body)
  );
})


Portal.displayName = 'Portal'