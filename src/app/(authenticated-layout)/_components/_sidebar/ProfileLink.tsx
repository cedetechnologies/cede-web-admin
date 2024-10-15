import Link from 'next/link';
import { RxCaretRight } from 'react-icons/rx';

export default function ProfileLink() {
  return (
    <Link href='/settings'>
      <div className='flex w-full items-center justify-between gap-4'>
        <div className='flex flex-col gap-1'>
          <p className='font-medium text-sm'>Kayla Store</p>
          <p className='font-medium text-xs text-tertiary-grey'>
            adeyara08@gmail.com
          </p>
        </div>
        <RxCaretRight className='text-2xl text-primary' />
      </div>
    </Link>
  );
}
