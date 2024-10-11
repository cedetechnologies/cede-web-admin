import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { IoCheckmarkOutline } from 'react-icons/io5';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';

import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';

type Props = {
  caption: string;
  close: () => void;
};

export default function SuccessModal({ close, caption }: Props) {
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

      <div className='flex flex-col gap-10 items-center'>
        <div className='w-[50px] h-[50px] flex items-center justify-center rounded-[100%] bg-primary-green text-white text-4xl'>
          <IoCheckmarkOutline />
        </div>

        <div className='text-center flex flex-col items-center gap-[10px]'>
          <p className='font-semibold text-2xl'>Success!</p>
          <p className='text-tertiary-grey text-sm w-4/5'>{caption}</p>
        </div>

        <Button
          onClick={close}
          className='text-center justify-center rounded-[8px] py-4 w-full font-semibold'
          variant='dark'
        >
          Got it!
        </Button>
      </div>
    </motion.div>
  );
}
