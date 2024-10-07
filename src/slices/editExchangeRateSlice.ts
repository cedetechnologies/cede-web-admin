'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EDIT_EXCHANGE_RATE_REDUCER_PATH } from '@/constant/appConstants';

export const EDIT_RATE_EDIT_STAGE = 'editRate' as const;
export const EDIT_RATE_SUCCESS_STAGE = 'editSuccess' as const;

export interface editRateState {
  stage: typeof EDIT_RATE_EDIT_STAGE | typeof EDIT_RATE_SUCCESS_STAGE;
}

export const initialState: editRateState = {
  stage: 'editRate',
};

export const editExchangeRateSlice = createSlice({
  name: EDIT_EXCHANGE_RATE_REDUCER_PATH,
  initialState,
  reducers: {
    setEditExchangeRateState: (
      state,
      action: PayloadAction<editRateState['stage']>
    ) => {
      return { ...state, stage: action.payload };
    },

    resetEditRateState: () => {
      return initialState;
    },
  },
});

export const { setEditExchangeRateState, resetEditRateState } =
  editExchangeRateSlice.actions;

export const editExchangeRateReducer = editExchangeRateSlice.reducer;
