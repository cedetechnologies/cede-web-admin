import { IoMdClose } from 'react-icons/io';
import { MdCancel } from 'react-icons/md';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import { MultiLine, Select } from '@/components/input';
import Modal, { ModalProps } from '@/components/modal';

type Props = ModalProps & {
  type: 'individual' | 'business';
};

const reasons = [
  {
    label: 'Expired ID',
    value: 'Expired ID',
  },
  {
    label: 'Incorrect phone number',
    value: 'Incorrect phone number',
  },
  { label: 'Information mismatch', value: 'Information mismatch' },
  {
    label: 'Others',
    value: 'others',
  },
];

export default function VerificationRejected({ type, ...props }: Props) {
  return (
    <Modal {...props} className='h-auto w-4/5 lg:w-2/5 rounded-[16px]'>
      <section className='h-full w-full bg-bg-grey p-10 flex flex-col'>
        <div className='flex justify-end mb-4'>
          <IconButton
            variant='ghost'
            icon={IoMdClose}
            onClick={props.handleCloseModal}
            className='text-2xl'
          />
        </div>

        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-1 items-center'>
            <MdCancel className='text-[50px] text-primary-red' />

            <div className='text-center flex flex-col items-center gap-1'>
              <p className='font-semibold text-2xl'>
                {type === 'individual' ? 'KYC' : 'KYB'} verification rejected
              </p>
              <p className='text-sm'>
                This {type === 'individual' ? 'user' : 'business'} can not
                perform transactions and will be notified{' '}
              </p>
            </div>
          </div>

          <Select id='reason' label='Specific reasons' options={reasons} />

          <MultiLine id='additional' label='Additional information' rows={8} />

          <Button
            onClick={close}
            className='text-center justify-center w-full mx-auto rounded-[8px] py-4 mb-10 font-semibold'
            variant='dark'
          >
            Notify user
          </Button>
        </div>
      </section>
    </Modal>
  );
}
