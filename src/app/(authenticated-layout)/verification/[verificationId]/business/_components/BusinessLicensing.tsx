import { motion } from 'framer-motion';

import VerificationFile from '@/app/(authenticated-layout)/verification/[verificationId]/_components/VerificationFile';
import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';

export default function BusinessLicensing() {
  return (
    <motion.div
      variants={multiStepVariants}
      initial='initial'
      exit='exit'
      animate='animate'
      className='flex flex-col h-full gap-[30px]'
    >
      <div className='bg-white rounded-[8px] py-10 px-7 flex flex-col gap-4'>
        <VerificationFile
          title='Registration Certifixate'
          fileName='Address.pdf'
        />
        <VerificationFile
          title='Operating Certificate (optional)'
          fileName='Address.pdf'
        />
        <VerificationFile title='Proof of address' fileName='Address.pdf' />
      </div>
    </motion.div>
  );
}
