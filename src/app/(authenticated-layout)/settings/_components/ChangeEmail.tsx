import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import { Input } from '@/components/input';

import { ProfileSettingsIds } from '@/app/(authenticated-layout)/settings/_utils/profileSettingsConstants';
import useChangeEmail from '@/app/(authenticated-layout)/settings/_utils/useChangeEmail';
import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';

type Props = {
  close: () => void;
};

export default function ChangeEmail({ close }: Props) {
  const { formik, getInputProps } = useChangeEmail();

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

      <p className='text-3xl font-semibold'>Change email</p>

      <Input
        id={ProfileSettingsIds.Email}
        label='Email address'
        type='email'
        {...getInputProps(ProfileSettingsIds.Email)}
      />

      <Button
        type='submit'
        className='text-center justify-center rounded-[8px] py-4 mt-auto'
        disabled={!formik.isValid}
      >
        Change email
      </Button>
    </motion.form>
  );
}
