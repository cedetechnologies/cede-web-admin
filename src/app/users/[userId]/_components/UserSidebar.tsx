'use client';

import Link from 'next/link';
import toast from 'react-hot-toast';
import { IoArrowBack } from 'react-icons/io5';
import { IoCopyOutline } from 'react-icons/io5';

import { cn } from '@/lib/utils';

export default function UserSidebar() {
  async function copyID() {
    await navigator.clipboard.writeText('cu3901KLWE563');
    toast.success('Customer ID copied!');
  }

  return (
    <aside
      className={cn(
        'no-scrollbar w-[5.5rem] py-8 transition-all duration-200 ease-linear border-r border-primary-grey mt-11 ml-10 xl:ml-20 md:w-40 lg:w-fit xl:w-60 2xl:w-64'
      )}
    >
      <Link
        href='/users'
        className='text-primary font-medium font-figtree flex items-center gap-2 text-sm'
      >
        <IoArrowBack />
        Back to all users
      </Link>

      <p className='mt-6 mb-5 font-semibold pb-2 border-b border-primary-grey'>
        User details
      </p>

      <div className='flex flex-col gap-6 mb-6'>
        <div className='flex flex-col gap-1'>
          <p className='text-xs text-[#636363]'>User since</p>
          <p className='text-sm font-medium text-[#2B2B2B]'>Apr 16, 2024</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-xs text-[#636363]'>Customer ID</p>
          <p
            className='text-sm font-medium text-[#2B2B2B] flex items-center gap-2 cursor-pointer'
            onClick={copyID}
          >
            cu3901KLWE563 <IoCopyOutline className='text-primary-pink' />
          </p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-xs text-[#636363]'>Account type</p>
          <p className='text-sm font-medium text-[#2B2B2B]'>Individual</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-xs text-[#636363]'>Email address</p>
          <p className='text-sm font-medium text-[#2B2B2B]'>
            johndoe@example.com
          </p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-xs text-[#636363]'>Mobile number</p>
          <p className='text-sm font-medium text-[#2B2B2B]'>+44 811 000 000</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-xs text-[#636363]'>Country</p>
          <p className='text-sm font-medium text-[#2B2B2B]'>Canada</p>
        </div>
      </div>

      <div className='w-full h-[1px] bg-primary-grey' />
    </aside>
  );
}
