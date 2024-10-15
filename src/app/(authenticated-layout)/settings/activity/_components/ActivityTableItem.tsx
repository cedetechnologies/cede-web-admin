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

export default function ActivityTableItem() {
  return (
    <tr className='text-sm text-tertiary-grey'>
      <td>
        <p className='font-figtree min-w-[150px] font-medium text-primary-black'>
          Odell Beckham
        </p>
      </td>
      <td>
        <p className='min-w-[150px]'>Apr 16, 2024, 10: 55AM</p>
      </td>
      <td>
        <p className='font-medium min-w-[130px]'>Password reset accepted</p>
      </td>
      <td>
        <p className='font-medium min-w-[130px] text-primary-black'>
          Chrome (Linux)
        </p>
      </td>
      <td>
        <p className='font-medium imin-w-[130px]'>
          2001:0db8:85a3:0000:0000:8a2e:0370:7334
        </p>
      </td>
    </tr>
  );
}
