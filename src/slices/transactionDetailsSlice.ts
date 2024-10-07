'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TRANSACTION_DETAILS_REDUCER_PATH } from '@/constant/appConstants';

export const TRANSACTION_DETAILS_DETAIL_STAGE = 'detail' as const;
export const TRANSACTION_DETAILS_MENU_STAGE = 'menu' as const;
export const TRANSACTION_DETAILS_PENDING_STAGE = 'pending' as const;
export const TRANSACTION_DETAILS_APPROVE_STAGE = 'approved' as const;
export const TRANSACTION_DETAILS_REQUEST_STAGE = 'requestDocument' as const;
export const TRANSACTION_DETAILS_REFUND_STAGE = 'refund' as const;
export const TRANSACTION_DETAILS_OTP_STAGE = 'otp' as const;
export const TRANSACTION_DETAILS_REFUND_APPROVED_STAGE =
  'refundApproved' as const;

export interface transactionDetailsState {
  stage:
    | typeof TRANSACTION_DETAILS_DETAIL_STAGE
    | typeof TRANSACTION_DETAILS_MENU_STAGE
    | typeof TRANSACTION_DETAILS_PENDING_STAGE
    | typeof TRANSACTION_DETAILS_APPROVE_STAGE
    | typeof TRANSACTION_DETAILS_REQUEST_STAGE
    | typeof TRANSACTION_DETAILS_REFUND_STAGE
    | typeof TRANSACTION_DETAILS_OTP_STAGE
    | typeof TRANSACTION_DETAILS_REFUND_APPROVED_STAGE;
}

export const initialState: transactionDetailsState = {
  stage: 'detail',
};

export const transactionDetailsSlice = createSlice({
  name: TRANSACTION_DETAILS_REDUCER_PATH,
  initialState,
  reducers: {
    setTransactionDetailsStage: (
      state,
      action: PayloadAction<transactionDetailsState['stage']>
    ) => {
      return { ...state, stage: action.payload };
    },

    resetTransactionDetailsStage: () => {
      return initialState;
    },
  },
});

export const { setTransactionDetailsStage, resetTransactionDetailsStage } =
  transactionDetailsSlice.actions;

export const transactionDetailsReducer = transactionDetailsSlice.reducer;
