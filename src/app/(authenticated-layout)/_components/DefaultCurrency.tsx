'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useQueryParams } from '@/hooks/useQueryParams';

import Dropdown from '@/components/dropdown';

import getFlagUrl from '@/utils/cc_format';

const currencies = [
  { code: 'CAD', flag: getFlagUrl('CA'), label: 'Canadian Dollar' },
  { code: 'NGN', flag: getFlagUrl('NG'), label: 'Nigerian Naira' },
  { code: 'USD', flag: getFlagUrl('US'), label: 'United States Dollar' },
  // Add more currencies as needed
];

export default function DefaultCurrency() {
  const defaultCurrencyParamKey = 'defaultCurrency';
  const [currencyLabel, setCurrencyLabel] = useState('');

  const { query } = useQueryParams();

  const currencyOptions = currencies.map((cur) => ({
    value: cur.code,
    label: cur.code,
    render: (
      <div className='flex items-center gap-[6px]'>
        <div className='w-6 h-6'>
          <Image
            key={cur.code}
            src={cur.flag}
            alt={cur.code}
            width={24}
            height={24}
            className='rounded-[100%] w-6 h-6 object-cover'
          />
        </div>
        <p className=''>{cur.code}</p>
      </div>
    ),
  }));

  useEffect(() => {
    const currencyCode = query.get(defaultCurrencyParamKey);

    const currency = currencies.find((cur) => cur.code === currencyCode);

    setCurrencyLabel(currency?.label ?? '');
  }, [query]);

  return (
    <div className='flex items-center justify-between'>
      <p className='font-medium text-xl text-light-grey'>Default Currency</p>

      <div className='w-fit flex items-center gap-32 border-[1.5px] border-secondary-grey pl-4 bg-white rounded-[8.5px] py-2'>
        <p>{currencyLabel}</p>
        <Dropdown
          label='Currency'
          paramKey={defaultCurrencyParamKey}
          options={currencyOptions}
          defaultValue='USD'
          containerClassName='w-fit'
          dropdownButtonClassName='border-none'
        />
      </div>
    </div>
  );
}
