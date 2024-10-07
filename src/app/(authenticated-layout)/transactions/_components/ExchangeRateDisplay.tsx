import Image from 'next/image';
import { TbRefresh } from 'react-icons/tb';

import Button from '@/components/buttons/Button';
import RatePercentageIndicator from '@/components/RatePercentageIndicator';

import getFlagUrl from '@/utils/cc_format';

export default function ExchangeRateDisplay() {
  return (
    <div className='border border-[#D6B6FF] rounded-[12px] py-8 px-7 bg-white flex items-start justify-between'>
      <div className='flex flex-col gap-7'>
        <div className='flex items-center gap-[10px]'>
          <p>Canadian Dollars</p>
          <div className='flex items-center gap-2'>
            <Image
              src={getFlagUrl('CA')}
              alt='CA'
              width={24}
              height={24}
              className='w-6 h-6 rounded-[100%] object-cover'
            />
            <p className='font-medium'>CAD</p>
          </div>
        </div>
        <div className='flex items-center gap-[10px]'>
          <div className='flex items-center gap-2'>
            <Image
              src={getFlagUrl('NG')}
              alt='CA'
              width={24}
              height={24}
              className='w-6 h-6 rounded-[100%] object-cover'
            />
            <p className='font-semibold text-[28px]'>N1,750</p>
          </div>
          <RatePercentageIndicator amount='5' />
          <p className='text-light-grey'>Nigerian Naira</p>
        </div>
      </div>
      <Button
        variant='ghost'
        rightIcon={TbRefresh}
        className='text-primary-pink font-normal'
        classNames={{ rightIcon: 'text-2xl ml-3' }}
      >
        Change Currencies
      </Button>
    </div>
  );
}
