'use client';

import { useFormik } from 'formik';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { ImSpinner2 } from 'react-icons/im';

import { cn } from '@/lib/utils';

import { initialValues, validationSchema } from './validation';

export interface InputSearchProp
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
  touched?: boolean;
  error?: string;
  inputClassName?: string;
  containerClassName?: string;
}

const InputSearch = ({
  isLoading,
  disabled,
  variant = 'primary',
  touched,
  error,
  className,
  inputClassName,
  containerClassName,
  ...rest
}: InputSearchProp) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get('search');

  const memoizedInitialValues = useMemo(() => {
    return {
      ...initialValues,
      search: search && typeof search === 'string' ? search : '',
    };
  }, [search]);

  const formik = useFormik({
    initialValues: memoizedInitialValues,
    validationSchema,
    onSubmit: (values) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));

      values.search && params.set('search', values.search);

      !values.search && params.delete('search');

      params.delete('page');

      router.replace;

      router.replace(`?${params.toString()}`, { scroll: false });

      formik.resetForm();
    },
    enableReinitialize: true,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={cn(
        'relative flex w-full flex-row items-center rounded-[12px] border text-xs transition-all duration-300 ease-linear md:text-sm lg:text-base',
        [
          variant === 'primary' && 'border-[#EEEEEE] bg-white',
          variant === 'secondary' && 'bg-secondary-grey',
        ],
        [touched && error && 'bg-primary-red/10'],
        [containerClassName && containerClassName]
      )}
    >
      <input
        type='text'
        inputMode='search'
        id='search'
        onChange={formik.handleChange}
        style={{
          backgroundColor: 'transparent',
        }}
        value={formik.values.search}
        className={cn(
          'border-primary-grey placeholder:text-[#BDBDBD] text-primary-black w-full rounded-lg border-0 bg-transparent bg-[url(https://api.iconify.design/uil/search.svg)] bg-[top_50%_left_1rem] bg-no-repeat px-2  py-2.5 pl-10 text-xs shadow-none outline-none ring-0 placeholder:text-xs focus:ring-0 sm:pl-[3.5rem] md:px-4 md:py-3.5 md:pl-12 md:text-sm md:placeholder:text-sm lg:text-base lg:placeholder:text-base',
          [className && className],
          [inputClassName && inputClassName]
        )}
        disabled={disabled || isLoading}
        {...rest}
      />
      {isLoading && (
        <div className='text-secondary absolute right-6 top-1/2 -translate-y-1/2'>
          <ImSpinner2 className='animate-spin' />
        </div>
      )}
    </form>
  );
};

export default InputSearch;
