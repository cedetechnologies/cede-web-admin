export { formatAmountNaira, formatAmountPercentage } from './cc_format';

export const formatNumber = (amount: number | string, clean = false) => {
  amount = amount?.toString();
  // Remove any non-digit characters
  const cleanAmount = clean ? amount.replace(/\D/g, '') : amount;

  return `${parseFloat(cleanAmount || '0').toLocaleString('en-us', {
    maximumFractionDigits: 2,
  })}`;
};

export const formatNumberAsOrdinal = (num: number) => {
  const map = {
    1: 'st',
    2: 'nd',
    3: 'rd',
    11: 'th',
    12: 'th',
    13: 'th',
  } as const;
  return `${num}${map[num as keyof typeof map] ?? 'th'}`;
};

export const slugify = (text: string) =>
  text.toLocaleLowerCase().replace(/\W+/gi, '-');

export const deSlugify = (text: string) => text.replace(/-+/gi, ' ');

export const acceptNumbersOnly = (text: string) => text.replace(/[^0-9]/g, '');
