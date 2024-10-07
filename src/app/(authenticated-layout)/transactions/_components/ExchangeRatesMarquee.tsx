'use client';

import dynamic from 'next/dynamic';

import RateMarqueeItem from '@/app/(authenticated-layout)/transactions/_components/RateMarqueeItem';

const Marquee = dynamic(() => import('react-fast-marquee'), { ssr: true });

const exchangeRates = [
  {
    baseCurrencyCode: 'CA',
    quoteCurrencyCode: 'NG',
    baseCurrency: 'CAD',
    quoteCurrency: 'NGN',
    percentageChange: '3.1',
    isPercentageChangeNegative: true,
    previousPrice: 'N1,600',
    currentPrice: 'N1,300',
  },
  {
    baseCurrencyCode: 'CA',
    quoteCurrencyCode: 'ML',
    baseCurrency: 'CAD',
    quoteCurrency: 'XOF',
    percentageChange: '5',
    isPercentageChangeNegative: false,
    previousPrice: 'F1,200',
    currentPrice: 'F1,080',
  },
  {
    baseCurrencyCode: 'US',
    quoteCurrencyCode: 'NG',
    baseCurrency: 'USD',
    quoteCurrency: 'NGN',
    percentageChange: '5',
    isPercentageChangeNegative: true,
    previousPrice: 'N1,000',
    currentPrice: 'F1,520',
  },
];

export default function ExchangeRateMarquee() {
  return (
    <div className='w-[95%] bg-white border-b border-x border-[#D1D1D1] pl-7 py-3'>
      <Marquee autoFill style={{}}>
        {exchangeRates.map((rate, index) => (
          <div key={index} className='flex items-center gap-[10px] pl-5'>
            <RateMarqueeItem
              key={`${rate.baseCurrencyCode}/${rate.quoteCurrencyCode}`}
              {...rate}
            />{' '}
            <div className='w-[1px] h-[25px] bg-light-grey' />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
