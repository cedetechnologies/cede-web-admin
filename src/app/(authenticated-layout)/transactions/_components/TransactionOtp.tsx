import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { IoMdClose } from 'react-icons/io';
import OTPInput from 'react-otp-input';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';

import { useAppDispatch } from '@/store';

import CountdownTimer from '@/app/(authentication-layout)/login/_components/CountdownTimer';
import { LoginIds } from '@/app/(authentication-layout)/login/_utils/loginConstants';
import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';
import useLoginStage2 from '@/app/(authentication-layout)/login/_utils/useLoginStage2';
import {
  setTransactionDetailsStage,
  TRANSACTION_DETAILS_REFUND_APPROVED_STAGE,
} from '@/slices/transactionDetailsSlice';
import { handleErrors } from '@/utils/error';

type Props = {
  close: () => void;
};

export default function TransactionOtp({ close }: Props) {
  const [timer, setTimer] = useState(60);

  const dispatch = useAppDispatch();
  const { formik, handleChange } = useLoginStage2();

  async function resendVerificationCode() {
    try {
      startTimer();
      toast.success(
        'Please check the email attached to this Community ID for the OTP'
      );
    } catch (e) {
      handleErrors(e);
    } finally {
      //
    }
  }

  function resetTimer() {
    setTimer(60);
  }

  function startTimer() {
    // clearInterval(interval);
    resetTimer();
    // interval = setInterval(() => {
    //   setTimer((time) => (time > 0 ? time - 1 : time));
    // }, 1000);
  }

  function proceedToRefundSuccess() {
    dispatch(
      setTransactionDetailsStage(TRANSACTION_DETAILS_REFUND_APPROVED_STAGE)
    );
  }

  return (
    <motion.form
      variants={multiStepVariants}
      initial='initial'
      exit='exit'
      animate='animate'
      onSubmit={formik.handleSubmit}
      className='flex flex-col gap-6 justify-between h-full'
    >
      <div className='flex justify-end mb-10'>
        <IconButton
          variant='ghost'
          icon={IoMdClose}
          onClick={close}
          className='text-2xl'
        />
      </div>

      <div className='flex flex-col items-center'>
        <p className='text-3xl font-semibold'>Enter OTP</p>
        <p className='text-tertiary-grey text-sm mt-3'>
          Enter the 6-digit code sent to your email
        </p>
      </div>

      <OTPInput
        value={formik.values[LoginIds.Otp]}
        onChange={handleChange}
        renderInput={(props) => (
          <input
            {...props}
            className='focus:ring-primary h-[70px] w-[50px] px-[5] text-2xl font-semibold rounded-lg text-center'
            style={{
              width: '100%',
              border: '1px solid #D1D1D2',
            }}
          />
        )}
        numInputs={6}
        containerStyle={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          // gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
          gap: '1.5rem',
        }}
        shouldAutoFocus={true}
        placeholder='••••••'
      />

      <div className='flex items-center justify-between'>
        <Button
          onClick={resendVerificationCode}
          disabled={timer != 60 && timer != 0}
          className='disabled:text-[#BDBDBD] text-black w-fit border-0 bg-transparent text-sm font-bold'
        >
          Resend code
        </Button>
        <CountdownTimer timer={timer} setTimer={setTimer} />
      </div>

      <Button
        type='submit'
        onClick={proceedToRefundSuccess}
        className='text-center justify-center rounded-[8px] py-4 mt-auto'
        disabled={!formik.isValid}
      >
        Proceed
      </Button>
    </motion.form>
  );
}
