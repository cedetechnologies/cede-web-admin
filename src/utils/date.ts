const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

export const getMonth = (month: number | `${number}` | `0${number}`) => {
  return MONTHS[+month - 1];
};
