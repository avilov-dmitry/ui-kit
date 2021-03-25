export type SelectOptionType = {
  id: string;
  label: string;
  [key: string]: any;
};

export type SelectChangeType = {
  value: SelectOptionType;
  event: any;
};

export type ButtonColorsType = 'black' | 'grey-dark' | 'pink';

export type ButtonType = 'button' | 'submit' | 'reset';
