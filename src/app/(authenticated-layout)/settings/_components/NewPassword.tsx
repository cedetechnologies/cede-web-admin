import { motion } from 'framer-motion';
import { IoArrowBack } from 'react-icons/io5';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import { Input } from '@/components/input';

import { useAppDispatch } from '@/store';

import PasswordChecklist from '@/app/(authenticated-layout)/settings/_components/PasswordChecklist';
import { ProfileSettingsIds } from '@/app/(authenticated-layout)/settings/_utils/profileSettingsConstants';
import useChangeNewPassword from '@/app/(authenticated-layout)/settings/_utils/useChangeNewPassword';
import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';
import {
  PROFILE_SETTINGS_OLD_PASSWORD,
  setProfileSettingsStage,
} from '@/slices/profleSettingsSlice';
import { testPassword } from '@/utils/cc_format';

export default function NewPassword() {
  const { formik, getInputProps } = useChangeNewPassword();

  const dispatch = useAppDispatch();

  function goBackToOldPassword() {
    dispatch(setProfileSettingsStage(PROFILE_SETTINGS_OLD_PASSWORD));
  }

  return (
    <motion.form
      variants={multiStepVariants}
      initial='initial'
      exit='exit'
      animate='animate'
      onSubmit={formik.handleSubmit}
      className='flex flex-col gap-10 justify-between h-full'
    >
      <div className='flex mb-2'>
        <IconButton
          variant='ghost'
          icon={IoArrowBack}
          onClick={goBackToOldPassword}
          className='text-2xl'
        />
      </div>

      <p className='text-3xl font-semibold'>Create new password</p>

      <Input
        id={ProfileSettingsIds.NewPassword}
        label='Enter new password'
        type='password'
        placeholder='•••••••••••••'
        {...getInputProps(ProfileSettingsIds.NewPassword)}
      />

      <div className='text-xs text-tertiary-grey'>
        <p className='mb-4'>Your password must have:</p>
        <div className='flex flex-col gap-3'>
          <PasswordChecklist
            label='At least 8 characters'
            checked={testPassword('length', formik.values.newPassword, 8)}
          />
          <PasswordChecklist
            label='At least one number'
            checked={testPassword('number', formik.values.newPassword)}
          />
          <PasswordChecklist
            label='Uppercase and lowercase characters'
            checked={
              testPassword('uppercase', formik.values.newPassword) &&
              testPassword('lowercase', formik.values.newPassword)
            }
          />
          <PasswordChecklist
            label='At least one special character'
            checked={testPassword('special', formik.values.newPassword)}
          />
        </div>
      </div>

      <Button
        type='submit'
        className='text-center justify-center rounded-[8px] py-4 mt-auto'
        disabled={!formik.isValid}
      >
        Change Password
      </Button>
    </motion.form>
  );
}
