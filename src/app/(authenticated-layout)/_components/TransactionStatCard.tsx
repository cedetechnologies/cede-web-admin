import Link from 'next/link';

type Props = {
  title: string;
  amount: string;
  currency?: string;
  lastUpdated: string;
  currencySymbol?: string;
};

export default function TransactionStatCard({
  title,
  amount,
  currency,
  lastUpdated,
  currencySymbol,
}: Props) {
  return (
    <div className='bg-white p-5 flex flex-col gap-7 w-full rounded-[12px] border-[0.5px] border-primary-grey'>
      <div className='flex items-center justify-between'>
        <p className='text-sm'>{title}</p>
        <Link
          href='/transactions'
          className='text-xs text-primary font-figtree font-medium'
        >
          VIEW ALL
        </Link>
      </div>
      <p className='font-semibold text-3xl flex items-end gap-1'>
        <span>
          {currencySymbol}
          {amount}
        </span>
        {currency && (
          <span className='text-[13px] text-light-grey leading-4 mb-1'>
            {currency}
          </span>
        )}
      </p>
      <p className='text-light-grey text-sm'>Updated {lastUpdated}</p>
    </div>
  );
}
