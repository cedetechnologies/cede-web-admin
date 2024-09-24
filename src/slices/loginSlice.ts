'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LOGIN_REDUCER_PATH } from '@/constant/appConstants';

export const LOGIN_STAGE_ONE = 'login1' as const;
export const LOGIN_STAGE_TWO = 'login2' as const;

export interface loginState {
  stage: typeof LOGIN_STAGE_ONE | typeof LOGIN_STAGE_TWO;
  email: string;
  password: string;
  otp: string;
}

export const initialState: loginState = {
  stage: 'login1',
  email: '',
  password: '',
  otp: '',
};

export const loginSlice = createSlice({
  name: LOGIN_REDUCER_PATH,
  initialState,
  reducers: {
    setOtp: (state, action: PayloadAction<Pick<loginState, 'otp'>>) => {
      return (state = {
        ...state,
        ...action.payload,
      });
    },

    setEmailAndPassword: (
      state,
      action: PayloadAction<Pick<loginState, 'password' | 'email'>>
    ) => {
      return (state = {
        ...state,
        ...action.payload,
      });
    },

    setLoginStage: (state, action: PayloadAction<loginState['stage']>) => {
      return { ...state, stage: action.payload };
    },

    resetLogin: () => {
      return initialState;
    },
  },
});

export const { setLoginStage, resetLogin, setOtp, setEmailAndPassword } =
  loginSlice.actions;

export const loginReducer = loginSlice.reducer;
