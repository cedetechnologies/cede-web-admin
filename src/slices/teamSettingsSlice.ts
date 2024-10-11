'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TEAM_SETTINGS_REDUCER_PATH } from '@/constant/appConstants';

export const TEAM_SETTINGS_INVITE_MEMBER = 'inviteMember' as const;
export const TEAM_SETTINGS_INVITE_SUCCESS = 'invitSuccess' as const;
export const TEAM_SETTINGS_EDIT_ROLE = 'editRole' as const;
export const TEAM_SETTINGS_ROLE_SUCCESS = 'roleSuccess' as const;
export const TEAM_SETTINGS_REMOVE_MEMBER = 'removeMember' as const;
export const TEAM_SETTNGS_REMOVE_SUCCESS = 'removeSuccess' as const;

export interface teamSettingsState {
  stage:
    | typeof TEAM_SETTINGS_INVITE_MEMBER
    | typeof TEAM_SETTINGS_INVITE_SUCCESS
    | typeof TEAM_SETTINGS_EDIT_ROLE
    | typeof TEAM_SETTINGS_ROLE_SUCCESS
    | typeof TEAM_SETTINGS_REMOVE_MEMBER
    | typeof TEAM_SETTNGS_REMOVE_SUCCESS;
}

export const initialState: teamSettingsState = {
  stage: 'inviteMember',
};

export const teamSettingsSlice = createSlice({
  name: TEAM_SETTINGS_REDUCER_PATH,
  initialState,
  reducers: {
    setTeamSettingsStage: (
      state,
      action: PayloadAction<teamSettingsState['stage']>
    ) => {
      return { ...state, stage: action.payload };
    },

    resetTeamSettingsState: () => {
      return initialState;
    },
  },
});

export const { setTeamSettingsStage, resetTeamSettingsState } =
  teamSettingsSlice.actions;

export const teamSettingsReducer = teamSettingsSlice.reducer;
