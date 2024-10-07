'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RATE_DETAILS_REDUCER_PATH } from '@/constant/appConstants';

export const RATE_DETAILS_DETAIL_STAGE = 'detail' as const;
export const RATE_DETAILS_APPROVED_STAGE = 'approved' as const;
export const RATE_DETAILS_COUNTER_STAGE = 'counter' as const;
export const RATE_DETAILS_COUNTER_APPROVED_STAGE = 'counterApproved' as const;

export interface rateDetailsState {
  stage:
    | typeof RATE_DETAILS_DETAIL_STAGE
    | typeof RATE_DETAILS_APPROVED_STAGE
    | typeof RATE_DETAILS_COUNTER_STAGE
    | typeof RATE_DETAILS_COUNTER_APPROVED_STAGE;
}

export const initialState: rateDetailsState = {
  stage: 'detail',
};

export const rateDetailsSlice = createSlice({
  name: RATE_DETAILS_REDUCER_PATH,
  initialState,
  reducers: {
    setRateDetailsStage: (
      state,
      action: PayloadAction<rateDetailsState['stage']>
    ) => {
      return { ...state, stage: action.payload };
    },

    resetRateDetailsStage: () => {
      return initialState;
    },
  },
});

export const { setRateDetailsStage, resetRateDetailsStage } =
  rateDetailsSlice.actions;

export const rateDetailsReducer = rateDetailsSlice.reducer;
