import { LuImagePlus } from 'react-icons/lu';

export default function Template() {
  return (
    <div className='flex flex-col gap-[9px] w-full'>
      <div className='rounded-[12px] flex justify-center items-center border border-primary-grey py-11'>
        <div className='flex items-center w-24 h-24 justify-center rounded-[38px] bg-[#F5F5F5] text-[50px] text-light-grey'>
          <LuImagePlus />
        </div>
      </div>
      <p className='text-m font-medium text-tertiary-grey'>Template 1</p>
    </div>
  );
}
