import { MdCheck } from 'react-icons/md';

import { cn } from '@/lib/utils';

type Props = {
  isChecked?: boolean;
  onClick: () => void;
};

export default function TableCheckbox({ isChecked, onClick }: Props) {
  return (
    <div
      className={cn(
        'w-4 h-4 flex items-center justify-center cursor-pointer border-[1.5px] rounded-[4px] transition-all duration-1000 border-[#BDBDBD]',
        [isChecked && 'bg-primary border-none']
      )}
      onClick={onClick}
    >
      {isChecked && <MdCheck className='text-[10px] text-white' />}
    </div>
  );
}
