import { BsDownload } from 'react-icons/bs';

import Button from '@/components/buttons/Button';
import DateFilter from '@/components/DateFilter';
import TableContainer from '@/components/table';

import ActivityTableItem from '@/app/(authenticated-layout)/settings/activity/_components/ActivityTableItem';

const headers = ['Team member', 'Login date', 'Event', 'Source', 'IP address'];

export default function Page() {
  return (
    <section>
      <div className='flex items-center justify-between'>
        <DateFilter />
        <Button
          variant='ghost'
          className='flex items-center text-tertiary-grey text-sm bg-white p-4 border border-primary-grey rounded-[8px]'
        >
          <BsDownload className='mr-2 text-primary' />
          Export CSV
        </Button>
      </div>

      <div className='mt-7'>
        <TableContainer headers={headers}>
          <ActivityTableItem />
          <ActivityTableItem />
          <ActivityTableItem />
        </TableContainer>
      </div>
    </section>
  );
}
