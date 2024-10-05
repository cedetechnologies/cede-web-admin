'use client';

import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

import { PaddedContainer } from '@/components/lib';

import CurrentRate from '@/app/(authenticated-layout)/transactions/rates/_components/CurrentRate';
import RateLogItem from '@/app/(authenticated-layout)/transactions/rates/_components/RateLogItem';
import getFlagUrl from '@/utils/cc_format';

export default function Page() {
  return (
    <PaddedContainer isScrollable>
      <Link
        href='/transactions'
        className='flex items-center gap-2 text-primary font-semibold text-sm mb-7'
      >
        <IoArrowBack />
        Back
      </Link>

      <p className='font-semibold text-2xl mt-7 mb-5'>All exchange rates</p>

      <CurrentRate />

      <p className='mt-10 mb-5 font-semibold text-2xl'>Rate Log</p>

      <div className='bg-white py-10 px-7 rounded-[8px] grid grid-cols-2 gap-[14px]'>
        <RateLogItem
          flagUrl={getFlagUrl('US')}
          currency='United States Dollars'
          currencyCode='USD'
        />
        <RateLogItem
          flagUrl={getFlagUrl('CA')}
          currency='Canadian Dollars'
          currencyCode='CAD'
        />
      </div>
    </PaddedContainer>
  );
}
