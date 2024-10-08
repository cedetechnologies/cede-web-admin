'use client';

import { BsDownload } from 'react-icons/bs';
import { HiSortDescending } from 'react-icons/hi';

import '@szhsin/react-menu/dist/index.css';

import useDisclosure from '@/hooks/useDisclosure';

import IconButton from '@/components/buttons/IconButton';
import Dropdown from '@/components/dropdown';
import { InputSearch } from '@/components/input';
import { PaddedContainer } from '@/components/lib';
import TableContainer from '@/components/table';

import RateModalContainer from '@/app/(authenticated-layout)/rate-negotiation/_components/RateModalContainer';
import RateTableItem from '@/app/(authenticated-layout)/rate-negotiation/_components/RateTableItem';
import UsersStatCard from '@/app/users/_components/UsersStatCard';

const tableHeaders = [
  'Name',
  'Amount',
  'Date',
  'Rate',
  'Account type',
  'Status',
  '',
];

export default function Page() {
  const rateDetailsModal = useDisclosure();

  return (
    <PaddedContainer isScrollable className=''>
      <div className='mt-5 mb-20 grid grid-cols-2 lg:grid-cols-3 gap-6'>
        <UsersStatCard
          title='Pending negotiations'
          amount='2,000'
          lastUpdated='25 mins ago'
          titleClassName='text-primary'
          containerClassName='border-[#D6B6FF]'
        />
        <UsersStatCard
          title='Approved negotiations'
          amount='300'
          lastUpdated='25 mins ago'
        />
        <UsersStatCard
          title='Rejected negotiations'
          amount='400'
          lastUpdated='25 mins ago'
        />
      </div>

      <div className='flex items-center justify-between'>
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
          <IconButton
            icon={BsDownload}
            variant='ghost'
            className='bg-secondary text-primary w-11 h-11 rounded-[100%]'
          />
        </div>
      </div>

      <div className='bg-white mt-4 py-10 px-7'>
        <TableContainer headers={tableHeaders}>
          <RateTableItem openDetails={rateDetailsModal.open} />
          <RateTableItem openDetails={rateDetailsModal.open} />
          <RateTableItem openDetails={rateDetailsModal.open} />
          <RateTableItem openDetails={rateDetailsModal.open} />
          <RateTableItem openDetails={rateDetailsModal.open} />
        </TableContainer>
      </div>

      <RateModalContainer
        isOpen={rateDetailsModal.isOpen}
        handleOpenModal={rateDetailsModal.open}
        handleCloseModal={rateDetailsModal.close}
      />
    </PaddedContainer>
  );
}
