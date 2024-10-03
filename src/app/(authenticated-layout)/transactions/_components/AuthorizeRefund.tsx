import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';

import { useAppDispatch } from '@/store';

import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';
import {
  setTransactionDetailsStage,
  TRANSACTION_DETAILS_OTP_STAGE,
} from '@/slices/transactionDetailsSlice';

type Props = {
  close: () => void;
};

export default function AuthorizeRefund({ close }: Props) {
  const dispatch = useAppDispatch();

  function proceedToTransactionOTP() {
    dispatch(setTransactionDetailsStage(TRANSACTION_DETAILS_OTP_STAGE));
  }

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
        <div className='text-center flex flex-col items-center gap-1'>
          <p className='font-semibold text-2xl'>Authorize Refund</p>
          <p className='text-sm'>A partial refund has been initiated</p>
        </div>

        <Button
          onClick={proceedToTransactionOTP}
          className='text-center justify-center w-4/5 mx-auto rounded-[8px] py-4 mt-[14px] mb-10 font-semibold'
        >
          Proceed
        </Button>
      </div>
    </motion.div>
  );
}
