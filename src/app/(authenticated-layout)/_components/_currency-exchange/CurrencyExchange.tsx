'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEventHandler, useState } from 'react';
import { LiaExchangeAltSolid } from 'react-icons/lia';

import IconButton from '@/components/buttons/IconButton';

import {
  CURRENCY_FROM_QUERY_KEY,
  CURRENCY_TO_QUERY_KEY,
} from '@/constant/appConstants';
import getFlagUrl, { formatAmount, removeNonDigit } from '@/utils/cc_format';

import CurrencyInput from './CurrencyInput';

const currencies = [
  { code: 'CAD', flag: getFlagUrl('CA') },
  { code: 'NGN', flag: getFlagUrl('NG') },
  { code: 'USD', flag: getFlagUrl('US') },
  // Add more currencies as needed
];

export default function CurrencyExchange() {
  const router = useRouter();
  const [leftAmount, setLeftAmount] = useState('100');
  const [rightAmount, setRightAmount] = useState(getRightAmount(leftAmount));

  const searchParams = useSearchParams();
  const currencyFrom = searchParams.get(CURRENCY_FROM_QUERY_KEY) ?? '';
  const currencyTo = searchParams.get(CURRENCY_TO_QUERY_KEY) ?? '';

  const handleLeftAmountChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLeftAmount(e.target.value);

    // setRightAmount(getRightAmount(e.target.value));
    // Logic to calculate and set rightAmount based on exchange rate
  };

  const switchCurrencies = () => {
    const tempAmount = leftAmount;
    setLeftAmount(rightAmount);
    setRightAmount(tempAmount);

    const params = new URLSearchParams(searchParams.toString());
    params.set(CURRENCY_FROM_QUERY_KEY, currencyTo);
    params.set(CURRENCY_TO_QUERY_KEY, currencyFrom);

    router.replace(`?${params.toString()}`, {
      scroll: false,
    });
  };

  function getRightAmount(leftAmount: string) {
    const cleanLeftAmountInNumber = Number(removeNonDigit(leftAmount));
    return formatAmount(String(cleanLeftAmountInNumber / 2));
  }

  return (
    <div className='flex items-center gap-8'>
      <CurrencyInput
        paramKey={CURRENCY_FROM_QUERY_KEY}
        value={leftAmount}
        onChange={handleLeftAmountChange}
        currencies={currencies}
        isEditable={true}
        defaultCurrencyValue='CAD'
      />
      <div>
        <IconButton
          icon={LiaExchangeAltSolid}
          variant='ghost'
          onClick={switchCurrencies}
          className='text-3xl w-14 h-14 flex items-center justify-center rounded-[12px] bg-white border border-secondary-grey'
        />
      </div>

      <CurrencyInput
        paramKey={CURRENCY_TO_QUERY_KEY}
        value={getRightAmount(leftAmount)}
        onChange={() => {
          //
        }}
        currencies={currencies}
        isEditable={false}
        defaultCurrencyValue='NGN'
      />
    </div>
  );
}
