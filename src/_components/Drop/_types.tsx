import * as React from 'react';

export interface Props {
  /**
   * Компонент при нажатии на которы появится dropdown
   */
  control: React.ReactNode;

  /**
   * Скрытый по умолчанию компонент
   */
  dropdown: React.ReactNode;

  /**
   * Определяет открыт ли компонент сейчас
   */
  isOpened?: boolean;

  /**
   * Обработчик для клика по control'у
   */
  onClickControl?: () => void;

  /**
   * Обработчик для клика вне области
   */
  onClickOutside?: () => void; //
}
