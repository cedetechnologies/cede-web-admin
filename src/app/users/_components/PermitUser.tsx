'use client';

import { motion } from 'framer-motion';
import { BiSolidRocket } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';

import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';

type Props = {
  permitUserSuccess: () => void;
  close: () => void;
};

export default function PermitUser({ permitUserSuccess, close }: Props) {
  return (
    <motion.div
      variants={multiStepVariants}
      initial='initial'
      exit='exit'
      animate='animate'
      className='h-full w-full bg-white flex flex-col'
    >
      <div className='flex justify-end mb-7'>
        <IconButton
          variant='ghost'
          icon={IoMdClose}
          onClick={close}
          className='text-2xl'
        />
      </div>

      <div className='mt-5 flex flex-col items-center gap-2 text-center'>
        <BiSolidRocket className='text-5xl text-neutral-green' />

        <p className='text-2xl font-semibold'>Permit User</p>
        <div className='text-sm text-center w-3/5 text-tertiary-grey'>
          <p>
            Permitting this user will activate this user’s account until you
            undo this action.
          </p>
        </div>
      </div>

      <Button
        type='submit'
        onClick={permitUserSuccess}
        variant='ghost'
        className='text-center bg-neutral-green text-white justify-center rounded-[8px] py-4 w-full font-semibold mt-10'
      >
        Yes, permit
      </Button>

      <Button
        onClick={close}
        variant='ghost'
        className='text-center justify-center rounded-[8px] py-4 w-full font-semibold mt-10'
      >
        Cancel
      </Button>
    </motion.div>
  );
}
