import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { RiFilePaper2Fill } from 'react-icons/ri';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import { MultiLine } from '@/components/input';

import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';

type Props = {
  close: () => void;
};

export default function TransactionRequestDocument({ close }: Props) {
  return (
    <motion.form
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
        <RiFilePaper2Fill className='text-[50px] text-primary-pink' />

        <div className='text-center w-4/5 flex flex-col items-center gap-1'>
          <p className='font-semibold text-2xl'>Document request</p>
          <MultiLine
            id='reason'
            placeholder='Request details...'
            rows={5}
            inputClassName='placeholder:text-tertiary-grey'
            containerClassName='w-full'
          />
        </div>

        <Button
          onClick={close}
          className='text-center justify-center w-4/5 mx-auto rounded-[8px] py-4 mt-[14px] mb-10 font-semibold'
          variant='dark'
        >
          Send request
        </Button>
      </div>
    </motion.form>
  );
}
