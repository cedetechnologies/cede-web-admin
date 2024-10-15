import { Input, MultiLine } from '@/components/input';

import BlogImage from '@/app/blogs/(create-edit)/_components/BlogImage';

export default function PostForm() {
  return (
    <div className='w- full grid grid-cols-3 gap-[10%]'>
      <div className='w-full col-span-2 flex flex-col gap-11'>
        <Input
          id='title'
          label='Blog title'
          containerClassName='border-tertiary-grey'
        />
        <MultiLine
          id='content'
          label='Blog content'
          rows={9}
          containerClassName='border-tertiary-grey'
        />
      </div>
      <div className='col-span-1 flex flex-col gap-11'>
        <Input
          id='author'
          label='Blog author'
          containerClassName='border-tertiary-grey'
        />
        <BlogImage />
      </div>
    </div>
  );
}
