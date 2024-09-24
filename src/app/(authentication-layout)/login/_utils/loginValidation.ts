import { object, string } from 'yup';

import { LoginIds } from '@/app/(authentication-layout)/signup/_utils/loginConstants';

export const loginStage1Schema = object({
  [LoginIds.Email]: string()
    .email('Email is invalid')
    .required('Email is required'),
  [LoginIds.Password]: string().required('Password is required'),
});

export const loginStage2Schema = object({
  [LoginIds.Otp]: string().required('Otp is required').length(6, ''),
});
