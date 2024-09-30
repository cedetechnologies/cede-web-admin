import { PaddedContainer } from '@/components/lib';

import CashflowChartContainer from '@/app/(authenticated-layout)/_components/_cash-flow-chart/CashFlowChartContainer';
import RecentTransactions from '@/app/(authenticated-layout)/_components/_recent-transactions/RecentTransactions';
import DefaultCurrency from '@/app/(authenticated-layout)/_components/DefaultCurrency';
import TopCurrencyTransactions from '@/app/(authenticated-layout)/_components/TopCurrencyTransactions';
import TransactionStatCard from '@/app/(authenticated-layout)/_components/TransactionStatCard';

export default function Page() {
  return (
    <PaddedContainer isScrollable className='!pt-0'>
      <div className='my-5'>
        <DefaultCurrency />
      </div>

      <div className='mb-8 flex flex-col lg:flex-row items-center gap-6'>
        <TransactionStatCard
          title='Total Transaction Count'
          amount='160'
          lastUpdated='25 mins ago'
        />
        <TransactionStatCard
          title='Average Transaction per User'
          amount='20,000'
          lastUpdated='25 mins ago'
          currencySymbol='$'
          currency='USD'
        />
      </div>

      <CashflowChartContainer />

      <div className='my-7'>
        <TopCurrencyTransactions />
      </div>

      <RecentTransactions />
    </PaddedContainer>
  );
}
