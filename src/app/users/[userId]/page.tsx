'use client';

import { BsDownload, BsIncognito, BsPeopleFill } from 'react-icons/bs';
import { HiSortDescending } from 'react-icons/hi';

import useDisclosure from '@/hooks/useDisclosure';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import Dropdown from '@/components/dropdown';
import { InputSearch } from '@/components/input';
import { PaddedContainer } from '@/components/lib';
import TableContainer from '@/components/table';

import BlacklistUserModalContainer from '@/app/users/_components/BlacklistUserModalContainer';
import UserStatCard from '@/app/users/[userId]/_components/UserStatCard';
import UserTransactionHistoryTableItem from '@/app/users/[userId]/_components/UserTransactionHistoryTableItem';

const headers = [
  'Beneficiary',
  'Date',
  'Amount',
  'Status',
  'Transfer type',
  '',
];

export default function Page() {
  const {
    isOpen: isBlacklistOpen,
    open: openBlacklist,
    close: closeBlacklist,
  } = useDisclosure();

  return (
    <PaddedContainer isScrollable>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <BsPeopleFill className='text-4xl text-primary-pink' />
          <h1 className='font-bold text-4xl'>Odell Beckham</h1>
        </div>

        <Button
          variant='ghost'
          onClick={openBlacklist}
          leftIcon={BsIncognito}
          className='text-sm font-medium'
          classNames={{ leftIcon: 'text-primary-red mr-2' }}
        >
          Blacklist user
        </Button>
      </div>

      <div className='mt-11 mb-16 grid grid-cols-2 lg:grid-cols-3 gap-6'>
        <UserStatCard title='Transaction volume' amount='10,000' currency='$' />
        <UserStatCard title='Total beneficiaries' amount='20' />
        <UserStatCard title='No. of transactions' amount='20' />
      </div>

      <div>
        <p className='font-semibold text-xl'>Transaction History</p>

        <div className='flex items-end lg:items-center justify-between mt-10 mb-7'>
          <div className='flex flex-col lg:flex-row items-start lg:items-center gap-7'>
            <InputSearch
              containerClassName='w-[350px]'
              placeholder='Search by name, user ID, email'
            />
            <div className='flex items-center gap-6'>
              <Dropdown
                paramKey='filter'
                label='Filter by'
                options={[]}
                containerClassName='w-fit'
                dropdownButtonClassName='w-fit rounded-[7.65px] bg-white py-[10.49px] px-3 border-primary-grey text-tertiary-grey text-[13px]'
              />
              <Dropdown
                paramKey='sort'
                leftIcon={HiSortDescending}
                label='Sort by'
                options={[]}
                containerClassName='w-fit'
                dropdownButtonClassName='w-fit rounded-[7.65px] bg-white py-[10.49px] px-3 border-primary-grey text-tertiary-grey text-[13px]'
              />
            </div>
          </div>
          <IconButton
            icon={BsDownload}
            variant='ghost'
            className='bg-secondary text-primary w-11 h-11 rounded-[100%]'
          />
        </div>

        <TableContainer headers={headers}>
          <UserTransactionHistoryTableItem />
          <UserTransactionHistoryTableItem />
          <UserTransactionHistoryTableItem />
          <UserTransactionHistoryTableItem />
        </TableContainer>
      </div>

      <BlacklistUserModalContainer
        isOpen={isBlacklistOpen}
        handleOpenModal={openBlacklist}
        handleCloseModal={closeBlacklist}
      />
    </PaddedContainer>
  );
}
