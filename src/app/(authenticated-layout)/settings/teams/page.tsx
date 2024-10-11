'use client';

import { IoArrowForward } from 'react-icons/io5';

import '@szhsin/react-menu/dist/index.css';

import useDisclosure from '@/hooks/useDisclosure';

import Button from '@/components/buttons/Button';
import { InputSearch } from '@/components/input';
import TableContainer from '@/components/table';

import { useAppDispatch } from '@/store';

import TeamSettingsModalContainer from '@/app/(authenticated-layout)/settings/teams/_components/TeamSettingsModalContainer';
import TeamTableItem from '@/app/(authenticated-layout)/settings/teams/_components/TeamTableItem';
import {
  setTeamSettingsStage,
  TEAM_SETTINGS_EDIT_ROLE,
  TEAM_SETTINGS_INVITE_MEMBER,
  TEAM_SETTINGS_REMOVE_MEMBER,
} from '@/slices/teamSettingsSlice';

const headers = [
  'Name',
  'Email address',
  'Member role',
  'Date created',
  'Status',
  'Last active',
  '',
];

export default function Page() {
  const dispatch = useAppDispatch();

  const teamSettingsModal = useDisclosure();

  function openTeamInvite() {
    dispatch(setTeamSettingsStage(TEAM_SETTINGS_INVITE_MEMBER));
    teamSettingsModal.open();
  }

  function openEditRole() {
    dispatch(setTeamSettingsStage(TEAM_SETTINGS_EDIT_ROLE));
    teamSettingsModal.open();
  }

  function openRemoveMember() {
    dispatch(setTeamSettingsStage(TEAM_SETTINGS_REMOVE_MEMBER));
    teamSettingsModal.open();
  }

  return (
    <section>
      <div className='flex items-center justify-between'>
        <InputSearch
          placeholder='Search team member'
          containerClassName='w-1/2'
        />
        <Button
          onClick={openTeamInvite}
          rightIcon={IoArrowForward}
          className='py-4 px-6 rounded-[8px]'
        >
          Invite member
        </Button>
      </div>

      <div className='mt-7'>
        <TableContainer headers={headers}>
          <TeamTableItem
            openEditRole={openEditRole}
            openRemoveMember={openRemoveMember}
          />
          <TeamTableItem
            openEditRole={openEditRole}
            openRemoveMember={openRemoveMember}
          />
          <TeamTableItem
            openEditRole={openEditRole}
            openRemoveMember={openRemoveMember}
          />
          <TeamTableItem
            openEditRole={openEditRole}
            openRemoveMember={openRemoveMember}
          />
        </TableContainer>
      </div>

      <TeamSettingsModalContainer
        isOpen={teamSettingsModal.isOpen}
        handleOpenModal={teamSettingsModal.open}
        handleCloseModal={teamSettingsModal.close}
      />
    </section>
  );
}
