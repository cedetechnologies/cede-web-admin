'use client';

import { useState } from 'react';
import { BsDownload } from 'react-icons/bs';
import { HiSortDescending } from 'react-icons/hi';

import IconButton from '@/components/buttons/IconButton';
import Dropdown from '@/components/dropdown';
import { InputSearch } from '@/components/input';
import { PaddedContainer } from '@/components/lib';
import TableContainer from '@/components/table';

import VerificationTableItem from '@/app/(authenticated-layout)/verification/_components/VerificationTableItem';
import TableCheckbox from '@/app/users/_components/TableCheckbox';
import UsersStatCard from '@/app/users/_components/UsersStatCard';
import { verificationArr } from '@/app/users/_utils/constants';

export default function Page() {
  const [selectedUsers, setSelectedUsers] = useState<typeof verificationArr>(
    []
  );

  const tableHeaders = [
    <TableCheckbox
      key='checkbox'
      isChecked={checkIfArraysEqual()}
      onClick={handleAllUsersSelectChange}
    />,
    'Account name',
    'Email address',
    'Account type',
    'Date Created',
    'KYC Status',
    '',
  ];

  function handleIndividualSelectChange(
    user: (typeof verificationArr)[number]
  ) {
    const userIndex = selectedUsers.findIndex((el) => el.id === user.id);

    if (userIndex > -1) {
      const newArr = [...selectedUsers];
      newArr.splice(userIndex, 1);
      setSelectedUsers(newArr);
    } else setSelectedUsers([...selectedUsers, user]);
  }

  function checkIfArraysEqual() {
    let isEqual = true;

    if (selectedUsers.length === 0) return false;

    for (let i = 0; i < verificationArr.length; i++) {
      if (!selectedUsers.includes(verificationArr[i])) {
        isEqual = false;
        break;
      }
    }

    return isEqual;
  }

  function handleAllUsersSelectChange() {
    if (checkIfArraysEqual()) setSelectedUsers([]);
    else setSelectedUsers(verificationArr);
  }

  return (
    <PaddedContainer isScrollable>
      <p className='font-semibold text-2xl'>KYC Verification</p>

      <div className='my-8 grid grid-cols-2 lg:grid-cols-3 gap-6'>
        <UsersStatCard
          title='Total Approved'
          amount='2,000'
          lastUpdated='25 mins ago'
        />
        <UsersStatCard
          title='Total Pending'
          amount='1,200'
          lastUpdated='25 mins ago'
          titleClassName='text-primary'
          containerClassName='border-[#D6B6FF]'
        />
        <UsersStatCard
          title='Total Rejected'
          amount='100'
          lastUpdated='25 mins ago'
        />
      </div>

      <div className='flex items-center justify-between gap-[10px] mb-8'>
        <Dropdown
          paramKey='filter'
          label='Filter verification'
          options={[]}
          containerClassName='w-fit'
          dropdownButtonClassName='w-fit rounded-[7.65px] py-[10.49px] px-3 border-primary-grey text-tertiary-grey text-[13px]'
        />
        <InputSearch
          containerClassName='w-1/3 lg:w-1/2 xl:w-3/5'
          placeholder='Search transactions'
        />
        <Dropdown
          paramKey='sort'
          leftIcon={HiSortDescending}
          label='Sort by'
          options={[]}
          containerClassName='w-fit'
          dropdownButtonClassName='w-fit rounded-[7.65px] py-[10.49px] px-3 border-primary-grey text-tertiary-grey text-[13px]'
        />
        <IconButton
          icon={BsDownload}
          variant='ghost'
          className='bg-secondary text-primary w-11 h-11 rounded-[100%]'
        />
      </div>

      <div className='bg-white mt-4 py-10 px-7'>
        <TableContainer headers={tableHeaders}>
          {verificationArr.map((verification) => (
            <VerificationTableItem
              key={verification.id}
              verification={verification}
              isSelected={selectedUsers.includes(verification)}
              onSelectChange={() => {
                handleIndividualSelectChange(verification);
              }}
            />
          ))}
        </TableContainer>
      </div>
    </PaddedContainer>
  );
}
