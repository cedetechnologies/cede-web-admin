import Image from 'next/image';

import RatePercentageIndicator from '@/components/RatePercentageIndicator';

import getFlagUrl from '@/utils/cc_format';

type Props = {
  baseCurrencyCode: string;
  quoteCurrencyCode: string;
  baseCurrency: string;
  quoteCurrency: string;
  currentPrice: string;
  previousPrice: string;
  percentageChange: string;
  isPercentageChangeNegative?: boolean;
};

export default function RateMarqueeItem({
  baseCurrency,
  baseCurrencyCode,
  quoteCurrencyCode,
  quoteCurrency,
  currentPrice,
  previousPrice,
  percentageChange,
  isPercentageChangeNegative,
}: Props) {
  return (
    <div className='flex items-center gap-[5px]'>
      <div className='w-[42px] h-6 relative flex'>
        <Image
          src={getFlagUrl(baseCurrencyCode)}
          alt={baseCurrencyCode}
          width={24}
          height={24}
          className='w-6 h-6 rounded-[100%] object-cover'
        />
        <Image
          src={getFlagUrl(quoteCurrencyCode)}
          alt={quoteCurrencyCode}
          width={24}
          height={24}
          className='w-6 h-6 absolute left-[40%] z-[2]  rounded-[100%] object-cover'
        />
      </div>
      <p className='font-medium text-[#2E2E2E]'>
        {baseCurrency}/{quoteCurrency}
      </p>
      <p className='text-light-grey'>{currentPrice}</p>
      <div>
        <RatePercentageIndicator
          amount={percentageChange}
          isNegative={isPercentageChangeNegative}
        />
      </div>
      <p className='text-light-grey'>{previousPrice}</p>
    </div>
  );
}
