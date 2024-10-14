import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { IoArrowBack } from 'react-icons/io5';

import { PaddedContainer } from '@/components/lib';
import ActiveLink from '@/components/links/ActiveLink';

const transactionsLinks = [
  { route: '', label: 'Transaction History', index: true },
  {
    route: 'resolved',
    label: 'Resolved History',
    index: false,
  },
];

export default function TransactionsSubRoutesLayout({
  children,
}: PropsWithChildren) {
  return (
    <PaddedContainer isScrollable>
      <Link
        href='/transactions'
        className='flex items-center gap-2 text-primary font-semibold text-sm mb-7'
      >
        <IoArrowBack />
        Back
      </Link>

      <div className='border-primary-grey mb-8 w-fit flex items-center gap-6 border-b-2'>
        {transactionsLinks.map((el) => (
          <ActiveLink
            key={el.label}
            href={`/transactions/history${el.route && `/${el.route}`}`}
            className='-mb-[2px] cursor-pointer border-b-2 text-light-grey border-transparent p-3 font-medium'
            activeClassName='border-primary-pink text-primary-black'
            index={el.index}
          >
            {el.label}
          </ActiveLink>
        ))}
      </div>

      {children}
    </PaddedContainer>
  );
}
