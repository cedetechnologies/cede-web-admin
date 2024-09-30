import { useFormik } from 'formik';
import router from 'next/router';
import { useMemo } from 'react';
import toast from 'react-hot-toast';

import { useAppDispatch, useAppSelector } from '@/store';

import {
  LoginIds,
  loginStage2InitialValues,
} from '@/app/(authentication-layout)/login/_utils/loginConstants';
import { loginStage2Schema } from '@/app/(authentication-layout)/login/_utils/loginValidation';
import { resetLogin, setOtp } from '@/slices/loginSlice';
import { handleErrors } from '@/utils/error';

export default function useLoginStage2() {
  const otp = useAppSelector((state) => state.login.otp);

  const dispatch = useAppDispatch();

  const initialValues = useMemo(() => {
    return { ...loginStage2InitialValues, otp };
  }, [otp]);

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        toast.success('OTP successfully verified');

        dispatch(setOtp({ otp: values.otp }));
        router.push('/');
        dispatch(resetLogin());
      } catch (e) {
        handleErrors(e);
      } finally {
        //
      }
    },
    validationSchema: loginStage2Schema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
  });

  const handleChange = (enteredPin: string) => {
    formik.setFieldTouched(LoginIds.Otp, true);
    formik.setFieldValue(LoginIds.Otp, enteredPin, true);
  };

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

  return { formik, getFormikPropsSelect, getInputProps, handleChange };
}
