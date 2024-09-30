import Image from 'next/image';
import { FaArrowUpLong } from 'react-icons/fa6';

import getFlagUrl from '@/utils/cc_format';

type Props = {
  currency: string;
  flagCode: string;
  transactions: string;
  change: string;
};

export default function CurrencyTransactionCard({
  currency,
  flagCode,
  transactions,
  change,
}: Props) {
  return (
    <div
      className='bg-white rounded-[12px] py-[18px] px-5 flex items-center gap-4'
      style={{ boxShadow: '0px 1.07px 2.14px 0px #A4ACB93D' }}
    >
      <div>
        <div className='w-12 h-12 rounded-[8px] bg-secondary-grey flex items-center justify-center'>
          <Image
            src={getFlagUrl(flagCode)}
            alt={flagCode}
            width={32}
            height={32}
            className='rounded-[100%] w-8 h-8 object-cover'
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <p className='text-sm text-light-grey'>{currency}</p>
        <p className='flex items-center gap-[6px]'>
          <span className='font-semibold text-xl'>{transactions}</span>
          <span className='bg-[#34C75933] gap-[2px] rounded-[6px] flex items-center w-9 h-4 px-2 py-[2px] text-[8px] text-[#34C759]'>
            <FaArrowUpLong className='' /> {change}%
          </span>
        </p>
        <p className='text-sm text-light-grey'>transactions</p>
      </div>
    </div>
  );
}
