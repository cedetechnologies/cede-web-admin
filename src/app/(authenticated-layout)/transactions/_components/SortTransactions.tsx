'use client';
import React, { useRef } from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import { PiCaretDownBold } from 'react-icons/pi';

import { cn } from '@/lib/utils';
import useOnClickOutside from '@/hooks/useOnClickOutside';

import { Input } from '@/components/input';

import useSortTransactions from '@/app/(authenticated-layout)/transactions/_utils/useSortTransactions';

type FilterProps = {
  containerClassName?: string;
  label: string;
};

const SortTransactions = ({ containerClassName, label }: FilterProps) => {
  const {
    show,
    setShow,
    handleInputChange,
    fromDate,
    toDate,
    name,
    amount,
    close,
    handleOpenTab,
    isTabOpen,
  } = useSortTransactions();

  const ref = useRef<HTMLDivElement | null>(null);

  // const handleRemoveDateFilter = () => {
  //   removeFilter('from_date');
  //   removeFilter('to_date');
  // };

  const nameSort = [
    { label: 'A — Z', value: 'asc' },
    { label: 'Z — A', value: 'desc' },
  ];

  const amountSort = [
    { label: 'Lowest to Highest', value: 'lowest' },
    { label: 'Highest to Lowest', value: 'highest' },
  ];

  useOnClickOutside(ref, close);

  return (
    <div className='w-fit relative cursor-pointer' ref={ref}>
      <section className='flex gap-2 items-center md:flex-wrap'>
        <div
          onClick={() => setShow(!show)}
          className={cn(
            'flex gap-3 justify-center items-center bg-[#FFF] py-2 px-4 rounded-lg',
            [containerClassName && containerClassName]
          )}
        >
          <p className='text-[#575757]'>{label}</p>
          <span
            className={cn(
              'ml-auto text-[#757679] transition-all duration-300',
              [show && '-rotate-180']
            )}
          >
            <PiCaretDownBold />
          </span>
        </div>
        {/* {toDate || fromDate || currency || status ? (
          <p className='text-[#EEEEEE]'>|</p>
        ) : null}
        <div className='flex gap-4 items-center'>
          {fromDate && toDate && (
            <div className='flex gap-2 items-center px-4 bg-[#F0E5FF80] py-2 text-sm rounded-lg'>
              <p>Date</p>{' '}
              <IoCloseSharp
                size={20}
                className='cursor-pointer'
                onClick={handleRemoveDateFilter}
              />
            </div>
          )}
          {currency && (
            <div className='flex gap-2 items-center px-4 bg-[#F0E5FF80] py-2 text-sm rounded-lg'>
              <p>Currency</p>{' '}
              <IoCloseSharp
                size={20}
                className='cursor-pointer'
                onClick={() => removeFilter('currency')}
              />
            </div>
          )}
          {status && (
            <div className='flex gap-2 items-center px-4 bg-[#F0E5FF80] py-2 text-sm rounded-lg'>
              <p>Status</p>{' '}
              <IoCloseSharp
                size={20}
                className='cursor-pointer'
                onClick={() => removeFilter('status')}
              />
            </div>
          )}
        </div> */}
      </section>
      {show && (
        <div className='absolute text-sm min-w-64 justify-between z-[5] -left-[50px] text-[#575757] w-[200px] flex flex-col gap-6 bg-[#FFF] py-3 px-5 rounded-lg'>
          <div
            className='flex justify-between items-center'
            onClick={() => handleOpenTab('name')}
          >
            <p>Name</p>
            <FaAngleRight />
          </div>
          <div
            className='flex justify-between items-center'
            onClick={() => handleOpenTab('date')}
          >
            <p>Date</p>
            <FaAngleRight />
          </div>
          <div
            className='flex justify-between items-center'
            onClick={() => handleOpenTab('amount')}
          >
            <p>Amount</p>
            <FaAngleRight />
          </div>
        </div>
      )}

      {isTabOpen('date') && (
        <div className='absolute right-[200px] flex flex-col gap-4 bg-[#FFF] py-3 px-5 rounded-lg w-[300px]'>
          <Input
            id='from'
            name='from_date'
            type='date'
            label='From'
            onChange={(e) => handleInputChange('from_date', e.target.value)}
            value={fromDate}
          />
          <Input
            id='to'
            name='to_date'
            type='date'
            label='To'
            onChange={(e) => handleInputChange('to_date', e.target.value)}
            value={toDate}
          />
        </div>
      )}

      {isTabOpen('name') && (
        <div className='absolute right-[200px] flex flex-col gap-6 bg-[#FFF] py-5 px-5 rounded-lg w-[300px]'>
          {nameSort.map((el) => (
            <div key={el.label} className='flex justify-between items-center'>
              <label htmlFor={el.label}>{el.label}</label>
              <input
                id={el.label}
                name='currency'
                value={el.value}
                onChange={(e) => {
                  handleInputChange('name', e.target.value);
                  close();
                }}
                checked={name === el.value}
                type='radio'
                className='w-5 h-5 cursor-pointer border-gray-300 text-[#EA157F] focus:ring-0 checked:bg-[#EA157F]'
              />
            </div>
          ))}
        </div>
      )}
      {isTabOpen('amount') && (
        <div className='absolute right-[200px] flex flex-col gap-6 bg-[#FFF] py-5 px-5 rounded-lg w-[300px]'>
          {amountSort.map((el) => (
            <div key={el.label} className='flex justify-between items-center'>
              <label htmlFor={el.label}>{el.label}</label>
              <input
                id={el.label}
                name={el.label}
                value={el.value}
                onChange={(e) => {
                  handleInputChange('amount', e.target.value);
                  close();
                }}
                checked={amount === el.value}
                type='radio'
                className='w-5 h-5 cursor-pointer border-gray-300 text-[#EA157F] focus:ring-0 checked:bg-[#EA157F]'
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortTransactions;
