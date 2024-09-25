export function cc_format(value: string) {
  // Remove all non-digit characters
  let cardNumber = value.replace(/\D/g, '');

  // Add a space after every fourth digit
  cardNumber = cardNumber.replace(/(\d{4})/g, '$1 ');

  // Trim any extra whitespace
  cardNumber = cardNumber.trim();

  return cardNumber;
}

export function formatExpiryDate(dateString: string): string {
  // Remove any non-digit characters
  const cleanDate = dateString.replace(/\D/g, '');

  // Extract the month and year values from the string
  const month = cleanDate.substring(0, 2);
  const year = cleanDate.substring(2, 4);

  if (!year) {
    return `${month}`;
  }

  // Format the date string as "MM / YY"
  const formattedDate = `${month} / ${year}`;

  return formattedDate;
}

export function formatAmountDollars(amount: string) {
  // Remove any non-digit characters
  const cleanAmount = amount.replace(/\D/g, '');

  return `$ ${parseFloat(cleanAmount || '0').toLocaleString('en-us', {
    maximumFractionDigits: 2,
  })}`;
}

export function formatAmountNaira(amount: number | string, clean = false) {
  amount = amount?.toString();
  // Remove any non-digit characters
  const cleanAmount = clean ? amount.replace(/\D/g, '') : amount;

  return `₦ ${parseFloat(cleanAmount || '0').toLocaleString('en-us', {
    maximumFractionDigits: 2,
  })}`;
}

export function formatAmountPercentage(amount: string) {
  // Remove any non-digit characters
  const cleanAmount = amount.replace(/\D/g, '');

  return `% ${parseFloat(cleanAmount || '0').toLocaleString('en-us', {
    maximumFractionDigits: 2,
  })}`;
}

export function removeNonDigit(amount: string) {
  // Remove any non-digit characters
  if (!amount) return '';

  return amount.replace(/[^0-9.]/g, '');
}

export function formatAmount(amount: string, currency?: '₦' | '$' | string) {
  // Remove any non-digit characters
  const cleanAmount = removeNonDigit(amount);

  return `${currency ? `${currency} ` : ''}${
    cleanAmount
      ? parseFloat(cleanAmount).toLocaleString('en-us', {
          maximumFractionDigits: 2,
        })
      : ''
  }`;
}

export function formatTag(tag: string) {
  const newTag = tag.replace(/[^a-zA-Z0-9]+/g, '');

  return `@ ${newTag}`;
}

export function cleanTag(tag: string) {
  return tag.replace(/[^a-zA-Z0-9]+/g, '');
}

export function formatDateTimeToISO(
  date: string | undefined,
  time: string | undefined
) {
  if (date && time) {
    return new Date(`${date} ${time}`).toISOString();
  }
  return '';
}

export function formatISODatetoString(date = '2023-12-05T00:36:06.278Z') {
  const parsedDate = new Date(date).toDateString();
  const [, month, day, year] = parsedDate.split(' ');
  return `${month} ${day}, ${year}`;
}

export function formatISODatetoDashSeparatedDateString(
  date = '2023-12-05T00:36:06.278Z'
) {
  const parsedDate = new Date(date);

  return `${parsedDate.getDate()} - ${
    parsedDate.getMonth() + 1
  } - ${parsedDate.getFullYear()}`;
}

export function formatISODateto12HourTimeString(
  date = '2023-12-05T00:36:06.278Z'
) {
  const parsedDate = new Date(date);
  let hours = parsedDate.getHours();
  const minutes = parsedDate.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  hours = hours || 12; // The hour '0' should be '12'
  const parsedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${hours} : ${parsedMinutes} ${ampm}`;
  return strTime;
}

export function getDiscountedPrice(amount: string, percentage: string) {
  const initialAmount = Number(removeNonDigit(amount));
  const discountPercentage = Number(removeNonDigit(percentage));

  const discountedPrice =
    discountPercentage <= 100
      ? Number(
          initialAmount - (discountPercentage / 100) * initialAmount
        ).toString()
      : '0';
  return discountedPrice;
}

export function testPassword(
  test: 'uppercase' | 'lowercase' | 'special' | 'number' | 'length',
  password: string,
  length?: number
) {
  const regex =
    test === 'lowercase'
      ? /[a-z]/
      : test === 'uppercase'
      ? /[A-Z]/
      : test === 'number'
      ? /\d/
      : test === 'length'
      ? new RegExp(`^.{${length},}$`)
      : /[^\w\d.]/;

  return regex.test(password);
}

export default function getFlagUrl(countryCode: string) {
  return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`;
}
