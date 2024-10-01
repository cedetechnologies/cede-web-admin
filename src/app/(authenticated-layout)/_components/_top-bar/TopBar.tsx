'use client';

import { FiHeadphones } from 'react-icons/fi';
import { GoBell } from 'react-icons/go';

import { useGetActivePath } from '@/hooks/useCheckLinkActive';

import IconButton from '@/components/buttons/IconButton';

const TopBar = () => {
  const { path } = useGetActivePath(1);

  const headerMap: Record<string, string> = {
    '': 'Overview',
    users: 'Manage users',
  };

  return (
    <>
      <div className='border-primary-grey relative flex items-center justify-between border-b-[0.5px] bg-white px-10 py-6'>
        <p className='font-semibold text-2xl'>{headerMap[path]}</p>
        <div className='relative flex items-center gap-4'>
          <IconButton
            variant='ghost'
            icon={GoBell}
            className='text-2xl w-[46px] h-[46px] rounded-[100%] border border-primary-grey flex justify-center items-center'
          />

          <IconButton
            variant='ghost'
            icon={FiHeadphones}
            className='text-2xl w-[46px] h-[46px] rounded-[100%] border border-primary-grey flex justify-center items-center'
          />
        </div>
      </div>
    </>
  );
};

export default TopBar;
