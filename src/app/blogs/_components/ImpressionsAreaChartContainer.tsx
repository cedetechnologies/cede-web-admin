import Dropdown from '@/components/dropdown';
import RatePercentageIndicator from '@/components/RatePercentageIndicator';

import ImpressionsAreaChart from '@/app/blogs/_components/ImpressionsAreaChart';

export default function ImpressionsAreaChartContainer() {
  return (
    <div className='flex justify-between items-center bg-white py-5 px-7'>
      <div className='flex flex-col'>
        <div className='w-fit'>
          <Dropdown
            paramKey='impressionFilter'
            label='Filter by'
            options={[{ label: 'This Month', value: 'month' }]}
            defaultLabel='This Month'
            dropdownButtonClassName='!text-xs !py-[10px] !px-3'
          />
        </div>
        <div className='flex mt-3 mb-2 items-center gap-[10px] text-2xl'>
          <p className='font-semibold'>100,750</p>
          <p className='text-light-grey'>views</p>
          <RatePercentageIndicator amount='5' />
        </div>
        <p className='text-light-grey text-sm'>Updated 25 mins ago</p>
      </div>
      <div className='h-[150px] w-[200px]'>
        <ImpressionsAreaChart />
      </div>
    </div>
  );
}
