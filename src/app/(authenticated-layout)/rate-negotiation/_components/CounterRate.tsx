import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import { Input } from '@/components/input';

import { useAppDispatch } from '@/store';

import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';
import {
  RATE_DETAILS_COUNTER_APPROVED_STAGE,
  setRateDetailsStage,
} from '@/slices/rateDetails';

type Props = {
  close: () => void;
};

export default function CounterRate({ close }: Props) {
  const dispatch = useAppDispatch();

  function proceedToApprove() {
    dispatch(setRateDetailsStage(RATE_DETAILS_COUNTER_APPROVED_STAGE));
  }

  return (
    <motion.div
      variants={multiStepVariants}
      initial='initial'
      exit='exit'
      animate='animate'
      className='flex flex-col h-full gap-8 justify-between'
    >
      <div className='flex justify-end'>
        <IconButton
          variant='ghost'
          icon={IoMdClose}
          onClick={close}
          className='text-2xl'
        />
      </div>

      <Input id='counter' inputMode='numeric' label='Counter rate' />

      <div className='flex gap-8 items-center'>
        <Button
          onClick={proceedToApprove}
          className='text-center justify-center rounded-[8px] py-4 w-full font-semibold'
        >
          Send
        </Button>
      </div>
    </motion.div>
  );
}
