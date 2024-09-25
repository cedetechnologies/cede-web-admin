import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const FileInput = ({
  id,
  label,
  onChange,
  multiple,
  type,
  image,
  error,
}: {
  id: string;
  label?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (e: any) => void;
  multiple?: boolean;
  type: 'profile' | 'file';
  image?: string | undefined;
  error?: string;
}) => {
  return (
    <>
      {label ? (
        <p className='mb-2 text-[14px] font-medium text-[#1B1C1E99] md:text-sm lg:text-[14px]'>
          {label}
        </p>
      ) : null}
      {type === 'file' ? (
        <div className='rounded-lg border border-[#E4E7EC] bg-[#F2F4F7] px-3 py-5'>
          <label htmlFor={id}>
            <input
              type='file'
              id={id}
              className='hidden'
              accept='image/*'
              multiple={multiple}
              onChange={onChange}
            />
            <div className='flex flex-col items-center justify-center gap-4 py-2 '>
              <div className='rounded-full bg-transparent'>
                <Image
                  src='/svg/file-input.svg'
                  width={20}
                  height={20}
                  alt='upload'
                />
              </div>
              <div className='flex flex-col gap-2 text-center text-[14px] font-medium text-[#667085]'>
                <p className=' text-[#1D2939] '>
                  Click or Drag a file here to upload{' '}
                </p>
                <p>
                  Please only use the following formats: .pdf, .doc, .docx,
                  .rtf, .txt.
                </p>
                <p>Max file size: 5MBs [Max files: 1]</p>
              </div>
            </div>
          </label>
        </div>
      ) : (
        <div className='flex gap-4 '>
          <label className='flex items-start cursor-pointer' htmlFor={id}>
            <div className='rounded-full border border-[#E4E7EC] bg-[#F2F4F7] '>
              <div>
                <input
                  type='file'
                  id={id}
                  className='hidden'
                  accept='image/*'
                  multiple={multiple}
                  onChange={onChange}
                />
                <div className='flex h-[200px] w-[200px] items-center justify-center rounded-[100%] bg-transparent'>
                  {!image && (
                    <Image
                      src='/svg/profile-input.svg'
                      width={40}
                      height={40}
                      alt='upload'
                    />
                  )}
                  {image && (
                    <Image
                      src={image}
                      width={140}
                      height={140}
                      alt='upload'
                      className='h-[90%] w-[90%] rounded-[100%] object-cover'
                    />
                  )}
                </div>
              </div>
            </div>
          </label>
          <div className='flex flex-col items-center justify-center gap-4 py-2 '>
            <div className='flex flex-col gap-2 text-left text-[14px] font-medium text-[#667085]'>
              <p className=' text-[#1D2939] '>
                Click or Drag a file here to upload{' '}
              </p>
              <p>Please only use the following formats: .jpg, .png, .jpeg.</p>
              <p>Max file size: 5MBs [Max files: 1]</p>
            </div>
          </div>
        </div>
      )}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            className='pl-1 pt-1 text-xs font-semibold text-red-300'
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FileInput;
