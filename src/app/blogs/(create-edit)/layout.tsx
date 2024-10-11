import { PropsWithChildren } from 'react';

import { NullResponsiveWrapper } from '@/components/null-responsive-wrapper';

import UserTopBar from '@/app/users/[userId]/_components/UserTopBar';

export default async function UserLayout({ children }: PropsWithChildren) {
  return (
    <NullResponsiveWrapper>
      <div className='h-screen w-full overflow-hidden'>
        <div className='grid h-screen w-full grid-rows-[auto_1fr] grid-cols-1 overflow-hidden'>
          <UserTopBar />

          <main className='row-start-2 row-span-1 grid h-full w-full grid-rows-1 overflow-hidden bg-[#FAFAFA]'>
            <div className='h-full w-full overflow-hidden'>{children}</div>
          </main>
        </div>
      </div>
    </NullResponsiveWrapper>
  );
}
