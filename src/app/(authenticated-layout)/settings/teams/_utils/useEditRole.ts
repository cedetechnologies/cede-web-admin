import { useFormik } from 'formik';

import { useAppDispatch } from '@/store';

import { editRoleInitialValues } from '@/app/(authenticated-layout)/settings/teams/_utils/teamSettingsConstants';
import { editRoleSchema } from '@/app/(authenticated-layout)/settings/teams/_utils/teamSettingsValidations';
import {
  setTeamSettingsStage,
  TEAM_SETTINGS_ROLE_SUCCESS,
} from '@/slices/teamSettingsSlice';
import { handleErrors } from '@/utils/error';

export default function useEditRole() {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: editRoleInitialValues,
    onSubmit: async (_values) => {
      try {
        dispatch(setTeamSettingsStage(TEAM_SETTINGS_ROLE_SUCCESS));
      } catch (e) {
        handleErrors(e);
      } finally {
        //
      }
    },
    validationSchema: editRoleSchema,
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
