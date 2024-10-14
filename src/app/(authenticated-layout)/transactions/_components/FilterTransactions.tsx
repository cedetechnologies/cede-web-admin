'use client';
import React, { useRef } from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import { PiCaretDownBold } from 'react-icons/pi';

import { cn } from '@/lib/utils';
import useOnClickOutside from '@/hooks/useOnClickOutside';

import useFilterTransactions from '@/app/(authenticated-layout)/transactions/_utils/useFilterTransactions';

type FilterProps = {
  containerClassName?: string;
  label: string;
  isFilteredByStatus?: boolean;
};

const FilterTransactions = ({
  containerClassName,
  label,
  isFilteredByStatus,
}: FilterProps) => {
  const {
    show,
    setShow,
    handleInputChange,
    currency,
    status,
    handleRefresh,
    close,
    handleOpenTab,
    isTabOpen,
    type,
  } = useFilterTransactions();

  const ref = useRef<HTMLDivElement | null>(null);

  // const handleRemoveDateFilter = () => {
  //   removeFilter('from_date');
  //   removeFilter('to_date');
  // };

  const currencies = [
    { label: 'USD', value: 'USD' },
    { label: 'EUR', value: 'EUR' },
    { label: 'CAD', value: 'CAD' },
  ];

  const transactionStatus = [
    { label: 'Successful', value: 'successful' },
    { label: 'Resolved', value: 'resolved' },
    { label: 'Pending', value: 'pending' },
    { label: 'Refunded', value: 'refunded' },
    { label: 'Rejected', value: 'rejected' },
    { label: 'Failed', value: 'failed' },
  ];

  const transactionType = [
    { label: 'One time', value: 'one-time' },
    { label: 'Scheduled', value: 'scheduled' },
    { label: 'Recurrent', value: 'recurrent' },
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
        {type || currency || status ? (
          <>
            <p className='text-[#EEEEEE]'>|</p>
            <div className='flex gap-1 cursor-pointer' onClick={handleRefresh}>
              <p className='text-sm font-medium text-[#575757] w-fit'>Reset</p>
            </div>
          </>
        ) : null}
      </section>
      {show && (
        <div className='absolute text-sm min-w-64 justify-between z-[5] text-[#575757] w-[200px] flex flex-col gap-6 bg-[#FFF] py-3 px-5 rounded-lg'>
          <div
            className='flex justify-between items-center'
            onClick={() => handleOpenTab('type')}
          >
            <p>Transaction type</p>
            <FaAngleRight />
          </div>
          <div
            className='flex justify-between items-center'
            onClick={() => handleOpenTab('currency')}
          >
            <p>Currency</p>
            <FaAngleRight />
          </div>
          {!isFilteredByStatus && (
            <div
              className='flex justify-between items-center'
              onClick={() => handleOpenTab('status')}
            >
              <p>Status</p>
              <FaAngleRight />
            </div>
          )}
        </div>
      )}

      {isTabOpen('currency') && (
        <div className='absolute left-[260px] flex flex-col gap-6 bg-[#FFF] py-5 px-5 rounded-lg w-[300px]'>
          {currencies.map((el) => (
            <div key={el.label} className='flex justify-between items-center'>
              <label htmlFor={el.label}>{el.label}</label>
              <input
                id={el.label}
                name='currency'
                value={el.value}
                onChange={(e) => {
                  handleInputChange('currency', e.target.value);
                  close();
                }}
                checked={currency === el.value}
                type='radio'
                className='w-5 h-5 cursor-pointer border-gray-300 text-[#EA157F] focus:ring-0 checked:bg-[#EA157F]'
              />
            </div>
          ))}
        </div>
      )}
      {isTabOpen('status') && (
        <div className='absolute left-[260px] flex flex-col gap-6 bg-[#FFF] py-5 px-5 rounded-lg w-[300px]'>
          {transactionStatus.map((el) => (
            <div key={el.label} className='flex justify-between items-center'>
              <label htmlFor={el.label}>{el.label}</label>
              <input
                id={el.label}
                name={el.label}
                value={el.value}
                onChange={(e) => {
                  handleInputChange('status', e.target.value);
                  close();
                }}
                checked={status === el.value}
                type='radio'
                className='w-5 h-5 cursor-pointer border-gray-300 text-[#EA157F] focus:ring-0 checked:bg-[#EA157F]'
              />
            </div>
          ))}
        </div>
      )}
      {isTabOpen('type') && (
        <div className='absolute left-[260px] flex flex-col gap-6 bg-[#FFF] py-5 px-5 rounded-lg w-[300px]'>
          {transactionType.map((el) => (
            <div key={el.label} className='flex justify-between items-center'>
              <label htmlFor={el.label}>{el.label}</label>
              <input
                id={el.label}
                name={el.label}
                value={el.value}
                onChange={(e) => {
                  handleInputChange('type', e.target.value);
                  close();
                }}
                checked={type === el.value}
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

export default FilterTransactions;
