'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useId, useMemo } from 'react';
import ReactSelect from 'react-select';

import styles from './styles/select.module.scss';

import { cn } from '@/lib/utils';

import InputLabel from '@/components/input/inputLabel';
import { SelectOption, SelectProps } from '@/components/input/types';
const Select = ({
  label,
  labelClassName,
  id,
  required,
  setTouched,
  setValue,
  placeholder,
  value,
  options,
  disabled,
  name,
  error,
  touched,
  onValueChange,
  isLoading,
  autoFocus,
}: SelectProps) => {
  const handleChange = async (option: SelectOption | null) => {
    // logic here

    await setTouched?.(true, true);

    if (setValue && option) {
      await setValue(option.value, true);
      return;
    }

    if (onValueChange && option) {
      onValueChange(option);
      return;
    }
  };

  const handleBlur = async () => {
    if (setTouched) {
      await setTouched(true, true);
    }
  };

  const selectedValue: SelectOption = useMemo(() => {
    if (!value || !options) {
      return { value: '', label: placeholder ? placeholder : 'Select Option' };
    }
    const findSelected = options.find((option) => option.value === value);

    if (!findSelected) {
      return { value: '', label: placeholder ? placeholder : 'Select Option' };
    }
    return findSelected;
  }, [options, value, placeholder]);

  return (
    <div className={`w-full ${styles.select_wrapper}`}>
      <div className='flex flex-col gap-2'>
        {label && !!label.length && (
          <div className='flex items-center gap-1'>
            <InputLabel className={labelClassName} id={id} label={label} />
          </div>
        )}
        <ReactSelect
          placeholder={`${placeholder ? placeholder : 'Select Option'}`}
          value={selectedValue}
          autoFocus={autoFocus}
          options={options}
          onBlur={handleBlur}
          onFocus={handleBlur}
          id={id}
          onChange={handleChange}
          isDisabled={disabled}
          required={required}
          name={name}
          captureMenuScroll={true}
          instanceId={useId()}
          classNames={{
            option: (state) =>
              cn(
                'hover:bg-primary hover:text-white p-2 bg-transparent text-xs lg:text-sm focus:bg-primary focus-within:bg-primary',
                [state.isSelected && 'font-semibold'],
                [state.isFocused && 'bg-primary bg-opacity-10']
              ),
            control: () =>
              `w-full rounded-lg border px-2 py-2.5 md:py-3.5 text-xs outline-none transition-all duration-300 ease-in placeholder:text-xs md:px-4 lg:text-sm xl:placeholder:text-sm flex bg-white react-select`,
            placeholder: () =>
              'text-tertiary-grey text-xs md:text-sm lg:text-base',
            noOptionsMessage: () => 'text-xs lg:text-sm',
            dropdownIndicator: () => cn('text-primary-black/80 p-0'),
            input: () => cn('p-0'),
          }}
          styles={{
            control: () => {
              return {};
            },
            option: () => ({}),
            valueContainer: (baseStyles) => ({
              ...baseStyles,
              padding: 0,
              margin: 0,
            }),
            dropdownIndicator: () => ({}),
            input: (baseStyles) => ({ ...baseStyles, margin: 0, padding: 0 }),
            indicatorSeparator: () => ({}),
            placeholder: () => ({}),
            menuList: (base) => ({ ...base, maxHeight: '10rem' }),
          }}
          isLoading={isLoading}
        />
      </div>
      <AnimatePresence>
        {error && touched && !value && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            className='text-primary-red/50 pl-1 pt-1 text-xs font-semibold'
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Select;
