'use client';

import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';
import { IoBusiness } from 'react-icons/io5';

import Button from '@/components/buttons/Button';
import { PaddedContainer } from '@/components/lib';

import { useAppDispatch, useAppSelector } from '@/store';

import BusinessDirectors from '@/app/(authenticated-layout)/verification/[verificationId]/business/_components/BusinessDirectors';
import BusinessLicensing from '@/app/(authenticated-layout)/verification/[verificationId]/business/_components/BusinessLicensing';
import BusinessPrimaryDetails from '@/app/(authenticated-layout)/verification/[verificationId]/business/_components/BusinessPrimaryDetails';
import BusinessShareholders from '@/app/(authenticated-layout)/verification/[verificationId]/business/_components/BusinessShareholders';
import {
  BUSINESS_VERIFICATION_DIRECTOR_DETAILS,
  BUSINESS_VERIFICATION_LICENSING_DETAILS,
  BUSINESS_VERIFICATION_PRIMARY_DETAILS,
  BUSINESS_VERIFICATION_SHAREHOLDER_DETAILS,
  setBusinessVerificationStage,
} from '@/slices/businessVerificationSlice';

export default function Page() {
  const businessVerificationStage = useAppSelector(
    (state) => state.businessVerification.stage
  );
  const router = useRouter();
  const dispatch = useAppDispatch();

  function handleBackFn() {
    if (businessVerificationStage === BUSINESS_VERIFICATION_PRIMARY_DETAILS) {
      return router.push('/verification');
    }

    if (businessVerificationStage === BUSINESS_VERIFICATION_LICENSING_DETAILS) {
      return dispatch(
        setBusinessVerificationStage(BUSINESS_VERIFICATION_PRIMARY_DETAILS)
      );
    }

    if (businessVerificationStage === BUSINESS_VERIFICATION_DIRECTOR_DETAILS) {
      return dispatch(
        setBusinessVerificationStage(BUSINESS_VERIFICATION_LICENSING_DETAILS)
      );
    }

    if (
      businessVerificationStage === BUSINESS_VERIFICATION_SHAREHOLDER_DETAILS
    ) {
      return dispatch(
        setBusinessVerificationStage(BUSINESS_VERIFICATION_DIRECTOR_DETAILS)
      );
    }
  }

  function handleNextFn() {
    if (businessVerificationStage === BUSINESS_VERIFICATION_PRIMARY_DETAILS) {
      return dispatch(
        setBusinessVerificationStage(BUSINESS_VERIFICATION_LICENSING_DETAILS)
      );
    }

    if (businessVerificationStage === BUSINESS_VERIFICATION_LICENSING_DETAILS) {
      return dispatch(
        setBusinessVerificationStage(BUSINESS_VERIFICATION_DIRECTOR_DETAILS)
      );
    }

    if (businessVerificationStage === BUSINESS_VERIFICATION_DIRECTOR_DETAILS) {
      return dispatch(
        setBusinessVerificationStage(BUSINESS_VERIFICATION_SHAREHOLDER_DETAILS)
      );
    }
  }

  const verificationTitleMap = {
    [BUSINESS_VERIFICATION_PRIMARY_DETAILS]: 'Business Documents',
    [BUSINESS_VERIFICATION_LICENSING_DETAILS]: 'Business Documents',
    [BUSINESS_VERIFICATION_DIRECTOR_DETAILS]: "Director's Details",
    [BUSINESS_VERIFICATION_SHAREHOLDER_DETAILS]: "Shareholder's Details",
  };

  return (
    <PaddedContainer isScrollable>
      <Button
        onClick={handleBackFn}
        variant='ghost'
        className='flex items-center gap-2 text-primary font-medium text-xl mb-8'
      >
        <IoArrowBack />
        Back
      </Button>

      <div className='flex items-center gap-2'>
        <IoBusiness className='text-4xl text-primary-purple' />
        <h1 className='font-bold text-4xl'>Nest Grant Inc.</h1>

        <p className='w-fit rounded-[4px] px-5 text-sm py-[2px] bg-secondary-yellow text-primary-yellow font-medium'>
          Pending
        </p>
      </div>

      <div className='mt-7 mb-[30px] flex items-center justify-between'>
        <p className='uppercase font-semibold text-tertiary-grey'>
          {verificationTitleMap[businessVerificationStage]}
        </p>
        {businessVerificationStage !==
          BUSINESS_VERIFICATION_SHAREHOLDER_DETAILS && (
          <Button
            className='py-[10px] px-12 rounded-[8px]'
            onClick={handleNextFn}
          >
            Next
          </Button>
        )}
      </div>

      <div>
        <AnimatePresence mode='wait' initial={false}>
          {businessVerificationStage ===
            BUSINESS_VERIFICATION_PRIMARY_DETAILS && <BusinessPrimaryDetails />}
          {businessVerificationStage ===
            BUSINESS_VERIFICATION_LICENSING_DETAILS && <BusinessLicensing />}
          {businessVerificationStage ===
            BUSINESS_VERIFICATION_DIRECTOR_DETAILS && <BusinessDirectors />}
          {businessVerificationStage ===
            BUSINESS_VERIFICATION_SHAREHOLDER_DETAILS && (
            <BusinessShareholders />
          )}
        </AnimatePresence>
      </div>
    </PaddedContainer>
  );
}
