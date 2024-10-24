'use client';

import Dropdown from '@/components/dropdown';

import CashflowChart from '@/app/(authenticated-layout)/_components/_cash-flow-chart/CashflowChart';

export default function CashflowChartContainer() {
  return (
    <div className='bg-white rounded-[10px] p-5'>
      <div className='flex w-full items-center justify-between mb-8'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-[10px]'>
            <p className='font-semibold text-xl'>Cash Flow</p>
            <p className='text-xs text-light-grey'>USD</p>
          </div>
          <p className='text-xs text-light-grey'>
            View of your all cash transferred in and out
          </p>
        </div>
        <Dropdown
          paramKey='filter'
          label='Filter by'
          options={[]}
          containerClassName='w-fit'
          dropdownButtonClassName='w-fit rounded-[7.65px] py-[10.49px] px-3 border-[#BDBDBD] text-tertiary-grey text-[13px]'
        />
      </div>
      <div className='flex flex-col lg:flex-row items-center gap-6'>
        <div className='w-full lg:w-[90%] h-[400px]'>
          <CashflowChart />
        </div>
        <div className='flex flex-row lg:flex-col justify-center gap-9'>
          <div className='flex flex-col gap-[9px]'>
            <div className='w-9 h-5 rounded-[5px] bg-primary' />
            <p className='text-sm text-tertiary-grey'>Inflow</p>
          </div>
          <div className='flex flex-col gap-[9px]'>
            <div className='w-9 h-5 rounded-[5px] bg-primary-pink' />
            <p className='text-sm text-tertiary-grey'>Outflow</p>
          </div>
        </div>
      </div>
    </div>
  );
}
