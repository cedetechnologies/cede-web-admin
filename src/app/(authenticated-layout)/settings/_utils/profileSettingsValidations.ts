import { object, string } from 'yup';

import { ProfileSettingsIds } from '@/app/(authenticated-layout)/settings/_utils/profileSettingsConstants';

export const oldPasswordSchema = object({
  [ProfileSettingsIds.OldPassword]: string().required(
    'Old password is required'
  ),
});

export const newPasswordSchema = object({
  [ProfileSettingsIds.NewPassword]: string()
    .required('Please enter your password')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, {
      excludeEmptyString: true,
      message: 'Please include at least one uppercase letter',
    })
    .matches(/\d/, {
      excludeEmptyString: true,
      message: 'Please include at least one number',
    })
    .matches(/[^\w\d.]/, {
      excludeEmptyString: true,
      message: 'Please include at least one special character',
    })
    .matches(/[a-z]/, {
      excludeEmptyString: true,
      message: 'Please include at least one lowercase letter',
    }),
});

export const emailSchema = object({
  [ProfileSettingsIds.Email]: string()
    .email('Email is invalid')
    .required('Email is required'),
});

export const nameSchema = object({
  [ProfileSettingsIds.FirstName]: string().required('First name is required'),
  [ProfileSettingsIds.LastName]: string().required('Last name is required'),
});
