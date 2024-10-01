type Props = {
  title: string;
  amount: string;
  currency?: string;
};

export default function UserStatCard({ title, amount, currency }: Props) {
  return (
    <div className='rounded-[8px] w-full bg-white py-2 px-5 flex flex-col gap-2'>
      <p className='text-sm'>{title}</p>
      <p className='font-semibold text-2xl text-primary'>
        {currency}
        {amount}
      </p>
    </div>
  );
}
