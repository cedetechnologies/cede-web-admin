import { motion } from 'framer-motion';
import { HiTrash } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';

import { useAppDispatch } from '@/store';

import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';
import {
  DELETE_BLOG_SUCCESS_STAGE,
  setDeleteBlogStage,
} from '@/slices/deleteBlogSlice';

type Props = {
  close: () => void;
};

export default function DeleteBlog({ close }: Props) {
  const dispatch = useAppDispatch();

  return (
    <motion.div
      variants={multiStepVariants}
      initial='initial'
      exit='exit'
      animate='animate'
      className='flex flex-col h-full justify-between'
    >
      <div className='flex justify-end mb-7'>
        <IconButton
          variant='ghost'
          icon={IoMdClose}
          onClick={close}
          className='text-2xl'
        />
      </div>

      <div className='flex flex-col gap-6 items-center'>
        <div className='text-center flex flex-col items-center gap-[10px]'>
          <div className='text-primary-red text-5xl'>
            <HiTrash />
          </div>
          <p className='font-semibold text-2xl'>Delete blog</p>
          <p className='text-tertiary-grey text-sm w-4/5'>
            Are you sure you want to delete this blog post?
          </p>
        </div>

        <div className='w-full'>
          <Button
            onClick={() =>
              dispatch(setDeleteBlogStage(DELETE_BLOG_SUCCESS_STAGE))
            }
            variant='danger'
            className='text-center justify-center rounded-[8px] py-4 w-full font-semibold mt-10'
          >
            Yes, delete
          </Button>

          <Button
            onClick={close}
            variant='ghost'
            className='text-center justify-center rounded-[8px] py-4 w-full font-semibold mt-10'
          >
            Cancel
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
