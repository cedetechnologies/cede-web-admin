import { IoCheckmarkOutline } from 'react-icons/io5';

type Props = {
  checked: boolean;
  label: string;
};

const PasswordChecklist = ({ checked, label }: Props) => {
  return (
    <div className='flex items-center gap-1'>
      {checked && <IoCheckmarkOutline className='text-primary-green text-xl' />}
      {!checked && (
        <div className='w-4 h-4 flex items-center justify-center'>
          <div className='w-2 h-2 rounded-[100%] border border-[#949494]' />
        </div>
      )}
      <p className='text-xs'>{label}</p>
    </div>
  );
};

export default PasswordChecklist;
