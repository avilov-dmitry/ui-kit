export type SelectOptionType = {
  id: string;
  label: string;
  [key: string]: unknown;
};

export type SelectChangeType = {
  value: SelectOptionType;
  event: any;
};
