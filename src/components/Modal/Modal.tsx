import React, { useCallback, useEffect } from 'react';
import cn from 'classnames';
import { KEY_CODES } from '../../constants';
import './Modal.scss';
import { CloseIcon } from '../icons';
import { Portal } from '../Portal';
import { Overlay } from '../Overlay';

const CLASS_NAME = 'Modal';

export type ModalPropsType = {
  isOpened: boolean;
  withCloseIcon?: boolean;
  modalClassName: string;
  closeIconClassName: string;
  children: React.ReactNode;
  onClose: () => void;
};

export const Modal: React.FunctionComponent<ModalPropsType> = ({ isOpened, children, modalClassName = '', closeIconClassName='', withCloseIcon = false, onClose }) => {
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

  return (
    <Portal isOpened={isOpened}>
      <Overlay>
        <div
          className={cn(CLASS_NAME, modalClassName)}
        >
          {withCloseIcon && <CloseIcon className={cn(`${CLASS_NAME}__icon`, closeIconClassName)} onClick={onClose} />}
          {children}
        </div>  
      </Overlay>
    </Portal>
  );
};
