import React, { useCallback, useEffect } from 'react';
import cn from 'classnames';
import { KEY_CODES } from 'custom/_constants';

import './Modal.scss';

const CLASS_NAME = 'Modal';

type PropsType = {
  color: 'white' | 'dark';
  // modalClassName: string;
  children: React.ReactNode;
  onClose: any;
};

export const Modal = ({ color, children, onClose }: PropsType) => {
  useEffect(() => {
    document.addEventListener('keydown', handleDocumentKeyDown);

    return () => {
      document.removeEventListener('keydown', handleDocumentKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDocumentKeyDown = useCallback(
    ({ keyCode }) => {
      if (keyCode === KEY_CODES.ESCAPE) {
        onClose();
      }
    },
    [onClose]
  );

  const handleClickOutside = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <div
      className={cn(CLASS_NAME, {
        [`${CLASS_NAME}--${color}`]: color
      })}
    >
      {children}
    </div>
  );
};
