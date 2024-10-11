'use client';

import { ControlledMenu, MenuItem, useClick } from '@szhsin/react-menu';
import { useRef, useState } from 'react';
import { GoKebabHorizontal } from 'react-icons/go';
import { RxCaretRight } from 'react-icons/rx';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';

{
  /* <div
  className={cn(
    'flex w-fit items-center gap-2 rounded-[16px] px-3 py-[6px] text-sm font-medium',
    [
      status === 'paid' && 'text-success-green',
      status === 'pending' && 'text-secondary-red',
      status === 'confirm-payment' && 'text-brown',
      status === 'paid' && 'bg-secondary-green',
      status === 'pending' && 'bg-fade-red',
      status === 'confirm-payment' && 'bg-fade-yellow',
    ]
  )}
>
  <div
    className={cn('h-[6px] w-[6px] rounded-[100%]', [
      status === 'paid' && 'bg-success-green',
      status === 'pending' && 'bg-secondary-red',
      status === 'confirm-payment' && 'bg-primary-yellow',
    ])}
  />
  {statusText}
</div>; */
}

type Props = {
  openEditRole: () => void;
  openRemoveMember: () => void;
};

export default function TeamTableItem({
  openEditRole,
  openRemoveMember,
}: Props) {
  const ref = useRef(null);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const anchorProps = useClick(isOptionsOpen, handleSetIsOptionsOpen);

  function handleSetIsOptionsOpen(arg: boolean) {
    setIsOptionsOpen(arg);
  }

  return (
    <tr className='text-sm text-tertiary-grey'>
      <td>
        <p className='font-inter font-medium text-primary-black min-w-[200px]'>
          Odell Beckham
        </p>
      </td>
      <td>
        <p className='min-w-[150px]'>adeyera08@gmail.com</p>
      </td>
      <td>
        <p className='font-inter font-medium text-primary-black min-w-[100px]'>
          Admin
        </p>
      </td>
      <td>
        <p>Apr 16, 2024, 10: 55AM</p>
      </td>
      <td className='min-w-[100px]'>
        <p className='w-fit  rounded-[4px] px-2 py-[3px] bg-secondary-yellow text-primary-yellow font-medium'>
          Inactive
        </p>
      </td>
      <td>
        <p>Apr 16, 2024, 10: 55AM</p>
      </td>
      <td className='relative'>
        <IconButton
          icon={GoKebabHorizontal}
          variant='ghost'
          onMouseDown={anchorProps.onMouseDown}
          onClick={(e) => {
            anchorProps.onClick(e);
          }}
          ref={ref}
        />

        <ControlledMenu
          state={isOptionsOpen ? 'open' : 'closed'}
          anchorRef={ref}
          position='anchor'
          direction='left'
          onClose={() => setIsOptionsOpen(false)}
          align='start'
          className='flex rounded-[8px] p-2 text-sm'
        >
          <MenuItem>
            <Button
              onClick={openEditRole}
              variant='ghost'
              className='flex items-center !text-sm justify-between gap-4 font-figtree text-primary-black px-0 py-0 font-medium'
            >
              Edit Role <RxCaretRight className='text-primary text-lg' />
            </Button>
          </MenuItem>

          <MenuItem>
            <Button
              variant='light'
              rightIcon={RxCaretRight}
              classNames={{ rightIcon: 'text-lg' }}
              onClick={openRemoveMember}
              className='text-primary-red !text-sm font-figtree w-full flex items-center justify-between gap-4 !border-none border-transparent shadow-none !bg-transparent px-0 py-0 font-medium'
            >
              Remove member
            </Button>
          </MenuItem>
        </ControlledMenu>
      </td>
    </tr>
  );
}
