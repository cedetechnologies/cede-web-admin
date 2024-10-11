import { useFormik } from 'formik';
import { useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '@/store';

import { oldPasswordInitialValues } from '@/app/(authenticated-layout)/settings/_utils/profileSettingsConstants';
import { oldPasswordSchema } from '@/app/(authenticated-layout)/settings/_utils/profileSettingsValidations';
import {
  PROFILE_SETTINGS_NEW_PASSWORD,
  setOldPassword,
  setProfileSettingsStage,
} from '@/slices/profleSettingsSlice';
import { handleErrors } from '@/utils/error';

export default function useChangeOldPassword() {
  const dispatch = useAppDispatch();

  const oldPassword = useAppSelector(
    (state) => state.profileSettings.oldPassword
  );

  const initialValues = useMemo(
    () => ({ ...oldPasswordInitialValues, oldPassword }),
    [oldPassword]
  );

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        dispatch(setProfileSettingsStage(PROFILE_SETTINGS_NEW_PASSWORD));
        dispatch(setOldPassword(values.oldPassword));
      } catch (e) {
        handleErrors(e);
      } finally {
        //
      }
    },
    validationSchema: oldPasswordSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
  });

  function getInputProps(id: keyof typeof formik.values) {
    return {
      ...formik.getFieldProps(id),
      ...formik.getFieldMeta(id),
    };
  }

  function getFormikPropsSelect(id: keyof typeof formik.values) {
    return {
      ...formik.getFieldHelpers(id),
      ...formik.getFieldMeta(id),
    };
  }

  return { formik, getFormikPropsSelect, getInputProps };
}
