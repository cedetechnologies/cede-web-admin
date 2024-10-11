import { object, string } from 'yup';

import { TeamSettingsIds } from '@/app/(authenticated-layout)/settings/teams/_utils/teamSettingsConstants';

export const inviteMemberSchema = object({
  [TeamSettingsIds.FullName]: string().required('Full name is required'),
  [TeamSettingsIds.Email]: string()
    .email('Email is invalid')
    .required('Email is rquired'),
  [TeamSettingsIds.Role]: string().required('Role is required'),
});

export const editRoleSchema = object({
  [TeamSettingsIds.Role]: string().required('Role is required'),
});
