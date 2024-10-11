import { useFormik } from 'formik';

import { useAppDispatch } from '@/store';

import { inviteMemberInitialValues } from '@/app/(authenticated-layout)/settings/teams/_utils/teamSettingsConstants';
import { inviteMemberSchema } from '@/app/(authenticated-layout)/settings/teams/_utils/teamSettingsValidations';
import {
  setTeamSettingsStage,
  TEAM_SETTINGS_INVITE_SUCCESS,
} from '@/slices/teamSettingsSlice';
import { handleErrors } from '@/utils/error';

export default function useInviteMember() {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: inviteMemberInitialValues,
    onSubmit: async (_values) => {
      try {
        dispatch(setTeamSettingsStage(TEAM_SETTINGS_INVITE_SUCCESS));
      } catch (e) {
        handleErrors(e);
      } finally {
        //
      }
    },
    validationSchema: inviteMemberSchema,
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
