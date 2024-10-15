'use client';

import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FcCancel } from 'react-icons/fc';
import { LuImagePlus } from 'react-icons/lu';

import IconButton from '@/components/buttons/IconButton';

export default function BlogImage() {
  // const { imagePreview, setImagePreview, formik } = useContext(PostContext);
  // const postTitle = formik.values[CreatePostIds.Title];

  // const imageFile = formik.values[CreatePostIds.Image];
  // const imageErrorMsg = formik.errors[CreatePostIds.Image];

  const [imagePreview, setImagePreview] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    if (!imageFile || typeof imageFile === 'string') return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };

    reader.readAsDataURL(imageFile as unknown as Blob);
  }, [imageFile, setImagePreview]);

  function removePicture() {
    setImagePreview('');
    setImageFile(null);
    // formik.setFieldValue(CreatePostIds.Image, '');
  }

  return (
    <div>
      <div className=''>
        <div className='text-sm'>Blog image</div>
        <div className='flex flex-col gap-6 p-6'>
          <input
            type='file'
            name='featured-image'
            id='featured-image'
            accept='image/*'
            onChange={(e) => {
              // formik.setFieldValue(
              //   CreatePostIds.Image,
              //   e?.target?.files && e.target.files[0]
              // );
              setImageFile(e?.target?.files && e.target.files[0]);
            }}
            hidden
          />
          {!imageFile && !imagePreview && (
            <label
              htmlFor='featured-image'
              className='cursor-pointer flex flex-col items-center'
            >
              <div className='flex items-center justify-center w-10 h-10 rounded-[38px] bg-[#F5F5F5] text-[20px] text-light-grey'>
                <LuImagePlus />
              </div>
              <p className='mt-3 mb-1 text-sm font-medium'>
                Click to <span className='text-primary'>upload</span> file
              </p>
              <p className='text-xs text-tertiary-grey'>
                PNG, JPG or PDF (max. 5mb)
              </p>
            </label>
          )}

          {imageFile && imagePreview && (
            <>
              <Image
                src={imagePreview}
                alt='postTitle'
                width={208}
                height={208}
                className='h-full w-full'
              />
              <div className='flex items-start justify-between'>
                <div className='flex flex-col gap-[2px] font-inter text-sm'>
                  <p>{imageFile.name}</p>
                  <p className='text-[#636363]'>
                    {(imageFile.size / (1024 * 1024)).toFixed(2)} mb
                  </p>
                </div>
                <IconButton
                  className='text-secondary cursor-pointer font-semibold underline'
                  icon={FcCancel}
                  onClick={removePicture}
                  variant='ghost'
                />
              </div>
            </>
          )}
        </div>
      </div>
      <AnimatePresence>
        {/* {imageErrorMsg && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            className='pl-1 pt-1 text-xs font-semibold text-red-300'
          >
            {imageErrorMsg}
          </motion.div>
        )} */}
      </AnimatePresence>
    </div>
  );
}
