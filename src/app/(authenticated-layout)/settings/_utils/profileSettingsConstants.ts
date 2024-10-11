export enum ProfileSettingsIds {
  OldPassword = 'oldPassword',
  NewPassword = 'newPassword',
  Email = 'email',
  LastName = 'lastName',
  FirstName = 'firstName',
}

export const oldPasswordInitialValues = {
  [ProfileSettingsIds.OldPassword]: '',
};

export const newPasswordInitialValues = {
  [ProfileSettingsIds.NewPassword]: '',
};

export const emailInitialValues = {
  [ProfileSettingsIds.Email]: '',
};

export const nameInitialValues = {
  [ProfileSettingsIds.FirstName]: '',
  [ProfileSettingsIds.LastName]: '',
};
