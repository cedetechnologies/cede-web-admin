import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import { Input } from '@/components/input';

import { useAppDispatch } from '@/store';

import ChangeCurrencyInput from '@/app/(authenticated-layout)/transactions/_components/ChangeCurrencyInput';
import { CURRENT_RATE_QUERY_KEY } from '@/app/(authenticated-layout)/transactions/rates/_components/CurrentRate';
import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';
import { mockCurrencies } from '@/constant/appConstants';
import {
  EDIT_RATE_SUCCESS_STAGE,
  setEditExchangeRateState,
} from '@/slices/editExchangeRateSlice';

type Props = {
  close: () => void;
};

export default function EditRate({ close }: Props) {
  const dispatch = useAppDispatch();

  function proceedToSuccess() {
    dispatch(setEditExchangeRateState(EDIT_RATE_SUCCESS_STAGE));
  }

  return (
    <motion.div
      variants={multiStepVariants}
      initial='initial'
      exit='exit'
      animate='animate'
      className='flex flex-col h-full gap-8 justify-between'
    >
      <div className='flex justify-end mb-5'>
        <IconButton
          variant='ghost'
          icon={IoMdClose}
          onClick={close}
          className='text-2xl'
        />
      </div>

      <div className='mb-10 w-4/5 mx-auto flex flex-col items-center gap-10'>
        <ChangeCurrencyInput
          currencies={mockCurrencies}
          paramKey={CURRENT_RATE_QUERY_KEY}
          value='N1,500'
          defaultCurrencyValue='CAD'
          inputLabel='Current Market Value'
        />

        <ChangeCurrencyInput
          currencies={mockCurrencies}
          paramKey={CURRENT_RATE_QUERY_KEY}
          value='N1,750'
          defaultCurrencyValue='NGN'
          inputLabel='Current rate'
        />

        <Input id='new-rate' label='Enter new rate' />
      </div>

      <Button
        onClick={proceedToSuccess}
        className='mb-4 w-4/5 mx-auto py-4 rounded-lg text-center justify-center'
      >
        Confirm
      </Button>
    </motion.div>
  );
}
