import Image from 'next/image';
import { PropsWithChildren } from 'react';

import authLayoutImage from '~/images/auth-image-2.png';

export default function AuthenticationLayout({ children }: PropsWithChildren) {
  return (
    <main className='grid grid-cols-2 h-screen overflow-hidden'>
      <div className='col-span-1 h-full'>
        <Image
          src={authLayoutImage}
          alt='Cede'
          width={1000}
          height={1000}
          className='w-full h-full object-cover'
          placeholder='blur'
        />
      </div>
      <div className='col-span-1 h-full overflow-y-auto py-14 bg-[#FAFAFA]'>
        <div className='h-full overflow-y-auto px-[5%] xl:px-[15%] flex items-center w-full'>
          {children}
        </div>
      </div>
    </main>
  );
}
