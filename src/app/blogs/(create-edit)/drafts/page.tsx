'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiSortDescending } from 'react-icons/hi';
import { IoArrowForward } from 'react-icons/io5';
import { IoArrowBack } from 'react-icons/io5';

import '@szhsin/react-menu/dist/index.css';

import useDisclosure from '@/hooks/useDisclosure';

import Button from '@/components/buttons/Button';
import Dropdown from '@/components/dropdown';
import { InputSearch } from '@/components/input';
import { PaddedContainer } from '@/components/lib';
import TableContainer from '@/components/table';

import BlogTableItem from '@/app/blogs/_components/BlogTableItem';
import DeleteBlogModalContainer from '@/app/blogs/_components/DeleteBlogModalContainer';
import TableCheckbox from '@/app/users/_components/TableCheckbox';
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
      <Link
        href='/blogs'
        className='flex items-center gap-2 text-sm font-medium'
      >
        <IoArrowBack />
        Back
      </Link>

      <h1 className='font-bold text-4xl mt-6 mb-12'>Drafts</h1>

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
