'use client';

import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

import useDisclosure from '@/hooks/useDisclosure';

import Button from '@/components/buttons/Button';
import { PaddedContainer } from '@/components/lib';

import PostsContainer from '@/app/blogs/(create-edit)/_components/PostsContainer';
import PostSuccessModal from '@/app/blogs/(create-edit)/_components/PostSuccessModal';

export default function Page() {
  const postSuccessModal = useDisclosure();

  return (
    <PaddedContainer isScrollable>
      <Link
        href='/blogs'
        className='flex items-center gap-2 text-primary-red text-sm font-medium'
      >
        <IoArrowBack />
        Back
      </Link>

      <div className='flex items-center w-full justify-between mt-6 mb-12'>
        <h1 className='font-bold text-4xl'>Create new blog post</h1>
        <div className='flex items-center gap-[14px]'>
          <Button
            variant='light'
            className='!p-3 bg-white text-primary-black border rounded-[8px] border-light-grey'
          >
            Save as draft
          </Button>
          <Button
            className='py-3 px-6 rounded-[8px]'
            onClick={postSuccessModal.open}
          >
            Upload
          </Button>
        </div>
      </div>

      <PostsContainer />

      <PostSuccessModal
        isOpen={postSuccessModal.isOpen}
        handleOpenModal={postSuccessModal.open}
        handleCloseModal={postSuccessModal.close}
      />
    </PaddedContainer>
  );
}
