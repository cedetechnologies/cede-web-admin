import { useFormik } from 'formik';
import { object, string } from 'yup';

import { useAppDispatch } from '@/store';

import {
  BLACKLIST_SUCCESS_STAGE,
  setBlacklistUserStage,
} from '@/slices/blacklistUser';
import { handleErrors } from '@/utils/error';

export enum BlacklistUserId {
  Reason = 'reason',
}

export default function useBlacklistUser() {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      [BlacklistUserId.Reason]: '',
    },
    onSubmit: async (_values) => {
      try {
        dispatch(setBlacklistUserStage(BLACKLIST_SUCCESS_STAGE));
      } catch (e) {
        handleErrors(e);
      } finally {
        //
      }
    },
    validationSchema: object({
      [BlacklistUserId.Reason]: string().required(
        'Blacklist reason is requird'
      ),
    }),
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
