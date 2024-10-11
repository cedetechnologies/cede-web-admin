'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PROFILE_SETTINGS_REDUCER_PATH } from '@/constant/appConstants';

export const PROFILE_SETTINGS_OLD_PASSWORD = 'oldPassword' as const;
export const PROFILE_SETTINGS_NEW_PASSWORD = 'newPassword' as const;
export const PROFILE_SETTING_PASSWORD_SUCCESS = 'passwordSuccess' as const;
export const PROFILE_SETTINGS_CHANGE_EMAIL = 'changeEmail' as const;
export const PROFILE_SETTINGS_EMAIL_SUCCESS = 'emailSuccess' as const;
export const PROFILE_SETTING_CHANGE_NAME = 'changeName' as const;
export const PROFILE_SETTING_NAME_SUCCESS = 'nameSuccess' as const;

export interface profileSettingsState {
  stage:
    | typeof PROFILE_SETTINGS_OLD_PASSWORD
    | typeof PROFILE_SETTINGS_NEW_PASSWORD
    | typeof PROFILE_SETTING_PASSWORD_SUCCESS
    | typeof PROFILE_SETTINGS_CHANGE_EMAIL
    | typeof PROFILE_SETTINGS_EMAIL_SUCCESS
    | typeof PROFILE_SETTING_CHANGE_NAME
    | typeof PROFILE_SETTING_NAME_SUCCESS;
  oldPassword: string;
}

export const initialState: profileSettingsState = {
  stage: 'oldPassword',
  oldPassword: '',
};

export const profileSettingsSlice = createSlice({
  name: PROFILE_SETTINGS_REDUCER_PATH,
  initialState,
  reducers: {
    setProfileSettingsStage: (
      state,
      action: PayloadAction<profileSettingsState['stage']>
    ) => {
      return { ...state, stage: action.payload };
    },

    setOldPassword: (
      state,
      action: PayloadAction<profileSettingsState['oldPassword']>
    ) => {
      return { ...state, oldPassword: action.payload };
    },

    resetProfileSettingsStage: () => {
      return initialState;
    },
  },
});

export const {
  setProfileSettingsStage,
  resetProfileSettingsStage,
  setOldPassword,
} = profileSettingsSlice.actions;

export const profileSettingsReducer = profileSettingsSlice.reducer;
