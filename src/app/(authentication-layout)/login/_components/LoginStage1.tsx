import { motion } from 'framer-motion';
import Link from 'next/link';

import Button from '@/components/buttons/Button';
import { Input } from '@/components/input';

import { LoginIds } from '@/app/(authentication-layout)/signup/_utils/loginConstants';
import { multiStepVariants } from '@/app/(authentication-layout)/signup/_utils/loginVariants';
import useLoginStage1 from '@/app/(authentication-layout)/signup/_utils/useLoginStage1';

export default function LoginStage1() {
  const { formik, getInputProps } = useLoginStage1();

  return (
    <motion.form
      variants={multiStepVariants}
      initial='initial'
      exit='exit'
      animate='animate'
      onSubmit={formik.handleSubmit}
      className='flex flex-col gap-6 justify-between h-full'
    >
      <div>
        <h1 className='font-semibold text-3xl'>Admin Login</h1>
        <p className='text-tertiary-grey text-sm mt-3'>
          Welcome back, let’s get started
        </p>
      </div>

      <Input
        id={LoginIds.Email}
        label='Email address'
        placeholder='Enter email address'
        {...getInputProps(LoginIds.Email)}
      />

      <div>
        <Input
          id={LoginIds.Password}
          label='Password'
          type='password'
          placeholder='••••••••••••••••'
          {...getInputProps(LoginIds.Password)}
        />
        <p className='text-sm'>
          Forgot Password?{' '}
          <Link href='/' className='text-primary font-medium'>
            Reset Now
          </Link>
        </p>
      </div>

      <Button
        type='submit'
        className='text-center justify-center rounded-[8px] py-4 mt-auto'
        disabled={!formik.isValid}
      >
        Login
      </Button>
    </motion.form>
  );
}
