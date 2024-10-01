import { PropsWithChildren } from 'react';

import { NullResponsiveWrapper } from '@/components/null-responsive-wrapper';

import Sidebar from '@/app/(authenticated-layout)/_components/_sidebar/Sidebar';
import TopBar from '@/app/(authenticated-layout)/_components/_top-bar/TopBar';

export default async function AuthenticatedLayout({
  children,
}: PropsWithChildren) {
  return (
    <NullResponsiveWrapper>
      <div className='h-screen w-full overflow-hidden'>
        <div className='grid h-screen w-full grid-cols-[auto_1fr] grid-rows-1 overflow-hidden'>
          <Sidebar />

          <main className='col-span-1 col-start-2 grid h-full w-full grid-cols-1 grid-rows-[auto_1fr] overflow-hidden bg-white'>
            <div>
              <TopBar />
            </div>

            <div className='h-full w-full overflow-hidden bg-[#FAFAFA]'>
              {children}
            </div>
          </main>
        </div>
      </div>
    </NullResponsiveWrapper>
  );
}
