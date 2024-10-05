import { GoArrowUpRight } from 'react-icons/go';

export default function RateLogEntry() {
  return (
    <div className='border-b border-[#0400190F py-[14px] flex items-center justify-between'>
      <div className='flex flex-col gap-[10px] text-xs'>
        <p className='font-medium'>
          Ekim David{' '}
          <span className='font-normal text-primary-black/40'>
            edited price
          </span>
        </p>
        <p className='text-tertiary-grey'>Apr 16, 2024, 10: 55AM</p>
      </div>
      <div className='bg-neutral-green/10 py-[2px] px-4 flex items-center gap-1 rounded-[3.6px] text-neutral-green font-medium text-xs'>
        <GoArrowUpRight className='text-base' />
        <p>$500</p>
      </div>
    </div>
  );
}
