export enum TeamSettingsIds {
  FullName = 'fullName',
  Email = 'email',
  Role = 'role',
}

export const inviteMemberInitialValues = {
  [TeamSettingsIds.FullName]: '',
  [TeamSettingsIds.Email]: '',
  [TeamSettingsIds.Role]: '',
};

export const editRoleInitialValues = {
  [TeamSettingsIds.FullName]: '',
  [TeamSettingsIds.Email]: '',
  [TeamSettingsIds.Role]: '',
};
