import Link from 'next/link';

import TableContainer from '@/components/table';

import TransactionTableItem from '@/app/(authenticated-layout)/_components/_recent-transactions/TransactionTableItem';

const headers = [
  'Beneficiary',
  'Date',
  'Amount',
  'Status',
  'Transfer type',
  '',
];

export default function RecentTransactions() {
  return (
    <div className='mt-14'>
      <div className='flex items-center justify-between font-medium font-figtree'>
        <p>Recent Transactions</p>
        <Link href='/' className='text-primary font-figtree'>
          SEE ALL
        </Link>
      </div>

      <div className=''>
        <TableContainer
          headers={headers}
          tableHeadClass='first-of-type:w-1/3 last-of-type:w-14'
        >
          <TransactionTableItem />
        </TableContainer>
      </div>
    </div>
  );
}
