import { GoCheckCircleFill } from 'react-icons/go';
import { IoMdClose } from 'react-icons/io';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import Modal, { ModalProps } from '@/components/modal';

type Props = ModalProps & {
  type: 'individual' | 'business';
};

export default function VerificationApproved({ type, ...props }: Props) {
  return (
    <Modal {...props} className='h-auto w-4/5 lg:w-2/5 rounded-[16px]'>
      <section className='h-full w-full bg-bg-grey p-10 flex flex-col'>
        <div className='flex justify-end mb-10'>
          <IconButton
            variant='ghost'
            icon={IoMdClose}
            onClick={props.handleCloseModal}
            className='text-2xl'
          />
        </div>

        <div className='flex flex-col gap-1 items-center'>
          <GoCheckCircleFill className='text-[50px] text-primary-green' />

          <div className='text-center flex flex-col items-center gap-1'>
            <p className='font-semibold text-2xl'>
              {type === 'individual' ? 'KYC' : 'KYB'} verification approved
            </p>
            <p className='text-sm'>
              This {type === 'individual' ? 'user' : 'business'} can now perform
              transactions and will be notified{' '}
            </p>
          </div>

          <Button
            onClick={close}
            className='text-center justify-center w-4/5 mx-auto rounded-[8px] py-4 mt-9 mb-10 font-semibold'
            variant='dark'
          >
            Got it!
          </Button>
        </div>
      </section>
    </Modal>
  );
}
