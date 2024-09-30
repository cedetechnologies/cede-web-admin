'use client';

import { IoMdClose } from 'react-icons/io';
import { RiLogoutBoxFill } from 'react-icons/ri';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import Modal, { ModalProps } from '@/components/modal';

export default function LogoutModal({ ...props }: ModalProps) {
  return (
    <Modal {...props} className='h-auto w-4/5 lg:w-1/3 rounded-[16px]'>
      <section className='h-full w-full bg-white p-10 flex flex-col'>
        <div className='flex justify-end mb-7'>
          <IconButton
            variant='ghost'
            icon={IoMdClose}
            onClick={props.handleCloseModal}
            className='text-2xl'
          />
        </div>

        <div className='mt-5 flex flex-col items-center gap-2 text-center'>
          <RiLogoutBoxFill className='text-5xl text-primary-red' />

          <p className='text-2xl font-semibold'>Logout</p>
          <div className='text-sm text-tertiary-grey'>
            <p>Are you sure you will like to log out from</p>
            <p>your account?</p>
          </div>
        </div>

        <Button
          onClick={props.handleCloseModal}
          variant='danger'
          className='text-center justify-center rounded-[8px] py-4 w-full font-semibold mt-10'
        >
          Yes, logout
        </Button>

        <Button
          onClick={props.handleCloseModal}
          variant='ghost'
          className='text-center justify-center rounded-[8px] py-4 w-full font-semibold mt-10'
        >
          Cancel
        </Button>
      </section>
    </Modal>
  );
}
