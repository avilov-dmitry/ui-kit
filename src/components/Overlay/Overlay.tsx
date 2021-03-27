import React, {
  SyntheticEvent,
} from 'react';
import cn from 'classnames/bind';
import'./Overlay.scss';

export type OverlayPropsType = {
  /** флаг меняющий свойство position с fixed на absolute */
  isAbsolute?: boolean;
  /** содержимое компонента */
  children: React.ReactNode;
  /** коллбек клика по оверлею */
  onClick?: (event: SyntheticEvent) => void;
  /** флаг меняющий backgroundColor на transparent */
  isTransparent?: boolean;
};

const CLASS_NAME = 'Overlay'

export const Overlay: React.FunctionComponent<OverlayPropsType> = ({
  children,
  isAbsolute,
  isTransparent,
  onClick = () => false,
}: OverlayPropsType) => {

  return (
    <div
      className={cn(CLASS_NAME, {
        [`${CLASS_NAME}-isTransparent`]: isTransparent,
        [`${CLASS_NAME}-isAbsolute`]: isAbsolute,
      })}
      onClick={onClick}
      role="presentation"
    >
      {children}
    </div>
  );
}
