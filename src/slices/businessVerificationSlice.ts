'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BUSINESS_VERIFICATION_REDUCER_PATH } from '@/constant/appConstants';

export const BUSINESS_VERIFICATION_PRIMARY_DETAILS = 'primary' as const;
export const BUSINESS_VERIFICATION_LICENSING_DETAILS = 'licenses' as const;
export const BUSINESS_VERIFICATION_DIRECTOR_DETAILS = 'director' as const;
export const BUSINESS_VERIFICATION_SHAREHOLDER_DETAILS = 'shareholder' as const;

export interface businessVerificationState {
  stage:
    | typeof BUSINESS_VERIFICATION_PRIMARY_DETAILS
    | typeof BUSINESS_VERIFICATION_LICENSING_DETAILS
    | typeof BUSINESS_VERIFICATION_DIRECTOR_DETAILS
    | typeof BUSINESS_VERIFICATION_SHAREHOLDER_DETAILS;
}

export const initialState: businessVerificationState = {
  stage: 'primary',
};

export const businessVerificationSlice = createSlice({
  name: BUSINESS_VERIFICATION_REDUCER_PATH,
  initialState,
  reducers: {
    setBusinessVerificationStage: (
      state,
      action: PayloadAction<businessVerificationState['stage']>
    ) => {
      return { ...state, stage: action.payload };
    },

    resetBusinessVerificationStage: () => {
      return initialState;
    },
  },
});

export const { setBusinessVerificationStage, resetBusinessVerificationStage } =
  businessVerificationSlice.actions;

export const businessVerificationReducer = businessVerificationSlice.reducer;
