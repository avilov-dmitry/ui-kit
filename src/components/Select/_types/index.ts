export type SelectOptionType = {
  id: string;
  label: string;
  [key: string]: any;
};

export type SelectChangeType = {
  value: SelectOptionType;
  event: any;
};
