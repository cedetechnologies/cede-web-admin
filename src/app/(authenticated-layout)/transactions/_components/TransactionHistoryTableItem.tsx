import { GoKebabHorizontal } from 'react-icons/go';
import { IoIosArrowRoundUp } from 'react-icons/io';

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
  openDetails: () => void;
};

export default function TransactionHistoryTableItem({ openDetails }: Props) {
  return (
    <tr className='text-sm text-tertiary-grey'>
      <td>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-[100%] text-black bg-primary-grey flex items-center justify-center'>
            <IoIosArrowRoundUp />
          </div>
          <p className='font-figtree min-w-[300px]'>
            Transfer to{' '}
            <span className='font-medium font-inter text-primary-black'>
              Odell Beckham
            </span>{' '}
            1020394903
          </p>
        </div>
      </td>
      <td>
        <p className='min-w-[150px]'>Apr 16, 2024, 10: 55AM</p>
      </td>
      <td>
        <p className='font-medium text-primary-black min-w-[130px]'>
          - 5,000 USD
        </p>
      </td>
      <td>
        <p className='font-medium text-primary-black min-w-[130px]'>
          Individual
        </p>
      </td>
      <td>
        <p className='w-fit rounded-[4px] px-2 py-[3px] bg-secondary-yellow text-primary-yellow font-medium'>
          Pending
        </p>
      </td>
      <td>
        <p className='font-medium text-primary-black'>ONE TIME</p>
      </td>
      <td>
        <IconButton
          icon={GoKebabHorizontal}
          onClick={openDetails}
          variant='ghost'
        />
      </td>
    </tr>
  );
}
