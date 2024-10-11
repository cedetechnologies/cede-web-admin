'use client';

import { AnimatePresence } from 'framer-motion';

import Modal, { ModalProps } from '@/components/modal';

import { useAppDispatch, useAppSelector } from '@/store';

import EditRole from '@/app/(authenticated-layout)/settings/teams/_components/EditRole';
import InviteMember from '@/app/(authenticated-layout)/settings/teams/_components/InviteMember';
import RemoveMember from '@/app/(authenticated-layout)/settings/teams/_components/RemoveMember';
import SuccessModal from '@/app/users/_components/SuccessModal';
import {
  resetTeamSettingsState,
  TEAM_SETTINGS_EDIT_ROLE,
  TEAM_SETTINGS_INVITE_MEMBER,
  TEAM_SETTINGS_INVITE_SUCCESS,
  TEAM_SETTINGS_REMOVE_MEMBER,
  TEAM_SETTINGS_ROLE_SUCCESS,
  TEAM_SETTNGS_REMOVE_SUCCESS,
} from '@/slices/teamSettingsSlice';

export default function TeamSettingsModalContainer({ ...props }: ModalProps) {
  const teamSettingsStage = useAppSelector((state) => state.teamSettings.stage);

  const dispatch = useAppDispatch();

  function resetTeamSettingsAfterClose() {
    dispatch(resetTeamSettingsState());
  }

  return (
    <>
      <Modal
        {...props}
        onAfterClose={resetTeamSettingsAfterClose}
        className='h-auto w-4/5 lg:w-2/5 rounded-[16px]'
      >
        <section className='h-full w-full bg-bg-grey p-10 flex flex-col'>
          <AnimatePresence mode='wait' initial={false}>
            {teamSettingsStage === TEAM_SETTINGS_INVITE_MEMBER && (
              <InviteMember close={props.handleCloseModal} />
            )}
            {teamSettingsStage === TEAM_SETTINGS_INVITE_SUCCESS && (
              <SuccessModal
                close={props.handleCloseModal}
                caption='Odell Beckham has been sent an invite.'
              />
            )}
            {teamSettingsStage === TEAM_SETTINGS_EDIT_ROLE && (
              <EditRole close={props.handleCloseModal} />
            )}
            {teamSettingsStage === TEAM_SETTINGS_ROLE_SUCCESS && (
              <SuccessModal
                close={props.handleCloseModal}
                caption="Odell Beckham's role has been updated."
              />
            )}
            {teamSettingsStage === TEAM_SETTINGS_REMOVE_MEMBER && (
              <RemoveMember close={props.handleCloseModal} />
            )}
            {teamSettingsStage === TEAM_SETTNGS_REMOVE_SUCCESS && (
              <SuccessModal
                close={props.handleCloseModal}
                caption='Odell Beckham has been removed from the system'
              />
            )}
          </AnimatePresence>
        </section>
      </Modal>
    </>
  );
}
