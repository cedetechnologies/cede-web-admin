import { motion } from 'framer-motion';
import { IoIosArrowRoundUp, IoMdClose } from 'react-icons/io';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';

import { useAppDispatch } from '@/store';

import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';
import {
  setTransactionDetailsStage,
  TRANSACTION_DETAILS_MENU_STAGE,
} from '@/slices/transactionDetailsSlice';

type Props = {
  close: () => void;
};

export default function TransactionDetails({ close }: Props) {
  const dispatch = useAppDispatch();

  function proceedToResolveMenu() {
    dispatch(setTransactionDetailsStage(TRANSACTION_DETAILS_MENU_STAGE));
  }

  return (
    <motion.div
      variants={multiStepVariants}
      initial='initial'
      exit='exit'
      animate='animate'
      className='flex flex-col h-full gap-8 justify-between'
    >
      <div className='flex justify-between'>
        <p className='text-2xl font-semibold'>Transaction Details</p>
        <IconButton
          variant='ghost'
          icon={IoMdClose}
          onClick={close}
          className='text-2xl'
        />
      </div>

      <div className='flex items-center justify-between rounded-[12px] border border-primary-grey py-7 px-4'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-[100%] text-black bg-primary-grey flex items-center justify-center'>
            <IoIosArrowRoundUp className='text-lg' />
          </div>
          <div className='flex flex-col gap-3'>
            <p className='text-tertiary-grey text-sm'>
              Transfer to{' '}
              <span className='font-medium font-inter text-primary-black'>
                Odell Beckham
              </span>
            </p>
            <p className='text-xs font-medium'>RECURRING</p>
          </div>
        </div>
        <p className='font-semibold text-xl'>5,000 USD</p>
      </div>

      <div className='flex flex-col gap-4 text-sm text-tertiary-grey'>
        <div className='flex items-center justify-between'>
          <p>Transfer ID</p>
          <p>1234ER546G7H7998</p>
        </div>
        <div className='flex items-center justify-between'>
          <p>Status</p>
          <p className='bg-[#FF3B301A] rounded-[4px] py-1 px-[6px] text-[#FF3B30] font-medium'>
            Failed
          </p>
        </div>
        <div className='flex items-center justify-between'>
          <p>Name</p>
          <p>Emmanuel Adeyera</p>
        </div>
        <div className='flex items-center justify-between'>
          <p>Date</p>
          <p>21/06/24 - 4:07pm</p>
        </div>
        <div className='flex items-center justify-between'>
          <p>Charges</p>
          <p>$10</p>
        </div>
        <div className='flex items-center justify-between text-[#2E2E2E]'>
          <p>Description</p>
          <p>For the family</p>
        </div>
      </div>

      <p className='text-xs font-medium text-light-grey'>RECIPIENT</p>

      <div className='flex flex-col gap-4 text-sm text-tertiary-grey'>
        <div className='flex items-center justify-between'>
          <p>Account Name</p>
          <p>Odell Backham</p>
        </div>
        <div className='flex items-center justify-between'>
          <p>Bank Name</p>
          <p>Quantico Bank</p>
        </div>
        <div className='flex items-center justify-between'>
          <p>Account Number</p>
          <p>1234567890</p>
        </div>
        <div className='flex items-center justify-between'>
          <p>Country</p>
          <p>Canada</p>
        </div>
        <div className='flex items-center justify-between text-[#2E2E2E]'>
          <p>Amount received</p>
          <p>6,000 CAD</p>
        </div>
      </div>

      <p className='text-xs font-medium text-primary-red'>REASON</p>
      <p className='text-sm font-medium text-tertiary-grey'>
        Payment gateway timeout
      </p>

      <div className='flex flex-col gap-10 items-center'>
        {/* <div className='w-[50px] h-[50px] flex items-center justify-center rounded-[100%] bg-primary-green text-white text-4xl'>
          <IoCheckmarkOutline />
        </div>

        <div className='text-center flex flex-col items-center gap-[10px]'>
          <p className='font-semibold text-2xl'>Success!</p>
        </div> */}

        <Button
          onClick={proceedToResolveMenu}
          className='text-center justify-center rounded-[8px] py-4 w-full font-semibold'
          variant='dark'
        >
          Resolve
        </Button>
      </div>
    </motion.div>
  );
}
