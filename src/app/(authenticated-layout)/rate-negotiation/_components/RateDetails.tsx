import { motion } from 'framer-motion';
import { IoIosArrowRoundUp, IoMdClose } from 'react-icons/io';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';

import { useAppDispatch } from '@/store';

import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';
import {
  RATE_DETAILS_APPROVED_STAGE,
  RATE_DETAILS_COUNTER_STAGE,
  setRateDetailsStage,
} from '@/slices/rateDetails';

type Props = {
  close: () => void;
};

export default function RateDetails({ close }: Props) {
  const dispatch = useAppDispatch();

  function proceedToAccept() {
    dispatch(setRateDetailsStage(RATE_DETAILS_APPROVED_STAGE));
  }

  function proceedToCounter() {
    dispatch(setRateDetailsStage(RATE_DETAILS_COUNTER_STAGE));
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
            <p className='font-inter font-medium text-sm'>You send</p>
            <p className='text-sm font-inter text-light-grey font-medium'>
              They receive
            </p>
          </div>
        </div>
        <div className='flex flex-col items-end gap-3 font-semibold text-xl'>
          <p>50,000 USD</p>
          <p className='text-light-grey'>13,000,000 GHC</p>
        </div>
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
        <div className='flex items-center justify-between text-primary'>
          <p>Current rate</p>
          <p>1,500 GHC</p>
        </div>
        <div className='flex items-center justify-between text-primary-pink'>
          <p>Requested rate</p>
          <p>1,200 GHC</p>
        </div>
        <div className='flex items-center justify-between text-[#2E2E2E]'>
          <p>Justification</p>
          <p>For the family</p>
        </div>
      </div>

      <div className='flex gap-8 items-center'>
        <Button
          onClick={proceedToAccept}
          className='text-center justify-center rounded-[8px] py-4 w-full font-semibold'
        >
          Approve
        </Button>
        <Button
          onClick={proceedToCounter}
          className='text-center justify-center rounded-[8px] py-4 w-full font-semibold'
          variant='danger'
        >
          Reject
        </Button>
      </div>
    </motion.div>
  );
}
