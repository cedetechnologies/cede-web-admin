'use client';

import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';

import { cn } from '@/lib/utils';

import useTab from '@/components/tab/useTab';

export { useTab };

const Tab = ({
  tabs,
  activeTab,
  handleChangeTab,
}: {
  tabs: TabArrayProps<string>;
  activeTab: string | null;
  handleChangeTab: (value: string) => void;
}) => {
  return (
    <div className='flex w-full gap-4 overflow-x-auto bg-[#F5F5F5] border-2 border-[#F5F5F5] rounded-full justify-between'>
      {tabs.map((item, idx) => (
        <button
          type='button'
          key={idx}
          className={cn(
            'whitespace-nowrap w-full justify-center p-5 rounded-full flex items-center gap-3  text-[14px] text-[#575757] font-semibold',
            'outline-none',
            {
              'bg-[#FFFFFF]': activeTab === item.value,
            }
          )}
          onClick={() => handleChangeTab(item.value)}
        >
          <RiRadioButtonFill
            size={25}
            className={cn(
              'text-transparent rounded-full border border-[#D1D1D1]',
              { 'text-[#EA157F]': activeTab === item.value }
            )}
          />
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Tab;
