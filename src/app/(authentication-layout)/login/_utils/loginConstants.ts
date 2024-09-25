export enum LoginIds {
  Email = 'email',
  Password = 'password',
  Otp = 'otp',
}

export const loginStage1InitialValues = {
  [LoginIds.Email]: '',
  [LoginIds.Password]: '',
};

export const loginStage2InitialValues = {
  [LoginIds.Otp]: '',
};
