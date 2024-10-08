import { motion } from 'framer-motion';
import { FaCircleCheck } from 'react-icons/fa6';

import Phone from '@/components/input/input-phone';

import VerificationFile from '@/app/(authenticated-layout)/verification/[verificationId]/_components/VerificationFile';
import VerificationInput from '@/app/(authenticated-layout)/verification/[verificationId]/_components/VerificationInput';
import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';

export default function BusinessPrimaryDetails() {
  return (
    <motion.div
      variants={multiStepVariants}
      initial='initial'
      exit='exit'
      animate='animate'
      className='flex flex-col h-full gap-[30px]'
    >
      <div className='bg-white rounded-[8px] py-10 px-7 flex flex-col gap-4'>
        <VerificationInput
          id='business name'
          label='Business name'
          value='Nest Grant Incorporated'
        />
        <VerificationInput
          id='registration number'
          label='Registration number'
          value='00000000000'
        />

        <Phone
          id='phone'
          label='Phone number'
          disabled
          value='+1234747584837'
          handleChange={() => {
            //
          }}
          inputClassName='!text-[#BDBDBD]'
          endIcon={FaCircleCheck}
          iconClassName='text-primary-green text-xl'
        />
        <VerificationInput
          id='email'
          label='Email address'
          value='info@nestgrant.com'
        />
        <VerificationInput
          id='location'
          label='Business Location'
          value='United States'
        />
        <VerificationInput id='referral' label='Referral code' value='nil' />
      </div>

      <p className='uppercase font-semibold text-tertiary-grey'>
        AUTHORIZATION INFORMATION
      </p>

      <div className='bg-white rounded-[8px] py-10 px-7 flex flex-col gap-4'>
        <VerificationInput
          id='full name'
          label='Full name'
          value='Adejumoke Richard'
        />
        <VerificationInput
          id='role'
          label='Role'
          value='Chief Operating Officer'
        />

        <VerificationFile title='Work ID' fileName='Address.pdf' />
      </div>
    </motion.div>
  );
}
