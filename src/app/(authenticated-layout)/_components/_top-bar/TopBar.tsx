import { FiHeadphones } from 'react-icons/fi';
import { GoBell } from 'react-icons/go';

import IconButton from '@/components/buttons/IconButton';

const TopBar = () => {
  // const { path } = useGetActivePath(1);

  return (
    <>
      <div className='border-primary-grey relative flex items-center justify-between border-b-[0.5px] bg-white px-10 py-6'>
        <p className='font-medium text-2xl'>Overview</p>
        <div className='relative flex items-center gap-4'>
          <IconButton
            variant='ghost'
            icon={GoBell}
            className='text-2xl w-[46px] h-[46px] rounded-[100%] border border-primary-grey flex justify-center items-center'
          />

          <IconButton
            variant='ghost'
            icon={FiHeadphones}
            className='text-2xl w-[46px] h-[46px] rounded-[100%] border border-primary-grey flex justify-center items-center'
          />
        </div>
      </div>
    </>
  );
};

export default TopBar;
