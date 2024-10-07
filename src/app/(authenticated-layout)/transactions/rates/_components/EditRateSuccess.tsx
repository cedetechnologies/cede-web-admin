import { motion } from 'framer-motion';
import { GoCheckCircleFill } from 'react-icons/go';
import { IoMdClose } from 'react-icons/io';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';

import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';

type Props = {
  close: () => void;
};

export default function EditRateSuccess({ close }: Props) {
  return (
    <motion.div
      variants={multiStepVariants}
      initial='initial'
      exit='exit'
      animate='animate'
      className='flex flex-col h-full gap-8 justify-between'
    >
      <div className='flex justify-end mb-10'>
        <IconButton
          variant='ghost'
          icon={IoMdClose}
          onClick={close}
          className='text-2xl'
        />
      </div>

      <div className='flex flex-col gap-1 items-center'>
        <GoCheckCircleFill className='text-[50px] text-primary-green' />

        <div className='text-center flex flex-col items-center gap-1'>
          <p className='font-semibold text-2xl'>Rate Change Success!</p>
        </div>

        <Button
          onClick={close}
          className='text-center justify-center w-4/5 mx-auto rounded-[8px] py-4 mt-[14px] mb-10 font-semibold'
          variant='dark'
        >
          Got it!
        </Button>
      </div>
    </motion.div>
  );
}
