'use client';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';
import { LuListPlus } from 'react-icons/lu';

import useFilter from '@/components/filter/utils/useFilter';
import { Input } from '@/components/input';

const Filter = () => {
  const {
    show,
    setShow,
    showDate,
    showCurrency,
    showStatus,
    setShowDate,
    setShowCurrency,
    setShowStatus,
    handleInputChange,
    fromDate,
    toDate,
    currency,
    status,
    handleRefresh,
    removeFilter,
  } = useFilter();

  const handleRemoveDateFilter = () => {
    removeFilter('from_date');
    removeFilter('to_date');
  };

  return (
    <div className='w-full relative cursor-pointer'>
      <section className='flex gap-2 items-center md:flex-wrap'>
        <div
          onClick={() => setShow(!show)}
          className='flex gap-3 justify-center items-center bg-[#FFF] py-2 px-4 rounded-lg'
        >
          <LuListPlus />
          <p className='text-[#575757]'>Add filter</p>
        </div>
        {toDate || fromDate || currency || status ? (
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
        </div>
        {toDate || fromDate || currency || status ? (
          <>
            <p className='text-[#EEEEEE]'>|</p>
            <div className='flex gap-1 cursor-pointer' onClick={handleRefresh}>
              <p className='text-sm font-medium text-[#575757] w-fit'>Reset</p>
              <p className='text-sm font-medium text-[#575757] w-fit'>
                filters
              </p>
            </div>
          </>
        ) : null}
      </section>
      {show && (
        <div className='absolute text-[#575757] w-[200px] flex flex-col gap-4 bg-[#FFF] py-3 px-5 rounded-lg'>
          <div
            className='flex justify-between items-center'
            onClick={() => {
              setShowDate(true);
              setShowCurrency(false);
              setShowStatus(false);
            }}
          >
            <p>Date</p>
            <FaAngleRight />
          </div>
          <div
            className='flex justify-between items-center'
            onClick={() => {
              setShowCurrency(true);
              setShowDate(false);
              setShowStatus(false);
            }}
          >
            <p>Currency</p>
            <FaAngleRight />
          </div>
          <div
            className='flex justify-between items-center'
            onClick={() => {
              setShowStatus(true);
              setShowDate(false);
              setShowCurrency(false);
            }}
          >
            <p>Status</p>
            <FaAngleRight />
          </div>
        </div>
      )}

      {showDate && (
        <div className='absolute left-[220px] flex flex-col gap-4 bg-[#FFF] py-3 px-5 rounded-lg w-[300px]'>
          <Input
            id='from'
            name='from_date'
            type='date'
            label='From'
            onChange={(e) => handleInputChange('from_date', e.target.value)}
          />
          <Input
            id='to'
            name='to_date'
            type='date'
            label='To'
            onChange={(e) => handleInputChange('to_date', e.target.value)}
          />
        </div>
      )}

      {showCurrency && (
        <div className='absolute left-[220px] flex flex-col gap-6 bg-[#FFF] py-5 px-5 rounded-lg w-[300px]'>
          <div
            className='flex justify-between items-center'
            onClick={() => {
              setShowCurrency(false);
              setShow(false);
              setShowDate(false);
              setShowStatus(false);
            }}
          >
            <label htmlFor=''>United State Dollar (USD)</label>
            <input
              id='USD'
              name='currency'
              value='USD'
              onChange={(e) => handleInputChange('currency', e.target.value)}
              type='radio'
              className='w-5 h-5 cursor-pointer border-gray-300 text-[#EA157F] focus:ring-0 checked:bg-[#EA157F]'
            />
          </div>
          <div
            onClick={() => {
              setShowCurrency(false);
              setShow(false);
              setShowDate(false);
              setShowStatus(false);
            }}
            className='flex  justify-between items-center'
          >
            <label htmlFor=''>Canadian Dollar (CAD)</label>
            <input
              id='CAD'
              name='currency'
              value='CAD'
              onChange={(e) => handleInputChange('currency', e.target.value)}
              type='radio'
              className='w-5 h-5 cursor-pointer border-gray-300 text-[#EA157F] focus:ring-0 checked:bg-[#EA157F]'
            />
          </div>
        </div>
      )}
      {showStatus && (
        <div className='absolute left-[220px] flex flex-col gap-6 bg-[#FFF] py-5 px-5 rounded-lg w-[300px]'>
          <div
            className='flex justify-between items-center'
            onClick={() => {
              setShowCurrency(false);
              setShow(false);
              setShowDate(false);
              setShowStatus(false);
            }}
          >
            <label htmlFor=''>Successful</label>
            <input
              id='successful'
              name='status'
              value='successful'
              onChange={(e) => handleInputChange('status', e.target.value)}
              type='radio'
              className='w-5 h-5 cursor-pointer border-gray-300 text-[#EA157F] focus:ring-0 checked:bg-[#EA157F]'
            />
          </div>
          <div
            className='flex justify-between items-center'
            onClick={() => {
              setShowCurrency(false);
              setShow(false);
              setShowDate(false);
              setShowStatus(false);
            }}
          >
            <label htmlFor=''>Pending</label>
            <input
              id='pending'
              name='status'
              value='pending'
              onChange={(e) => handleInputChange('status', e.target.value)}
              type='radio'
              className='w-5 h-5 cursor-pointer border-gray-300 text-[#EA157F] focus:ring-0 checked:bg-[#EA157F]'
            />
          </div>
          <div
            className='flex justify-between items-center'
            onClick={() => {
              setShowCurrency(false);
              setShow(false);
              setShowDate(false);
              setShowStatus(false);
            }}
          >
            <label htmlFor=''>Failed</label>
            <input
              id='failed'
              name='status'
              value='failed'
              onChange={(e) => handleInputChange('status', e.target.value)}
              type='radio'
              className='w-5 h-5 cursor-pointer border-gray-300 text-[#EA157F] focus:ring-0 checked:bg-[#EA157F]'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
