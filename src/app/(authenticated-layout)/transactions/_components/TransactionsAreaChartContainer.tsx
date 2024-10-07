'use client';

import Dropdown from '@/components/dropdown';

import TransactionsAreaChart from '@/app/(authenticated-layout)/transactions/_components/TransactionsAreaChart';

export type TransactionsAreaChartContainerProps = {
  title: string;
  amount: string;
  chartLineColour: string;
  chartDotColour: string;
};

export default function TransactionsAreaChartContainer({
  title,
  amount,
  chartDotColour,
  chartLineColour,
}: TransactionsAreaChartContainerProps) {
  return (
    <div
      className='bg-white rounded-[12px] border-[0.5px] border-primary-grey w-full py-3 px-5'
      style={{ boxShadow: '0px 1px 2px 0px #A4ACB93D' }}
    >
      <div className='flex w-full items-center justify-between mb-8'>
        <p>{title}</p>
        <Dropdown
          paramKey='filter'
          label='Filter by'
          options={[]}
          containerClassName='w-fit'
          dropdownButtonClassName='w-fit !rounded-[5px] !px-2 !py-0 border-[#BDBDBD] text-tertiary-grey !text-[10px]'
        />
      </div>

      <div className='mt-5 h-[150px] w-3/4'>
        <TransactionsAreaChart
          chartDotColour={chartDotColour}
          chartLineColour={chartLineColour}
        />
      </div>

      <p className='font-semibold text-3xl my-4'>{amount}</p>
      <p className='text-sm text-light-grey'>Updated 25 mins ago</p>
    </div>
  );
}
