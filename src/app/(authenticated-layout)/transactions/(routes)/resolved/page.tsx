'use client';

import { BsDownload } from 'react-icons/bs';

import useDisclosure from '@/hooks/useDisclosure';

import IconButton from '@/components/buttons/IconButton';
import { InputSearch } from '@/components/input';
import TableContainer from '@/components/table';

import FilterTransactions from '@/app/(authenticated-layout)/transactions/_components/FilterTransactions';
import SortTransactions from '@/app/(authenticated-layout)/transactions/_components/SortTransactions';
import TransactionHistoryTableItem from '@/app/(authenticated-layout)/transactions/_components/TransactionHistoryTableItem';
import TransactionModalContainer from '@/app/(authenticated-layout)/transactions/_components/TransactionModalContainer';

const headers = [
  'Acount Details',
  'Date',
  'Amount',
  'Account type',
  'Status',
  'Transfer type',
  '',
];

export default function Page() {
  const {
    isOpen: isDetailsOpen,
    open: openDetails,
    close: closeDetails,
  } = useDisclosure();

  return (
    <div>
      <div className='flex items-center justify-between gap-[10px] mb-8'>
        <FilterTransactions
          label='Filter transactions'
          containerClassName='w-fit rounded-[7.65px] py-[10.49px] px-3 border-primary-grey text-tertiary-grey !text-[13px] border'
        />
        <InputSearch
          containerClassName='w-1/3 lg:w-1/2 xl:w-3/5'
          placeholder='Search transactions'
        />
        <SortTransactions
          label='Sort transactions'
          containerClassName='w-fit rounded-[7.65px] py-[10.49px] px-3 border-primary-grey text-tertiary-grey !text-[13px] border'
        />
        <IconButton
          icon={BsDownload}
          variant='ghost'
          className='bg-secondary text-primary w-11 h-11 rounded-[100%]'
        />
      </div>

      <div className='bg-white rounded-[8px] py-10 px-8'>
        <TableContainer headers={headers}>
          <TransactionHistoryTableItem openDetails={openDetails} />
          <TransactionHistoryTableItem openDetails={openDetails} />
          <TransactionHistoryTableItem openDetails={openDetails} />
          <TransactionHistoryTableItem openDetails={openDetails} />
        </TableContainer>
      </div>

      <TransactionModalContainer
        isOpen={isDetailsOpen}
        handleOpenModal={openDetails}
        handleCloseModal={closeDetails}
      />
    </div>
  );
}
