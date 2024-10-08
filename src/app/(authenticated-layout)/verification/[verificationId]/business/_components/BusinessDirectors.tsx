import { motion } from 'framer-motion';

import VerificationFile from '@/app/(authenticated-layout)/verification/[verificationId]/_components/VerificationFile';
import VerificationInput from '@/app/(authenticated-layout)/verification/[verificationId]/_components/VerificationInput';
import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';

export default function BusinessDirectors() {
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
          id='director name'
          label="Director's Full Name"
          value='Adejumoke Richard'
        />
        <VerificationFile title='Director ID' fileName='Address.pdf' />

        <VerificationFile
          title='Proof of director address'
          fileName='Address.pdf'
        />
      </div>
    </motion.div>
  );
}
