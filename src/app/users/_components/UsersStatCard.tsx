import { cn } from '@/lib/utils';

type Props = {
  title: string;
  amount: string;
  lastUpdated: string;
  titleClassName?: string;
  containerClassName?: string;
};

export default function UsersStatCard({
  title,
  amount,
  lastUpdated,
  titleClassName,
  containerClassName,
}: Props) {
  return (
    <div
      className={cn(
        'bg-white p-5 flex flex-col gap-7 w-full rounded-[12px] border-[0.5px] border-primary-grey',
        [containerClassName]
      )}
    >
      <div className='flex items-center justify-between'>
        <p className={cn('text-sm', [titleClassName])}>{title}</p>
      </div>
      <p className='font-semibold text-3xl flex items-end gap-1'>{amount}</p>
      <p className='text-light-grey text-sm'>Updated {lastUpdated}</p>
    </div>
  );
}
