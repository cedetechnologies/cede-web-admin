'use client';

import Link from 'next/link';
import { GoKebabHorizontal } from 'react-icons/go';

import IconButton from '@/components/buttons/IconButton';

import TableCheckbox from '@/app/users/_components/TableCheckbox';
import { verificationArr } from '@/app/users/_utils/constants';

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
  isSelected?: boolean;
  onSelectChange: () => void;
  verification: (typeof verificationArr)[number];
};

export default function VerificationTableItem({
  isSelected,
  onSelectChange,
  verification,
}: Props) {
  return (
    <tr className='text-sm text-tertiary-grey'>
      <td className='min-w-16'>
        <TableCheckbox isChecked={isSelected} onClick={onSelectChange} />
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
          {verification.type}
        </p>
      </td>
      <td>
        <p>Apr 16, 2024, 10: 55AM</p>
      </td>
      <td>
        <p className='w-fit rounded-[4px] px-2 py-[3px] bg-secondary-yellow text-primary-yellow font-medium'>
          Pending
        </p>
      </td>
      <td className='relative'>
        <Link href={`/verification/12345/${verification.type.toLowerCase()}`}>
          <IconButton icon={GoKebabHorizontal} variant='ghost' />
        </Link>
      </td>
    </tr>
  );
}
