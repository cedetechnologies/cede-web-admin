import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import { Select } from '@/components/input';

import { TeamSettingsIds } from '@/app/(authenticated-layout)/settings/teams/_utils/teamSettingsConstants';
import useEditRole from '@/app/(authenticated-layout)/settings/teams/_utils/useEditRole';
import { multiStepVariants } from '@/app/(authentication-layout)/login/_utils/loginVariants';

type Props = {
  close: () => void;
};

export default function EditRole({ close }: Props) {
  const { formik, getFormikPropsSelect } = useEditRole();

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

      <p className='text-3xl font-semibold'>Edit Role</p>

      <Select
        id={TeamSettingsIds.Role}
        label='Assign role'
        placeholder=''
        options={[{ label: 'Role', value: 'Role' }]}
        {...getFormikPropsSelect(TeamSettingsIds.Role)}
      />

      <Button
        type='submit'
        className='text-center justify-center rounded-[8px] py-4 mt-auto'
        disabled={!formik.isValid}
      >
        Change role
      </Button>
    </motion.form>
  );
}
