'use client';

import { AnimatePresence } from 'framer-motion';

import Modal, { ModalProps } from '@/components/modal';

import { useAppDispatch, useAppSelector } from '@/store';

import ChangeEmail from '@/app/(authenticated-layout)/settings/_components/ChangeEmail';
import ChangeName from '@/app/(authenticated-layout)/settings/_components/ChangeName';
import NewPassword from '@/app/(authenticated-layout)/settings/_components/NewPassword';
import OldPassword from '@/app/(authenticated-layout)/settings/_components/OldPassword';
import SuccessModal from '@/app/users/_components/SuccessModal';
import {
  PROFILE_SETTING_CHANGE_NAME,
  PROFILE_SETTING_NAME_SUCCESS,
  PROFILE_SETTING_PASSWORD_SUCCESS,
  PROFILE_SETTINGS_CHANGE_EMAIL,
  PROFILE_SETTINGS_EMAIL_SUCCESS,
  PROFILE_SETTINGS_NEW_PASSWORD,
  PROFILE_SETTINGS_OLD_PASSWORD,
  resetProfileSettingsStage,
} from '@/slices/profleSettingsSlice';

export default function ChangeSettingsModalContainer({ ...props }: ModalProps) {
  const profileSettingsStage = useAppSelector(
    (state) => state.profileSettings.stage
  );

  const dispatch = useAppDispatch();

  function resetProfileSettingsAfterClose() {
    dispatch(resetProfileSettingsStage());
  }

  return (
    <>
      <Modal
        {...props}
        onAfterClose={resetProfileSettingsAfterClose}
        className='h-auto w-4/5 lg:w-2/5 rounded-[16px]'
      >
        <section className='h-full w-full bg-bg-grey p-10 flex flex-col'>
          <AnimatePresence mode='wait' initial={false}>
            {profileSettingsStage === PROFILE_SETTINGS_OLD_PASSWORD && (
              <OldPassword close={props.handleCloseModal} />
            )}
            {profileSettingsStage === PROFILE_SETTINGS_NEW_PASSWORD && (
              <NewPassword />
            )}
            {profileSettingsStage === PROFILE_SETTING_PASSWORD_SUCCESS && (
              <SuccessModal
                close={props.handleCloseModal}
                caption='You can now login to your account with your new password'
              />
            )}
            {profileSettingsStage === PROFILE_SETTINGS_CHANGE_EMAIL && (
              <ChangeEmail close={props.handleCloseModal} />
            )}
            {profileSettingsStage === PROFILE_SETTINGS_EMAIL_SUCCESS && (
              <SuccessModal
                close={props.handleCloseModal}
                caption='Your email address has been updated'
              />
            )}
            {profileSettingsStage === PROFILE_SETTING_CHANGE_NAME && (
              <ChangeName close={props.handleCloseModal} />
            )}
            {profileSettingsStage === PROFILE_SETTING_NAME_SUCCESS && (
              <SuccessModal
                close={props.handleCloseModal}
                caption='Your names have been updated!'
              />
            )}
          </AnimatePresence>
        </section>
      </Modal>
    </>
  );
}
