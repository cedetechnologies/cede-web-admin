import { useFormik } from 'formik';
import { useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '@/store';

import { loginStage1InitialValues } from '@/app/(authentication-layout)/signup/_utils/loginConstants';
import { loginStage1Schema } from '@/app/(authentication-layout)/signup/_utils/loginValidation';
import {
  LOGIN_STAGE_TWO,
  setEmailAndPassword,
  setLoginStage,
} from '@/slices/loginSlice';

export default function useLoginStage1() {
  const email = useAppSelector((state) => state.login.email);
  const password = useAppSelector((state) => state.login.password);

  const dispatch = useAppDispatch();
  const initialValues = useMemo(
    () => ({
      ...loginStage1InitialValues,
      email,
      password,
    }),
    [email, password]
  );

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      const { email, password } = values;

      dispatch(
        setEmailAndPassword({
          email,
          password,
        })
      );
      dispatch(setLoginStage(LOGIN_STAGE_TWO));
    },
    validationSchema: loginStage1Schema,
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
