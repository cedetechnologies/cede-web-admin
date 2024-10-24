'use client';

import { motion } from 'framer-motion';
import { BsIncognito } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import { MultiLine } from '@/components/input';
import { ModalProps } from '@/components/modal';

import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';
import useBlacklistUser, {
  BlacklistUserId,
} from '@/app/users/_utils/useBlacklistUser';

type Props = ModalProps & {
  isMultiple: boolean;
};

export default function BlacklistUser({ isMultiple, ...props }: Props) {
  const { formik, getInputProps } = useBlacklistUser();

  return (
    <motion.form
      variants={multiStepVariants}
      onSubmit={formik.handleSubmit}
      initial='initial'
      exit='exit'
      animate='animate'
      className='h-full w-full bg-white flex flex-col'
    >
      <div className='flex justify-end mb-7'>
        <IconButton
          variant='ghost'
          icon={IoMdClose}
          onClick={props.handleCloseModal}
          className='text-2xl'
        />
      </div>

      <div className='mt-5 flex flex-col items-center gap-2 text-center'>
        <BsIncognito className='text-5xl text-primary-red' />

        <p className='text-2xl font-semibold'>
          Blacklist {isMultiple ? 'users' : 'user'}
        </p>
        <div className='text-sm text-center w-3/5 text-tertiary-grey'>
          <p>
            Blacklisting {isMultiple ? 'these users' : 'this user'} will
            deactivate {isMultiple ? "these users'" : "this user's"} account
            until you undo this action.
          </p>
        </div>

        <div className='mt-5 w-full'>
          <MultiLine
            label='Reason for blacklist'
            id={BlacklistUserId.Reason}
            {...getInputProps(BlacklistUserId.Reason)}
            rows={5}
          />
        </div>
      </div>

      <Button
        type='submit'
        variant='danger'
        disabled={!formik.isValid}
        className='text-center justify-center rounded-[8px] py-4 w-full font-semibold mt-10'
      >
        Yes, blacklist
      </Button>

      <Button
        onClick={props.handleCloseModal}
        variant='ghost'
        className='text-center justify-center rounded-[8px] py-4 w-full font-semibold mt-10'
      >
        Cancel
      </Button>
    </motion.form>
  );
}
