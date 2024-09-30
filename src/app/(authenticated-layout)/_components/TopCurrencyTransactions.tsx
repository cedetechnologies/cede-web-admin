import CurrencyTransactionCard from '@/app/(authenticated-layout)/_components/CurrencyTransactionCard';

const transactions = [
  {
    currency: 'NGN',
    flagCode: 'NG',
    change: '5',
    transactions: '300',
  },
  {
    currency: 'XOF',
    flagCode: 'ML',
    change: '5',
    transactions: '233',
  },
  {
    currency: 'XAF',
    flagCode: 'CM',
    change: '3',
    transactions: '230',
  },
  {
    currency: 'CFA',
    flagCode: 'CI',
    change: '2',
    transactions: '112',
  },
  {
    currency: 'GHC',
    flagCode: 'GH',
    change: '1',
    transactions: '78',
  },
];

export default function TopCurrencyTransactions() {
  return (
    <div className='flex flex-col gap-[10px]'>
      <div className='flex items-center gap-[10px]'>
        <p className='font-medium'>Top Currency Transactions</p>
        <p className='text-xs leading-4 text-light-grey'>USD</p>
      </div>

      <div className='flex items-center gap-5 flex-wrap'>
        {transactions.map((transaction) => (
          <CurrencyTransactionCard
            key={transaction.currency}
            {...transaction}
          />
        ))}
      </div>
    </div>
  );
}
