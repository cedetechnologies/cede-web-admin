'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BLACKLIST_USER_REDUCER_PATH } from '@/constant/appConstants';

export const BLAcKLIST_STAGE_ONE = 'blacklist' as const;
export const BLACKLIST_SUCCESS_STAGE = 'succss' as const;

export interface blacklistUserState {
  stage: typeof BLAcKLIST_STAGE_ONE | typeof BLACKLIST_SUCCESS_STAGE;
}

export const initialState: blacklistUserState = {
  stage: 'blacklist',
};

export const blacklistUserSlice = createSlice({
  name: BLACKLIST_USER_REDUCER_PATH,
  initialState,
  reducers: {
    setBlacklistUserStage: (
      state,
      action: PayloadAction<blacklistUserState['stage']>
    ) => {
      return { ...state, stage: action.payload };
    },

    resetBlacklistUser: () => {
      return initialState;
    },
  },
});

export const { setBlacklistUserStage, resetBlacklistUser } =
  blacklistUserSlice.actions;

export const blacklistReducer = blacklistUserSlice.reducer;
