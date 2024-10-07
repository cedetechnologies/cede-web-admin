import { motion } from 'framer-motion';
import { FaKey } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';

import { useAppDispatch } from '@/store';

import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';
import {
  setTransactionDetailsStage,
  TRANSACTION_DETAILS_APPROVE_STAGE,
  TRANSACTION_DETAILS_PENDING_STAGE,
  TRANSACTION_DETAILS_REFUND_STAGE,
  TRANSACTION_DETAILS_REQUEST_STAGE,
} from '@/slices/transactionDetailsSlice';

type Props = {
  close: () => void;
};

export default function ResolveMenu({ close }: Props) {
  const dispatch = useAppDispatch();

  function proceedToPending() {
    dispatch(setTransactionDetailsStage(TRANSACTION_DETAILS_PENDING_STAGE));
  }

  function proceedToApprove() {
    dispatch(setTransactionDetailsStage(TRANSACTION_DETAILS_APPROVE_STAGE));
  }

  function proceedToRequest() {
    dispatch(setTransactionDetailsStage(TRANSACTION_DETAILS_REQUEST_STAGE));
  }

  function proceedToRefund() {
    dispatch(setTransactionDetailsStage(TRANSACTION_DETAILS_REFUND_STAGE));
  }

  return (
    <motion.div
      variants={multiStepVariants}
      initial='initial'
      exit='exit'
      animate='animate'
      className='flex flex-col h-full justify-between'
    >
      <div className='flex justify-end mb-14'>
        <IconButton
          variant='ghost'
          icon={IoMdClose}
          onClick={close}
          className='text-2xl'
        />
      </div>

      <div className='flex flex-col items-center gap-2'>
        <div className='w-[50px] h-[50px] flex items-center justify-center bg-primary-black rounded-[10px] text-white text-2xl'>
          <FaKey />
        </div>
        <p className='font-semibold text-2xl'>Resolve Transaction</p>
      </div>

      <div className='mt-8 flex flex-col gap-5 mx-auto w-4/5'>
        <Button
          className='w-full justify-center text-center bg-white rounded-[8px] !border-transparent hover:!border hover:!border-tertiary-pink py-4 font-semibold'
          variant='light'
          onClick={proceedToPending}
        >
          Retry transaction
        </Button>
        <Button
          className='w-full justify-center text-center bg-white !border-transparent hover:!border hover:!border-tertiary-pink rounded-[8px] py-4 font-semibold'
          variant='light'
          onClick={proceedToApprove}
        >
          Approve
        </Button>
        <Button
          className='w-full justify-center text-center bg-white !border-transparent hover:!border hover:!border-tertiary-pink rounded-[8px] py-4 font-semibold'
          variant='light'
          onClick={proceedToRequest}
        >
          Request document
        </Button>
        <Button
          className='w-full justify-center text-center bg-white !border-transparent hover:!border hover:!border-tertiary-pink rounded-[8px] py-4 font-semibold'
          variant='light'
          onClick={proceedToRefund}
        >
          Refund
        </Button>
      </div>
    </motion.div>
  );
}
