import { useFormik } from 'formik';

import { useAppDispatch } from '@/store';

import { emailInitialValues } from '@/app/(authenticated-layout)/settings/_utils/profileSettingsConstants';
import { emailSchema } from '@/app/(authenticated-layout)/settings/_utils/profileSettingsValidations';
import {
  PROFILE_SETTINGS_EMAIL_SUCCESS,
  setProfileSettingsStage,
} from '@/slices/profleSettingsSlice';
import { handleErrors } from '@/utils/error';

export default function useChangeEmail() {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: emailInitialValues,
    onSubmit: async (_values) => {
      try {
        dispatch(setProfileSettingsStage(PROFILE_SETTINGS_EMAIL_SUCCESS));
      } catch (e) {
        handleErrors(e);
      } finally {
        //
      }
    },
    validationSchema: emailSchema,
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
