'use client';

import { LucideIcon, ReceiptText } from 'lucide-react';
import { IconType } from 'react-icons';
import { BsPatchCheck } from 'react-icons/bs';
import { CiLogout } from 'react-icons/ci';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuUsers2 } from 'react-icons/lu';
import { RiHome6Fill } from 'react-icons/ri';

import { cn } from '@/lib/utils';
import useDisclosure from '@/hooks/useDisclosure';
import useMediaQuery from '@/hooks/useMediaQuery';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';

import CedeLogo from '@/app/(authenticated-layout)/_components/_sidebar/CedeLogo';
import ProfileLink from '@/app/(authenticated-layout)/_components/_sidebar/ProfileLink';
import LogoutModal from '@/app/(authenticated-layout)/_components/_top-bar/LogoutModal';
import { Routes } from '@/constant/routes';

import SidebarLink from './SidebarLink';

export type SidebarLinksType = {
  id: number;
  icon: LucideIcon | IconType;
  title: string;
  href?: string | undefined;
  base?: string;
  sublinks?: SidebarLinksSublinkType[] | undefined;
};

export type SidebarLinksSublinkType = {
  title: string;
  href: string;
  id: string;
  index?: boolean;
};

const sideBarLinks: SidebarLinksType[] = [
  { id: 1, icon: RiHome6Fill, title: 'Dashboard', href: '/' },
  {
    id: 2,
    icon: LuUsers2,
    title: 'Manage users',
    href: Routes.ManageUsers,
  },
  {
    id: 3,
    icon: ReceiptText,
    title: 'Manage transactions',
    href: Routes.ManageTransactions,
  },
  {
    id: 4,
    icon: BsPatchCheck,
    title: 'Account verification',
    href: Routes.AccountVerification,
  },
  {
    id: 5,
    icon: IoSettingsOutline,
    title: 'Settings',
    href: Routes.Settings,
  },
];

export default function Sidebar() {
  const isOpen = useMediaQuery(`(min-width: 1028px)`);

  const {
    isOpen: isLogoutOpen,
    open: openLogout,
    close: closeLogout,
  } = useDisclosure();

  return (
    <aside
      className={cn(
        'no-scrollbar w-[5.5rem] py-8 transition-all duration-200 ease-linear lg:w-24 xl:w-24 2xl:w-32',
        [isOpen && 'md:w-40 lg:w-fit xl:w-60 2xl:w-64']
      )}
    >
      <div className='flex w-full items-center gap-2 break-words px-4 text-xl text-white'>
        <CedeLogo />
      </div>

      <nav className='mt-8 mb-10'>
        <ul className='flex flex-col gap-3'>
          {sideBarLinks.map((link) => {
            return <SidebarLink {...link} key={link.id} isOpen={isOpen} />;
          })}
        </ul>
      </nav>

      <div className='w-full h-[1px] bg-primary-grey' />

      {isOpen && (
        <Button
          leftIcon={CiLogout}
          variant='ghost'
          onClick={openLogout}
          className='bg-white text-primary-red font-semibold gap-3 mt-12'
          classNames={{ leftIcon: 'text-3xl' }}
        >
          Log Out
        </Button>
      )}
      {!isOpen && (
        <div className='text-3xl text-primary-red mt-12 mx-auto w-12'>
          <IconButton icon={CiLogout} variant='ghost' onClick={openLogout} />
        </div>
      )}

      <div className='mt-24 px-3'>
        <ProfileLink />
      </div>

      <LogoutModal
        isOpen={isLogoutOpen}
        handleOpenModal={openLogout}
        handleCloseModal={closeLogout}
      />
    </aside>
  );
}
