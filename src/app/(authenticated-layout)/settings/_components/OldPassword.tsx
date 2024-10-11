import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import { Input } from '@/components/input';

import { ProfileSettingsIds } from '@/app/(authenticated-layout)/settings/_utils/profileSettingsConstants';
import useChangeOldPassword from '@/app/(authenticated-layout)/settings/_utils/useChangeOldPassword';
import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';

type Props = {
  close: () => void;
};

export default function OldPassword({ close }: Props) {
  const { formik, getInputProps } = useChangeOldPassword();

  return (
    <motion.form
      variants={multiStepVariants}
      initial='initial'
      exit='exit'
      animate='animate'
      onSubmit={formik.handleSubmit}
      className='flex flex-col gap-10 justify-between h-full'
    >
      <div className='flex justify-end mb-2'>
        <IconButton
          variant='ghost'
          icon={IoMdClose}
          onClick={close}
          className='text-2xl'
        />
      </div>

      <p className='text-3xl font-semibold'>Change password</p>

      <Input
        id={ProfileSettingsIds.OldPassword}
        label='Enter current password'
        type='password'
        placeholder='•••••••••••••'
        {...getInputProps(ProfileSettingsIds.OldPassword)}
      />

      <Button
        type='submit'
        className='text-center justify-center rounded-[8px] py-4 mt-auto'
        disabled={!formik.isValid}
      >
        Proceed
      </Button>
    </motion.form>
  );
}
