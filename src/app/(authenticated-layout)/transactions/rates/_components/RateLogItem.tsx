import Image from 'next/image';

import RateLogEntry from '@/app/(authenticated-layout)/transactions/rates/_components/RateLogEntry';

type Props = {
  flagUrl: string;
  currencyCode: string;
  currency: string;
};

export default function RateLogItem({
  flagUrl,
  currency,
  currencyCode,
}: Props) {
  return (
    <div className='border border-[#D1D1D1] p-[22px] rounded-[22px]'>
      <div className='flex items-center gap-2 text-xs text-tertiary-grey'>
        <Image
          key={flagUrl}
          src={flagUrl}
          alt={currencyCode}
          width={22}
          height={22}
          className='rounded-[100%] w-6 h-6 object-cover'
        />{' '}
        <p>{currency}</p>
        <p>({currencyCode})</p>
      </div>

      <div className='flex flex-col gap-7 mt-[22px]'>
        <RateLogEntry />
        <RateLogEntry />
        <RateLogEntry />
        <RateLogEntry />
        <RateLogEntry />
        <RateLogEntry />
        <RateLogEntry />
      </div>
    </div>
  );
}
