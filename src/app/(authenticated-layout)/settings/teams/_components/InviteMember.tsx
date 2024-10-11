import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import { Input, Select } from '@/components/input';

import { TeamSettingsIds } from '@/app/(authenticated-layout)/settings/teams/_utils/teamSettingsConstants';
import useInviteMember from '@/app/(authenticated-layout)/settings/teams/_utils/useInviteMember';
import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';

type Props = {
  close: () => void;
};

export default function InviteMember({ close }: Props) {
  const { formik, getInputProps, getFormikPropsSelect } = useInviteMember();

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

      <p className='text-3xl font-semibold'>Invite Member</p>

      <Input
        id={TeamSettingsIds.FullName}
        label='Full name'
        placeholder='Odell'
        {...getInputProps(TeamSettingsIds.FullName)}
      />

      <Input
        id={TeamSettingsIds.Email}
        label='Email address'
        placeholder=''
        {...getInputProps(TeamSettingsIds.Email)}
      />

      <Select
        id={TeamSettingsIds.Role}
        label='Assign role'
        placeholder=''
        options={[{ label: 'Role', value: 'role' }]}
        {...getFormikPropsSelect(TeamSettingsIds.Role)}
      />

      <Button
        type='submit'
        className='text-center justify-center rounded-[8px] py-4 mt-auto'
        disabled={!formik.isValid}
      >
        Send invite
      </Button>
    </motion.form>
  );
}
