'use client';

import { ControlledMenu, MenuItem, useClick } from '@szhsin/react-menu';
import Link from 'next/link';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { GoKebabHorizontal } from 'react-icons/go';
import { RxCaretRight } from 'react-icons/rx';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';

import { userArr } from '@/app/users/_utils/constants';

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
  setCurrentUser: Dispatch<
    SetStateAction<(typeof userArr)[number] | undefined>
  >;
  openBlacklist: () => void;
  isBlacklisted?: boolean;
  openPermit: () => void;
};

export default function UserTableItem({
  // setCurrentUser,
  openBlacklist,
  isBlacklisted,
  openPermit,
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
        <p className='font-medium text-primary-black min-w-28'>ID-001</p>
      </td>
      <td>
        <p className='font-inter font-medium text-primary-black min-w-[200px]'>
          Odell Beckham
        </p>
      </td>
      <td>
        <p className='min-w-[150px]'>adeyera08@gmail.com</p>
      </td>
      <td>
        <p className='font-medium text-primary-black min-w-[130px]'>
          Individual
        </p>
      </td>
      <td>
        <p>Apr 16, 2024, 10: 55AM</p>
      </td>
      <td>
        {!isBlacklisted && (
          <p className='w-fit rounded-[4px] px-2 py-[3px] bg-neutral-green/10 text-neutral-green font-medium'>
            Active
          </p>
        )}
        {isBlacklisted && (
          <p className='w-fit rounded-[4px] px-2 py-[3px] bg-black text-white font-medium'>
            Blacklisted
          </p>
        )}
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
            <Link
              href='/users/1234'
              className='flex items-center justify-between gap-4 w-full font-figtree text-primary-black px-0 py-0 font-medium'
            >
              View User <RxCaretRight className='text-primary text-lg' />
            </Link>
          </MenuItem>

          {!isBlacklisted && (
            <MenuItem>
              <Button
                variant='light'
                rightIcon={RxCaretRight}
                classNames={{ rightIcon: 'text-lg' }}
                onClick={openBlacklist}
                className='text-primary-red !text-sm font-figtree w-full flex items-center justify-between gap-4 !border-none border-transparent shadow-none !bg-transparent px-0 py-0 font-medium'
              >
                Blacklist user
              </Button>
            </MenuItem>
          )}

          {isBlacklisted && (
            <MenuItem>
              <Button
                variant='light'
                rightIcon={RxCaretRight}
                classNames={{ rightIcon: 'text-lg' }}
                onClick={openPermit}
                className='text-neutral-green !text-sm font-figtree w-full flex items-center justify-between gap-4 !border-none border-transparent shadow-none !bg-transparent px-0 py-0 font-medium'
              >
                Permit user
              </Button>
            </MenuItem>
          )}
        </ControlledMenu>
      </td>
    </tr>
  );
}
