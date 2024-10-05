'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';
import { TbRefresh } from 'react-icons/tb';

import useDisclosure from '@/hooks/useDisclosure';
import { useQueryParams } from '@/hooks/useQueryParams';

import Button from '@/components/buttons/Button';
import RatePercentageIndicator from '@/components/RatePercentageIndicator';

import ChangeCurrenciesModal from '@/app/(authenticated-layout)/transactions/_components/ChangeCurrenciesModal';
import {
  BASE_CURRENCY_QUERY_KEY,
  mockCurrencies,
  QUOTE_CURRENCY_QUERY_KEY,
} from '@/constant/appConstants';

export default function ExchangeRateDisplay() {
  const changeCurrencyModal = useDisclosure();
  const { updateQueryParam } = useQueryParams();

  const [baseCurrency, setBaseCurrency] =
    useState<(typeof mockCurrencies)[number]>();
  const [quoteCurrency, setQuoteCurrency] =
    useState<(typeof mockCurrencies)[number]>();

  const searchParams = useSearchParams();
  const baseCurrencyCode = searchParams.get(BASE_CURRENCY_QUERY_KEY) ?? '';
  const quoteCurrencyCode = searchParams.get(QUOTE_CURRENCY_QUERY_KEY) ?? '';

  useEffect(() => {
    const baseCurrencyFound = mockCurrencies.find(
      (currency) => currency.code === baseCurrencyCode
    );
    const quoteCurrencyFound = mockCurrencies.find(
      (currency) => currency.code === quoteCurrencyCode
    );

    setBaseCurrency(baseCurrencyFound);
    setQuoteCurrency(quoteCurrencyFound);
  }, [baseCurrencyCode, quoteCurrencyCode, searchParams]);

  useLayoutEffect(() => {
    const initialBaseCurrencyCode = searchParams.get(BASE_CURRENCY_QUERY_KEY);
    const initialQuoteCurrencyCode = searchParams.get(QUOTE_CURRENCY_QUERY_KEY);

    if (!initialBaseCurrencyCode)
      updateQueryParam({ [BASE_CURRENCY_QUERY_KEY]: 'CAD' });
    if (!initialQuoteCurrencyCode)
      updateQueryParam({ [QUOTE_CURRENCY_QUERY_KEY]: 'NGN' });
  }, [searchParams, updateQueryParam]);

  return (
    <div className='border border-[#D6B6FF] rounded-[12px] py-8 px-7 bg-white flex items-start justify-between'>
      {baseCurrency && quoteCurrency && (
        <div className='flex flex-col gap-7'>
          <div className='flex items-center gap-[10px]'>
            <p>{baseCurrency?.name}</p>
            <div className='flex items-center gap-2'>
              <Image
                src={baseCurrency.flag}
                alt={baseCurrency.flag}
                width={24}
                height={24}
                className='w-6 h-6 rounded-[100%] object-cover'
              />
              <p className='font-medium'>{baseCurrency.code}</p>
            </div>
          </div>
          <div className='flex items-center gap-[10px]'>
            <div className='flex items-center gap-2'>
              <Image
                src={quoteCurrency.flag}
                alt={quoteCurrency.flag}
                width={24}
                height={24}
                className='w-6 h-6 rounded-[100%] object-cover'
              />
              <p className='font-semibold text-[28px]'>N1,750</p>
            </div>
            <RatePercentageIndicator amount='5' />
            <p className='text-light-grey'>{quoteCurrency.name}</p>
          </div>
        </div>
      )}
      <Button
        variant='ghost'
        rightIcon={TbRefresh}
        onClick={changeCurrencyModal.open}
        className='text-primary-pink font-normal'
        classNames={{ rightIcon: 'text-2xl ml-3' }}
      >
        Change Currencies
      </Button>

      <ChangeCurrenciesModal
        isOpen={changeCurrencyModal.isOpen}
        handleOpenModal={changeCurrencyModal.open}
        handleCloseModal={changeCurrencyModal.close}
      />
    </div>
  );
}
