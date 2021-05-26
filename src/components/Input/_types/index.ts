export type InputPropsType = {
  /** className для переопределени дефолтных стилей */
  className?: string;
  /** Сообщение об ошибке заполнения поля */
  error?: string;
  /** Идентификатор инпута */
  id?: string;
  /** Индикатор который вытсавляет кнопке ширину 100% */
  isFullWidth?: boolean;
  /** Label и placeholder инпута */
  label?: string;
  /** Текущее значение инпута */
  value?: string;
  /** Флаг который отключает ввод в инпут */ 
  isReadOnly?: boolean;
  /** Обработчик изменения инпута */
  onChange: (params: InputChangeParamsType) => void;
};

export type InputChangeParamsType = {
  event: React.KeyboardEvent<HTMLElement>;
  id?: string;
  value: string;
}
