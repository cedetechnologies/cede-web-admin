'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BsIncognito } from 'react-icons/bs';
import { BsDownload } from 'react-icons/bs';

import '@szhsin/react-menu/dist/index.css';

import useDisclosure from '@/hooks/useDisclosure';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import Dropdown from '@/components/dropdown';
import { InputSearch } from '@/components/input';
import { PaddedContainer } from '@/components/lib';
import TableContainer from '@/components/table';

import BlacklistUserModalContainer from '@/app/users/_components/BlacklistUserModalContainer';
import PermitUserContainer from '@/app/users/_components/PermitUserContainer';
import SortUsers from '@/app/users/_components/SortUsers';
import UsersStatCard from '@/app/users/_components/UsersStatCard';
import UserTableItem from '@/app/users/_components/UserTableItem';
import { userArr } from '@/app/users/_utils/constants';

const filterOptions = [
  { label: 'All', value: '' },
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
];

const tableHeaders = [
  'User ID',
  'Name',
  'Email address',
  'Account type',
  'Date Created',
  'Status',
  '',
];

export default function Page() {
  const [currentUser, setCurrentUser] = useState<
    undefined | (typeof userArr)[number]
  >(undefined);
  const router = useRouter();

  const {
    isOpen: isBlacklistOpen,
    open: openBlacklist,
    close: closeBlacklist,
  } = useDisclosure();

  const permitModal = useDisclosure();

  // function isSelectedUsersEmpty() {
  //   return selectedUsers.length === 0;
  // }

  // function handleIndividualSelectChange(user: { id: string; name: string }) {
  //   const userIndex = selectedUsers.findIndex((el) => el.id === user.id);

  //   if (userIndex > -1) {
  //     const newArr = [...selectedUsers];
  //     newArr.splice(userIndex, 1);
  //     setSelectedUsers(newArr);
  //   } else setSelectedUsers([...selectedUsers, user]);
  // }

  // function checkIfArraysEqual() {
  //   let isEqual = true;

  //   if (selectedUsers.length === 0) return false;

  //   for (let i = 0; i < userArr.length; i++) {
  //     if (!selectedUsers.includes(userArr[i])) {
  //       isEqual = false;
  //       break;
  //     }
  //   }

  //   return isEqual;
  // }

  // function handleAllUsersSelectChange() {
  //   if (checkIfArraysEqual()) setSelectedUsers([]);
  //   else setSelectedUsers(userArr);
  // }

  return (
    <PaddedContainer isScrollable className=''>
      <div className='w-fit'>
        <Dropdown
          paramKey='type'
          defaultValue='individual'
          label='Individual'
          options={[
            { label: 'Individual', value: 'Individual' },
            { label: 'Business', value: 'Business' },
          ]}
          dropdownButtonClassName='border-none text-sm font-medium'
        />
      </div>

      <div className='mt-5 mb-20 grid grid-cols-2 lg:grid-cols-3 gap-6'>
        <UsersStatCard
          title='Total No. of Users'
          amount='43,132'
          lastUpdated='25 mins ago'
          titleClassName='text-primary'
          containerClassName='border-[#D6B6FF]'
        />
        <UsersStatCard
          title='Active Users'
          amount='32,900'
          lastUpdated='25 mins ago'
        />
        <UsersStatCard
          title='Inactive Users'
          amount='10,132'
          lastUpdated='25 mins ago'
        />
      </div>

      <div className='flex flex-col lg:flex-row items-start gap-5 lg:items-center justify-between'>
        <div className='flex items-center gap-[10px]'>
          <InputSearch
            containerClassName='w-[300px]'
            placeholder='Search by name, user ID, email'
          />
          <Button
            variant='ghost'
            leftIcon={BsIncognito}
            className='text-sm font-medium'
            classNames={{ leftIcon: 'text-primary-red mr-2' }}
            onClick={() => router.push('/users/blacklisted')}
          >
            Blacklisted users
          </Button>
        </div>
        <div className='flex items-center gap-6'>
          <Dropdown
            paramKey='filter'
            label='Filter by'
            options={filterOptions}
            containerClassName='w-fit'
            dropdownButtonClassName='w-fit rounded-[7.65px] py-[10.49px] px-3 border-primary-grey text-tertiary-grey !text-[13px]'
          />
          <SortUsers
            label='Sort by'
            containerClassName='w-fit rounded-[7.65px] py-[10.49px] px-3 border-primary-grey text-tertiary-grey font-medium text-[13px] border'
          />
          <IconButton
            icon={BsDownload}
            variant='ghost'
            className='bg-secondary text-primary w-11 h-11 rounded-[100%]'
          />
        </div>
      </div>

      <div className='bg-white mt-4 py-10 px-7'>
        <TableContainer headers={tableHeaders}>
          {userArr.map((user) => (
            <UserTableItem
              key={user.id}
              openBlacklist={openBlacklist}
              setCurrentUser={setCurrentUser}
              openPermit={permitModal.open}
            />
          ))}
        </TableContainer>
      </div>

      <BlacklistUserModalContainer
        user={currentUser}
        isOpen={isBlacklistOpen}
        handleOpenModal={openBlacklist}
        handleCloseModal={closeBlacklist}
      />

      <PermitUserContainer
        isOpen={permitModal.isOpen}
        handleOpenModal={permitModal.open}
        handleCloseModal={permitModal.close}
      />

      {/* <BlacklistUserModalContainer
        users={selectedUsers}
        isOpen={isBlacklistMultipleOpen}
        handleOpenModal={openBlacklistMultiple}
        handleCloseModal={closeBlacklistMultiple}
      /> */}
    </PaddedContainer>
  );
}
