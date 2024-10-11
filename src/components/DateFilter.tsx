'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { LuCalendarDays } from 'react-icons/lu';

import useDisclosure from '@/hooks/useDisclosure';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useQueryString } from '@/hooks/useQueryString';

import Button from '@/components/buttons/Button';
import { dropdownAnimationVariants } from '@/components/dropdown';

const filterOptions = [
  { label: 'All', value: '' },
  { label: 'Last 7 days', value: '7 days' },
  { label: 'Last 1 month', value: '1 month' },
  { label: 'Last 6 months', value: '6 months' },
  { label: 'Last 1 year', value: '1 year' },
];

export default function DateFilter() {
  const { isOpen, close, toggle } = useDisclosure();

  const searchParams = useSearchParams();
  const [activeFilterLabel, setActiveFilterLabel] = useState(() => {
    const filter = searchParams.get('filter') ?? '';

    return filterOptions.find((option) => option.value === filter)?.label;
  });

  const { router, createQueryString, getQueryString, deleteQueryString } =
    useQueryString();

  const ref = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(ref, close);

  function handleClick(value: string) {
    const queryValue = getQueryString('filter');
    let params;

    if (queryValue) {
      params = deleteQueryString('filter');
      router.replace(`?${params.toString()}`, { scroll: false });
    }

    params = createQueryString('filter', value);
    router.replace(`?${params.toString()}`, { scroll: false });
  }

  function isActiveQuery(value: string, label: string) {
    if (!getQueryString('filter') && label === 'All') return true;

    return getQueryString('filter') === value;
  }

  useEffect(() => {
    const filter = searchParams.get('filter') ?? '';

    const label = filterOptions.find(
      (option) => option.value === filter
    )?.label;

    setActiveFilterLabel(label);
  }, [searchParams]);

  function handleDeleteFilter() {
    const params = deleteQueryString('filter');

    router.replace(`?${params.toString()}`, { scroll: false });
  }

  return (
    <div className='relative flex items-center gap-3' ref={ref}>
      <Button
        leftIcon={LuCalendarDays}
        onClick={toggle}
        variant='ghost'
        className='!text-sm bg-white px-3 py-2 font-medium text-tertiary-grey'
      >
        Filter by date
      </Button>

      <div className='w-[1px] h-5 bg-primary-grey' />

      <div>
        {activeFilterLabel === 'All' && (
          <p className='text-sm text-[#BDBDBD]'>No filter applied</p>
        )}
        {activeFilterLabel !== 'All' && (
          <p
            onClick={handleDeleteFilter}
            className='text-tertiary-grey cursor-pointer text-sm flex items-center gap-[10px] py-2 px-5 rounded-[8px] bg-secondary/50'
          >
            {activeFilterLabel} <X className='text-black text-xs' />
          </p>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownAnimationVariants}
            initial='initial'
            exit='exit'
            animate='animate'
            key='profile-dropdown'
            className='absolute left-0 top-full z-10 mt-7 flex w-[200px] border-[0.5px] border-primary-grey flex-col gap-8 rounded-[8px] bg-white px-6 py-5 shadow'
          >
            {filterOptions.map((option) => (
              <div
                key={option.label}
                onClick={() => handleClick(option.value)}
                className='flex items-center justify-between cursor-pointer hover:font-bold'
              >
                <p className='text-sm font-medium text-tertiary-grey'>
                  {option.label}
                </p>

                {!isActiveQuery(option.value, option.label) && (
                  <div>
                    <div className='w-4 h-4 rounded-[100%] border border-[#D1D1D1]' />
                  </div>
                )}

                {isActiveQuery(option.value, option.label) && (
                  <div>
                    <div className='w-[26px] h-[26px] rounded-[100%] bg-secondary-pink flex items-center justify-center'>
                      <div className='w-4 h-4 rounded-[100%] flex items-center justify-center bg-primary-pink'>
                        <div className='w-[6px] h-[6px] rounded-[100%] bg-white' />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
