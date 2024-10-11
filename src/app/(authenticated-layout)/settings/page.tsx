'use client';

import { IoArrowForward } from 'react-icons/io5';

import useDisclosure from '@/hooks/useDisclosure';

import Button from '@/components/buttons/Button';
import { Input } from '@/components/input';

import { useAppDispatch } from '@/store';

import ChangeSettingsModalContainer from '@/app/(authenticated-layout)/settings/_components/ChangeSettingsModalContainer';
import {
  PROFILE_SETTING_CHANGE_NAME,
  PROFILE_SETTINGS_CHANGE_EMAIL,
  PROFILE_SETTINGS_OLD_PASSWORD,
  setProfileSettingsStage,
} from '@/slices/profleSettingsSlice';

export default function Page() {
  const settingsModal = useDisclosure();

  const dispatch = useAppDispatch();

  function openChangeEmail() {
    dispatch(setProfileSettingsStage(PROFILE_SETTINGS_CHANGE_EMAIL));
    settingsModal.open();
  }

  function openChangeName() {
    dispatch(setProfileSettingsStage(PROFILE_SETTING_CHANGE_NAME));
    settingsModal.open();
  }

  function openChangePassword() {
    dispatch(setProfileSettingsStage(PROFILE_SETTINGS_OLD_PASSWORD));
    settingsModal.open();
  }

  return (
    <section>
      <div className='flex flex-col gap-8'>
        <div className='flex items-center justify-between'>
          <div className='w-1/2'>
            <Input
              id='full name'
              value='John MacDonald'
              label='Full name'
              disabled
            />
          </div>
          <Button
            variant='ghost'
            onClick={openChangeName}
            className='flex items-center gap-2 text-primary font-medium text-xl'
          >
            Change name
            <IoArrowForward />
          </Button>
        </div>

        <div className='flex items-center justify-between'>
          <div className='w-1/2'>
            <Input
              id='email'
              value='adeyera@gmail.com'
              label='Email address'
              disabled
            />
          </div>
          <Button
            variant='ghost'
            onClick={openChangeEmail}
            className='flex items-center gap-2 text-primary font-medium text-xl'
          >
            Change email
            <IoArrowForward />
          </Button>
        </div>

        <div className='flex items-center justify-between'>
          <div className='w-1/2'>
            <Input
              id='password'
              value='John MacDonald'
              label='Password'
              type='password'
              disabled
            />
          </div>
          <Button
            variant='ghost'
            onClick={openChangePassword}
            className='flex items-center gap-2 text-primary font-medium text-xl'
          >
            Change password
            <IoArrowForward />
          </Button>
        </div>
      </div>

      <ChangeSettingsModalContainer
        isOpen={settingsModal.isOpen}
        handleOpenModal={settingsModal.open}
        handleCloseModal={settingsModal.close}
      />
    </section>
  );
}
