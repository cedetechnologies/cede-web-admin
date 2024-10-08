import { motion } from 'framer-motion';

import useDisclosure from '@/hooks/useDisclosure';

import Button from '@/components/buttons/Button';

import VerificationApproved from '@/app/(authenticated-layout)/verification/[verificationId]/_components/VerificationApproved';
import VerificationFile from '@/app/(authenticated-layout)/verification/[verificationId]/_components/VerificationFile';
import VerificationInput from '@/app/(authenticated-layout)/verification/[verificationId]/_components/VerificationInput';
import VerificationRejected from '@/app/(authenticated-layout)/verification/[verificationId]/_components/VerificationRejected';
import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';

export default function BusinessShareholders() {
  const approveModal = useDisclosure();
  const rejectModal = useDisclosure();

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
          id='shareholder name'
          label="Shareholder's Full Name"
          value='Adejumoke Richard'
        />
        <VerificationFile title='Shareholder ID' fileName='Address.pdf' />

        <div className='flex gap-8 mt-8 items-center'>
          <Button
            onClick={approveModal.open}
            className='text-center justify-center rounded-[8px] py-4 w-full font-semibold'
          >
            Approve
          </Button>
          <Button
            onClick={rejectModal.open}
            className='text-center justify-center rounded-[8px] py-4 w-full font-semibold'
            variant='dark'
          >
            Reject
          </Button>
        </div>
      </div>

      <VerificationApproved
        isOpen={approveModal.isOpen}
        handleCloseModal={approveModal.close}
        handleOpenModal={approveModal.open}
        type='business'
      />
      <VerificationRejected
        isOpen={rejectModal.isOpen}
        handleCloseModal={rejectModal.close}
        handleOpenModal={rejectModal.open}
        type='business'
      />
    </motion.div>
  );
}
