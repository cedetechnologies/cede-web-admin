import PostForm from '@/app/blogs/(create-edit)/_components/PostForm';
import TemplateContainer from '@/app/blogs/(create-edit)/_components/TemplateContainer';

export default function PostsContainer() {
  return (
    <div className='grid grid-cols-6 gap-6'>
      <div className='col-span-5 w-full flex flex-col gap-10'>
        <TemplateContainer />
        <div className='bg-white rounded-[8px] p-[30px]'>
          <PostForm />
        </div>
      </div>
      <div className='col-span-1 bg-white rounded-[8px] py-4 px-5 flex flex-col gap-6 text-sm'>
        <div className='flex flex-col gap-1 h-fit'>
          <p className='text-light-grey'>Date</p>
          <p>Apr 16, 2024, 10: 55AM</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-light-grey'>Created by</p>
          <p>Odell Beckham</p>
        </div>
      </div>
    </div>
  );
}
