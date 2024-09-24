'use client';

import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundBack } from 'react-icons/io';

import IconButton from '@/components/buttons/IconButton';

import { useAppDispatch, useAppSelector } from '@/store';

import LoginStage1 from '@/app/(authentication-layout)/signup/_components/LoginStage1';
import LoginStage2 from '@/app/(authentication-layout)/signup/_components/LoginStage2';
import {
  LOGIN_STAGE_ONE,
  LOGIN_STAGE_TWO,
  setLoginStage,
} from '@/slices/loginSlice';

export default function Page() {
  const stage = useAppSelector((state) => state.login.stage);
  const dispatch = useAppDispatch();

  function backFn() {
    dispatch(setLoginStage(LOGIN_STAGE_ONE));
  }

  return (
    <section className='flex flex-col justify-start w-full h-full'>
      <div className='flex items-center justify-between'>
        {stage === LOGIN_STAGE_ONE && (
          <Image
            src='/svg/cede hq.svg'
            alt='Cede Logo'
            width={40}
            height={40}
          />
        )}
        {stage === LOGIN_STAGE_TWO && (
          <IconButton
            icon={IoIosArrowRoundBack}
            variant='ghost'
            className='text-4xl !p-0'
            onClick={backFn}
          />
        )}
        <Link href='/' className='font-figtree'>
          Help centre
        </Link>
      </div>

      <div className='mt-16 h-full w-full'>
        <AnimatePresence mode='wait' initial={false}>
          {stage === LOGIN_STAGE_ONE && <LoginStage1 />}
          {stage === LOGIN_STAGE_TWO && <LoginStage2 />}
        </AnimatePresence>
      </div>
    </section>
  );
}
