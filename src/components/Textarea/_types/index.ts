export type TextareaPropsType = {
  /** className для переопределени дефолтных стилей */
  className?: string;
  /** Сообщение об ошибке заполнения поля */
  error?: string;
  /** Идентификатор инпута */
  id?: string;
  /** Label и placeholder инпута */
  label?: string;
  /** Текущее значение инпута */
  value?: string;
  /** Флаг который отключает ввод в инпут */ 
  isReadOnly?: boolean;
  /** Обработчик изменения инпута */
  onChange: (params: TextareaChangeParamsType) => void;
};

export type TextareaChangeParamsType = {
  event: React.KeyboardEvent<HTMLElement>;
  id: string;
  value: string;
}
