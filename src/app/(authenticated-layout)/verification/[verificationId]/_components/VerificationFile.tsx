import { PiFileLight } from 'react-icons/pi';

import Button from '@/components/buttons/Button';

type Props = {
  title: string;
  fileName: string;
};

export default function VerificationFile({ fileName, title }: Props) {
  return (
    <div className='flex flex-col gap-2'>
      <p className='font-medium text-sm'>{title}</p>
      <div className='flex flex-col items-center py-6'>
        <div className='w-10 h-10 bg-secondary-grey flex items-center rounded-[16px] justify-center text-[#999999]'>
          <PiFileLight />
        </div>
        <p className='mt-3 font-inter font-medium text-sm mb-1'>{fileName}</p>
        <Button variant='ghost' className='py-0 px-0 text-primary !text-xs'>
          Click to view
        </Button>
      </div>
    </div>
  );
}
