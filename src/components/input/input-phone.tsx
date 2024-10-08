'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { IoCaretDownOutline } from 'react-icons/io5';
import PhoneInput, { Value } from 'react-phone-number-input';

import 'react-phone-number-input/style.css';

import { cn } from '@/lib/utils';

import { InputLabel } from '@/components/input';
import { InputProps } from '@/components/input/types';

type Props = InputProps & {
  handleChange: (value: Value) => void;
  endIcon?: IconType;
  iconClassName?: string;
};

export default function Phone({
  id,
  labelClassName,
  containerClassName,
  label,
  touched,
  error,
  type = 'text',
  value,
  handleChange,
  required,
  endIcon: EndIcon,
  iconClassName,
  inputClassName,
  ...rest
}: Props) {
  delete rest.initialError;
  delete rest.initialTouched;
  delete rest.initialValue;

  return (
    <div className='w-full'>
      <div className='flex flex-col gap-1'>
        <div className='flex items-center gap-1'>
          {label && (
            <InputLabel className={labelClassName} id={id} label={label} />
          )}
          {required && <span className='text-danger'>*</span>}
        </div>
        <div
          className={cn(
            'focus-within:border-primary bg-white rounded-[8px] flex w-full flex-row items-center border border-primary-grey text-xs transition-all duration-300 ease-linear md:text-sm lg:text-base',
            [touched && error && 'bg-[red]/10 border-[red]'],
            [containerClassName && containerClassName]
          )}
        >
          <PhoneInput
            defaultCountry='US'
            countries={['US', 'CA']}
            international
            countryCallingCodeEditable={false}
            type={type}
            value={value as string}
            id={id}
            {...rest}
            onChange={handleChange}
            required={required}
            className={cn('!border-none !outline-none', [
              inputClassName && inputClassName,
            ])}
            countrySelectProps={{
              arrowComponent: () => <IoCaretDownOutline />,
            }}
          />
          {EndIcon && (
            <div
              className={cn('pr-2 text-secondary-grey text-lg', [
                iconClassName && iconClassName,
              ])}
            >
              <EndIcon />
            </div>
          )}
        </div>
      </div>
      <AnimatePresence>
        {error && error !== 'ignore' && touched && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            className='pl-1 pt-1 text-xs font-semibold text-red-700'
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
