'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiSortDescending } from 'react-icons/hi';
import { IoArrowForward } from 'react-icons/io5';

import '@szhsin/react-menu/dist/index.css';

import useDisclosure from '@/hooks/useDisclosure';

import Button from '@/components/buttons/Button';
import Dropdown from '@/components/dropdown';
import { InputSearch } from '@/components/input';
import { PaddedContainer } from '@/components/lib';
import TableContainer from '@/components/table';

import BlogTableItem from '@/app/blogs/_components/BlogTableItem';
import DeleteBlogModalContainer from '@/app/blogs/_components/DeleteBlogModalContainer';
import ImpressionsAreaChartContainer from '@/app/blogs/_components/ImpressionsAreaChartContainer';
import TableCheckbox from '@/app/users/_components/TableCheckbox';
import UsersStatCard from '@/app/users/_components/UsersStatCard';
import { userArr } from '@/app/users/_utils/constants';

export default function Page() {
  const [selectedUsers, setSelectedUsers] = useState<typeof userArr>([]);
  const deleteModal = useDisclosure();

  function isSelectedUsersEmpty() {
    return selectedUsers.length === 0;
  }

  const tableHeaders = [
    <TableCheckbox
      key='checkbox'
      isChecked={checkIfArraysEqual()}
      onClick={handleAllUsersSelectChange}
    />,
    'Post ID',
    'Author',
    'Title',
    'Date Created',
    'Status',
    '',
  ];

  function handleIndividualSelectChange(user: { id: string; name: string }) {
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

    for (let i = 0; i < userArr.length; i++) {
      if (!selectedUsers.includes(userArr[i])) {
        isEqual = false;
        break;
      }
    }

    return isEqual;
  }

  function handleAllUsersSelectChange() {
    if (checkIfArraysEqual()) setSelectedUsers([]);
    else setSelectedUsers(userArr);
  }

  return (
    <PaddedContainer isScrollable>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
        <UsersStatCard
          title='Total No. of Blogs'
          amount='32,923'
          lastUpdated='25 mins ago'
          titleClassName='text-primary'
          containerClassName='border-[#D6B6FF]'
        />
        <UsersStatCard
          title='Published blogs'
          amount='32,900'
          lastUpdated='25 mins ago'
        />
        <div className='bg-white p-5 flex flex-col gap-7 w-full rounded-[12px] border-[0.5px] border-primary-grey'>
          <div className='flex items-center justify-between'>
            <p className='text-sm'>Drafts</p>
            <Link
              href='/blogs/drafts'
              className='text-primary text-xs font-medium uppercase'
            >
              Resolve
            </Link>
          </div>
          <p className='font-semibold text-3xl flex items-end gap-1'>23</p>
          <p className='text-light-grey text-sm'>Updated 25 mins ago</p>
        </div>
      </div>

      <div className='mt-14 mb-5 flex justify-between items-center'>
        <p className='font-semibold text-xl'>Impressions</p>
        <Link
          href='/blogs/create'
          className='py-[10px] px-3 rounded-[8px] text-white bg-primary'
          // onClick={handleNextFn}
        >
          Create new blog
        </Link>
      </div>

      <ImpressionsAreaChartContainer />

      <div className='flex items-center justify-between mt-14 mb-4 '>
        {!isSelectedUsersEmpty() && (
          <Button
            variant='ghost'
            rightIcon={IoArrowForward}
            onClick={deleteModal.open}
            className='bg-light-pink !text-sm text-primary-red border-[#FFBDC9] border rounded-[8px]'
          >
            Delete selected
          </Button>
        )}
        {isSelectedUsersEmpty() && (
          <>
            <div className='flex items-center gap-[10px]'>
              <InputSearch
                containerClassName='w-[400px]'
                placeholder='Search by name, user ID, email'
              />
            </div>
            <div className='flex items-center gap-6'>
              <Dropdown
                paramKey='filter'
                label='Filter by'
                options={[]}
                containerClassName='w-fit'
                dropdownButtonClassName='w-fit rounded-[7.65px] py-[10.49px] px-3 border-primary-grey text-tertiary-grey text-[13px]'
              />
              <Dropdown
                paramKey='sort'
                leftIcon={HiSortDescending}
                label='Sort by'
                options={[]}
                containerClassName='w-fit'
                dropdownButtonClassName='w-fit rounded-[7.65px] py-[10.49px] px-3 border-primary-grey text-tertiary-grey text-[13px]'
              />
            </div>
          </>
        )}
      </div>

      <div className='bg-white mt-4 py-10 px-7'>
        <TableContainer headers={tableHeaders}>
          {userArr.map((user) => (
            <BlogTableItem
              key={user.id}
              isSelected={selectedUsers.includes(user)}
              onSelectChange={() => {
                handleIndividualSelectChange(user);
              }}
              openDelete={deleteModal.open}
            />
          ))}
        </TableContainer>
      </div>

      <DeleteBlogModalContainer
        isOpen={deleteModal.isOpen}
        handleOpenModal={deleteModal.open}
        handleCloseModal={deleteModal.close}
      />
    </PaddedContainer>
  );
}
