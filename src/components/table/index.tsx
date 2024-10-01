'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Children, ReactNode } from 'react';
import { PiCaretLeft, PiCaretRight } from 'react-icons/pi';
import ReactPaginate from 'react-paginate';

import { cn } from '@/lib/utils';

import TableLoader from '@/components/table-loader';

type TableContainerProps = {
  children?: ReactNode;
  tableHeadClass?: string;
  headers: Array<string | ReactNode>;
  alignHeader?: 'left' | 'right' | 'center';
  totalPages?: number;
  limit?: number;
  isLoading?: boolean;
  className?: string;
  RenderOnEmptyState?: ReactNode;
};

const TableContainer = ({
  children,
  headers,
  tableHeadClass,
  isLoading,
  totalPages,
  alignHeader = 'left',
  className,
  RenderOnEmptyState,
}: TableContainerProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  function handlePageChange(clickEvent: { selected: number }) {
    const params = new URLSearchParams(Array.from(searchParams.entries()));

    params.set('page', `${clickEvent.selected + 1}`);

    router.replace(`?${params.toString()}`, { scroll: false });
  }

  const textAlign = `text-${alignHeader}`;
  const isChildrenPresent = Children.toArray(children).length > 0;

  return (
    <div className={cn('no-scrollbar w-full overflow-x-auto', [className])}>
      {!isLoading && isChildrenPresent && (
        <table className='w-max min-w-full border-separate border-spacing-y-5'>
          <thead className='h-auto w-full border-none'>
            <tr className='w-full'>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className={cn(
                    'whitespace-nowrap text-xs text-[#636363] border-none lg:mr-4 font-normal first:rounded-l-[8px] last:rounded-r-[8px]',
                    [tableHeadClass],
                    [textAlign]
                  )}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      )}

      {!isLoading &&
        !isChildrenPresent &&
        (RenderOnEmptyState ?? (
          <div className='my-10 flex items-center justify-center'>
            <p> It's empty in here... </p>
          </div>
        ))}

      {isLoading && <TableLoader className='mt-5' />}

      {!!totalPages && !isLoading && totalPages > 1 && (
        <div className='mt-14 flex items-center gap-5'>
          <div className='flex'>
            <p className='text-[16px] leading-[24px] text-gray-800 '>
              Showing{' '}
              <span className='rounded-md border px-3.5 py-2'>{page}</span> out
              of {totalPages} pages{' '}
            </p>
          </div>
          <ReactPaginate
            pageCount={totalPages}
            forcePage={page - 1}
            containerClassName='flex gap-2 justify-end items-center'
            onPageChange={handlePageChange}
            previousLabel={<PiCaretLeft />}
            nextLabel={<PiCaretRight />}
            previousClassName='flex'
            nextClassName='flex'
            nextLinkClassName='border rounded-md p-2 text-primary-black/60'
            previousLinkClassName='border rounded-md p-2 text-primary-black/60'
            disabledLinkClassName='text-primary-black/20 border-primary-black/20'
            activeLinkClassName='font-semibold text-secondary'
            renderOnZeroPageCount={null}
          />
        </div>
      )}
    </div>
  );
};

export default TableContainer;
