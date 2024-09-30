import Image from 'next/image';

import emptyCards from '~/images/empty-state-cards.png';

export default function TransactionsEmptyState() {
  return (
    <div className='flex flex-col gap-10 items-center my-10'>
      <Image src={emptyCards} alt='cards' width={154} height={160} />

      <div className='flex flex-col text-center gap-[10px]'>
        <p className='font-semibold'>No transactions</p>
        <p className='text-tertiary-grey text-sm'>
          Send money to see your history
        </p>
      </div>
    </div>
  );
}
