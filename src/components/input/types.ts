import { FormikErrors } from 'formik';
import { TextareaHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { AsyncAdditionalProps } from 'react-select/dist/declarations/src/useAsync';

// INPUT TYPES START
export type InputPasswordType = 'password';
export type InputTextType = 'text';
export type InputEmailType = 'email';
export type InputDateType = 'date';
export type InputFileType = 'file';
export type InputSelectType = 'select';
export type InputNumberType = 'number';
export type InputTimeType = 'time';
// INPUT TYPES END

export interface FieldProps {
  id: string;
  error?: boolean | string;
  touched?: boolean;
  label?: string;
  labelClassName?: string;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary';
  touched?: boolean;
  error?: string;
  labelClassName?: string;
  label?: string;
  id: string;
  type?:
    | InputPasswordType
    | InputTextType
    | InputEmailType
    | InputDateType
    | InputNumberType
    | InputTimeType;
  inputClassName?: string;
  containerClassName?: string;
  initialValue?: string;
  initialTouched?: boolean;
  initialError?: string;
  helperText?: string;
  startIcon?: IconType;
}

export type FieldOption = {
  readonly value: string;
  readonly label: string;
};

export type SelectProps = React.SelectHTMLAttributes<
  HTMLSelectElement | HTMLInputElement
> & {
  className?: string;
  id: string;
  error?: boolean | string;
  touched?: boolean;
  label?: string;
  labelClassName?: string;
  options?: readonly FieldOption[];
  setValue?: (
    value: string,
    shouldValidate: boolean
  ) => Promise<void | FormikErrors<unknown>>;
  setTouched?: (
    touched: boolean,
    shouldValidate: boolean
  ) => Promise<void | FormikErrors<unknown>>;
  value?: string;
  onValueChange?: (value: SelectOption) => void;
  isLoading?: boolean;
  placeholder?: string;
};

export type AsyncSelectProps = React.SelectHTMLAttributes<
  HTMLSelectElement | HTMLInputElement
> & {
  className?: string;
  id: string;
  error?: boolean | string;
  touched?: boolean;
  label?: string;
  labelClassName?: string;
  options?: readonly FieldOption[];
  setValue?: (
    value: string,
    shouldValidate: boolean
  ) => Promise<void | FormikErrors<unknown>>;
  setTouched?: (
    touched: boolean,
    shouldValidate: boolean
  ) => Promise<void | FormikErrors<unknown>>;
  value?: string;
  onValueChange?: (value: SelectOption) => void;
  isLoading?: boolean;
  placeholder?: string;
  defaultInputValue?: string;
} & AsyncAdditionalProps<
    { label: string; value: string },
    { label: string; options: { label: string; value: string }[] }
  >;

export type RadioProps = SelectProps;

export interface MultilineProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean | string;
  touched?: boolean;
  variant?: 'primary' | 'secondary';
  inputClassName?: string;
  containerClassName?: string;
  labelClassName?: string;
  label?: string;
  initialValue?: string;
  initialTouched?: boolean;
  initialError?: string;
}

export type SelectOption = { readonly value: string; readonly label: string };

export type InputFileProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value?: (string | File)[] | File[];
  variant?: 'primary' | 'secondary';
  label?: string;
  id: string;
  error?: boolean | string;
  touched?: boolean;
  setValue?: (
    value: (string | File)[],
    shouldValidate: boolean
  ) => Promise<void | FormikErrors<unknown>>;
  setTouched?: (
    touched: boolean,
    shouldValidate: boolean
  ) => Promise<void | FormikErrors<unknown>>;
  type?: InputFileType;
  inputClassName?: string;
  containerClassName?: string;
  initialValue?: string;
  initialTouched?: boolean;
  initialError?: string;
  labelClassName?: string;
};
