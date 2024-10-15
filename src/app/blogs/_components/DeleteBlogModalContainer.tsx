'use client';

import { AnimatePresence } from 'framer-motion';

import Modal, { ModalProps } from '@/components/modal';

import { useAppDispatch, useAppSelector } from '@/store';

import DeleteBlog from '@/app/blogs/_components/DeleteBlog';
import SuccessModal from '@/app/users/_components/SuccessModal';
import {
  DELETE_BLOG_DELETE_STAGE,
  DELETE_BLOG_SUCCESS_STAGE,
  resetDeleteBlogStage,
} from '@/slices/deleteBlogSlice';

export default function DeleteBlogModalContainer({ ...props }: ModalProps) {
  const deleteBlogStage = useAppSelector((state) => state.deleteBlog.stage);

  const dispatch = useAppDispatch();

  function resetDeleteBlogAfterClose() {
    dispatch(resetDeleteBlogStage());
  }

  return (
    <>
      <Modal
        {...props}
        onAfterClose={resetDeleteBlogAfterClose}
        className='h-auto w-4/5 lg:w-2/5 rounded-[16px]'
      >
        <section className='h-full w-full bg-bg-grey p-10 flex flex-col'>
          <AnimatePresence mode='wait' initial={false}>
            {deleteBlogStage === DELETE_BLOG_DELETE_STAGE && (
              <DeleteBlog close={props.handleCloseModal} />
            )}
            {deleteBlogStage === DELETE_BLOG_SUCCESS_STAGE && (
              <SuccessModal
                close={props.handleCloseModal}
                caption='Blog post has been deleted.'
              />
            )}
          </AnimatePresence>
        </section>
      </Modal>
    </>
  );
}
