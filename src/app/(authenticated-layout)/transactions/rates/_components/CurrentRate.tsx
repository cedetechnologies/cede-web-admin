'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import useDisclosure from '@/hooks/useDisclosure';
import { useQueryParams } from '@/hooks/useQueryParams';

import Button from '@/components/buttons/Button';
import Dropdown from '@/components/dropdown';
import RatePercentageIndicator from '@/components/RatePercentageIndicator';

import EditRateModalContainer from '@/app/(authenticated-layout)/transactions/rates/_components/EditRateModalContainer';
import { mockCurrencies } from '@/constant/appConstants';

export const CURRENT_RATE_QUERY_KEY = 'currentRate';

export default function CurrentRate() {
  const editModal = useDisclosure();
  const { query, updateQueryParam } = useQueryParams();
  const [currentCurrency, setCurrentCurrency] =
    useState<(typeof mockCurrencies)[number]>();

  const currentRateCurrencyCode = query.get(CURRENT_RATE_QUERY_KEY);

  useEffect(() => {
    if (!currentRateCurrencyCode)
      updateQueryParam({ [CURRENT_RATE_QUERY_KEY]: 'NGN' });
  }, [currentRateCurrencyCode, query, updateQueryParam]);

  useEffect(() => {
    const currentCurrencyFound = mockCurrencies.find(
      (currency) => currency.code === currentRateCurrencyCode
    );

    setCurrentCurrency(currentCurrencyFound);
  }, [currentRateCurrencyCode]);

  const currencyOptions = mockCurrencies.map((cur) => ({
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

  return (
    <div className='bg-white rounded-[12px] p-6 flex items-start justify-between'>
      <div className='flex flex-col'>
        <div className='flex items-center gap-5'>
          <p className='text-tertiary-grey'>{currentCurrency?.name}</p>
          <Dropdown
            label='Currency'
            paramKey={CURRENT_RATE_QUERY_KEY}
            options={currencyOptions}
            defaultValue='NGN'
            containerClassName='w-fit'
            dropdownButtonClassName='border-none'
          />
        </div>
        <div className='flex items-center gap-2'>
          <p className='font-semibold text-3xl'>N1,750</p>
          <RatePercentageIndicator amount='5' />
        </div>
        <p className='text-primary text-sm mt-4'>
          Current market Value: N1,200
        </p>
      </div>
      <Button
        className='py-[10px] px-14 rounded-[8px]'
        onClick={editModal.open}
      >
        Edit
      </Button>

      <EditRateModalContainer
        isOpen={editModal.isOpen}
        handleOpenModal={editModal.open}
        handleCloseModal={editModal.close}
      />
    </div>
  );
}
