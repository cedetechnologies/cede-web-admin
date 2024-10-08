'use client';

import Link from 'next/link';
import { BsPeopleFill } from 'react-icons/bs';
import { FaCircleCheck } from 'react-icons/fa6';
import { IoArrowBack } from 'react-icons/io5';

import useDisclosure from '@/hooks/useDisclosure';

import Button from '@/components/buttons/Button';
import Phone from '@/components/input/input-phone';
import { PaddedContainer } from '@/components/lib';

import VerificationApproved from '@/app/(authenticated-layout)/verification/[verificationId]/_components/VerificationApproved';
import VerificationFile from '@/app/(authenticated-layout)/verification/[verificationId]/_components/VerificationFile';
import VerificationInput from '@/app/(authenticated-layout)/verification/[verificationId]/_components/VerificationInput';
import VerificationRejected from '@/app/(authenticated-layout)/verification/[verificationId]/_components/VerificationRejected';

export default function Page() {
  const approveModal = useDisclosure();
  const rejectModal = useDisclosure();

  return (
    <PaddedContainer isScrollable>
      <Link
        href='/verification'
        className='flex items-center gap-2 text-primary font-medium text-xl mb-8'
      >
        <IoArrowBack />
        Back
      </Link>

      <div className='flex items-center gap-2'>
        <BsPeopleFill className='text-4xl text-primary-pink' />
        <h1 className='font-bold text-4xl'>Odell Beckham</h1>

        <p className='w-fit rounded-[4px] px-5 text-sm py-[2px] bg-secondary-yellow text-primary-yellow font-medium'>
          Pending
        </p>
      </div>

      <p className='my-7 text-tertiary-grey font-semibold'>
        PERSONAL INFORMATION
      </p>

      <div className='bg-white rounded-[8px] py-10 px-7 flex flex-col gap-4'>
        <div className='flex items-center gap-4'>
          <VerificationInput id='first name' label='First name' value='Odell' />
          <VerificationInput id='last name' label='Last name' value='Backham' />
        </div>
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
          value='odell@g.com'
        />
        <VerificationInput
          id='dob'
          label='Date of Birth'
          type='date'
          value='2024-09-01'
        />
        <VerificationFile title='Valid ID' fileName='Address.pdf' />
        <VerificationInput id='referral' label='Referral code' value='nil' />
      </div>

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

      <VerificationApproved
        isOpen={approveModal.isOpen}
        handleCloseModal={approveModal.close}
        handleOpenModal={approveModal.open}
        type='individual'
      />
      <VerificationRejected
        isOpen={rejectModal.isOpen}
        handleCloseModal={rejectModal.close}
        handleOpenModal={rejectModal.open}
        type='individual'
      />
    </PaddedContainer>
  );
}
