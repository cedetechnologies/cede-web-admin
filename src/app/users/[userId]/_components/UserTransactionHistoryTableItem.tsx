import { GoKebabHorizontal } from 'react-icons/go';

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

export default function UserTransactionHistoryTableItem() {
  return (
    <tr className='text-sm text-tertiary-grey'>
      <td>
        <p className='font-figtree min-w-[200px]'>
          <span className='font-medium font-inter text-primary-black'>
            Odell Beckham
          </span>
        </p>
      </td>
      <td>
        <p className='min-w-[150px] mr-4'>Apr 16, 2024, 10: 55AM</p>
      </td>
      <td>
        <p className='font-medium text-primary-black min-w-[130px]'>
          - 5,000 USD
        </p>
      </td>
      <td>
        <p className='w-fit mr-4 rounded-[4px] px-2 py-[3px] bg-secondary-yellow text-primary-yellow font-medium'>
          Pending
        </p>
      </td>
      <td>
        <p className='font-medium text-primary-black'>ONE TIME</p>
      </td>
      <td>
        <IconButton icon={GoKebabHorizontal} variant='ghost' />
      </td>
    </tr>
  );
}
