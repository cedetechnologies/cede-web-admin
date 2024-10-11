import { useFormik } from 'formik';

import { useAppDispatch } from '@/store';

import { nameInitialValues } from '@/app/(authenticated-layout)/settings/_utils/profileSettingsConstants';
import { nameSchema } from '@/app/(authenticated-layout)/settings/_utils/profileSettingsValidations';
import {
  PROFILE_SETTING_NAME_SUCCESS,
  setProfileSettingsStage,
} from '@/slices/profleSettingsSlice';
import { handleErrors } from '@/utils/error';

export default function useChangeName() {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: nameInitialValues,
    onSubmit: async (_values) => {
      try {
        dispatch(setProfileSettingsStage(PROFILE_SETTING_NAME_SUCCESS));
      } catch (e) {
        handleErrors(e);
      } finally {
        //
      }
    },
    validationSchema: nameSchema,
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
