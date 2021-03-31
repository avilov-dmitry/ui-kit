export type TogglePropsType = {
  /** className для переопределени дефолтных стилей */
  className?: string;
  /** Идентификатор переключателя */
  id?: string;
  /** Индикатор не активной переключателя */
  isDisabled?: boolean;
  /** Текст в кнопке, отображается, если НЕ передан children */
  label?: string;
  /** className для лейбла */
  labelClassName?: string;
  /** Обработчик нажатия переключателя */
  onClick?: (params: ToggleClickParamsType) => void;
  /** Текущее значение */
  value: boolean
};

export type ToggleClickParamsType = {
  event: React.MouseEvent<HTMLElement>;
  id?: string;
  value: boolean;
}
