'use client';

import { AnimatePresence, motion, Variants } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  ReactNode,
  SelectHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconType } from 'react-icons';
import { PiCaretDownBold } from 'react-icons/pi';

import { cn } from '@/lib/utils';
import useDisclosure from '@/hooks/useDisclosure';
import useOnClickOutside from '@/hooks/useOnClickOutside';

export const dropdownAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: -5,
    transition: {
      duration: 0.2,
      ease: 'linear',
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'linear',
    },
  },
  exit: {
    opacity: 0,
    y: -5,
    transition: {
      duration: 0.2,
      ease: 'linear',
    },
  },
};

export const centerAnchorDropdownVariants: Variants = {
  initial: {
    opacity: 0,
    y: -5,
    x: '-50%',
    transition: {
      duration: 0.2,
      ease: 'linear',
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    x: '-50%',
    transition: {
      duration: 0.2,
      ease: 'linear',
    },
  },
  exit: {
    opacity: 0,
    y: -5,
    x: '-50%',
    transition: {
      duration: 0.2,
      ease: 'linear',
    },
  },
};
type DropdownOption = { label: string; value: string; render?: ReactNode };

export interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  defaultLabel?: string | ReactNode;
  leftIcon?: IconType | LucideIcon;
  options: DropdownOption[];
  paramKey: string;
  deleteKeys?: string | string[];
  containerClassName?: string;
  menuContainerClassName?: string;
  anchor?: 'left' | 'center' | 'right';
  handleChange?: () => void;
  defaultValue?: string;
  dropdownButtonClassName?: string;
}

const Dropdown = ({
  options,
  paramKey,
  label,
  containerClassName,
  leftIcon: LeftIcon,
  menuContainerClassName,
  deleteKeys,
  anchor = 'center',
  defaultLabel,
  handleChange,
  defaultValue,
  dropdownButtonClassName,
}: DropdownProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentValue, setCurrentValue] = useState<ReactNode | string>('');

  // Value of the search parameter
  const paramValue = searchParams.get(paramKey);

  const {
    isOpen: isDropdownOpen,
    toggle: toggleDropdown,
    close: closeDropdown,
  } = useDisclosure();

  useOnClickOutside(ref, closeDropdown);

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (value: string) => {
      // Create an updatable search param
      const params = new URLSearchParams(searchParams.toString());

      value && params.set(paramKey, value);
      !value && params.delete(paramKey);

      if (deleteKeys) {
        if (typeof deleteKeys === 'string') {
          params.delete(deleteKeys);
        }

        if (Array.isArray(deleteKeys)) {
          deleteKeys.forEach((key) => params.delete(key));
        }
      }

      return params.toString();
    },
    [searchParams, deleteKeys, paramKey]
  );

  const handleChangeParamKey = useCallback(
    (option: DropdownOption) => {
      const params = createQueryString(option.value);

      router.replace(`?${params}`, {
        scroll: false,
      });

      handleChange?.();

      closeDropdown();
    },
    [createQueryString, router, closeDropdown, handleChange]
  );

  // set current value to default value if there's no current paramkey value
  useEffect(() => {
    if (defaultValue && !searchParams.get(paramKey)) {
      const params = createQueryString(defaultValue);

      router.replace(`?${params}`, {
        scroll: false,
      });

      const option = options.find((option) => option.value === defaultValue);

      setCurrentValue(() => {
        if (option) {
          if (option.render) return option.render;
          return option.value;
        }
        return '';
      });
    }
  }, [
    options,
    defaultValue,
    router,
    createQueryString,
    paramKey,
    searchParams,
  ]);

  // set current value every time param key value changes
  useEffect(() => {
    const value = searchParams.get(paramKey);

    const option = options.find((option) => option.value === value);

    setCurrentValue(() => {
      if (option) {
        if (option.render) return option.render;
        return option.value;
      }
      return '';
    });
  }, [options, paramKey, searchParams]);

  return (
    <div
      className={cn('relative w-full', [
        containerClassName && containerClassName,
      ])}
      ref={ref}
    >
      <button
        className={cn(
          'border-tertiary-grey relative flex w-full cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-xs font-medium lg:text-sm xl:text-base',
          [dropdownButtonClassName && dropdownButtonClassName]
        )}
        onClick={toggleDropdown}
      >
        {LeftIcon && (
          <div>
            <LeftIcon size='1em' className={cn('')} />
          </div>
        )}
        <span>{currentValue ?? label}</span>
        <span
          className={cn('ml-auto text-[#757679] transition-all duration-300', [
            isDropdownOpen && '-rotate-180',
          ])}
        >
          <PiCaretDownBold />
        </span>
      </button>

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            variants={
              anchor === 'center'
                ? centerAnchorDropdownVariants
                : dropdownAnimationVariants
            }
            initial='initial'
            exit='exit'
            animate='animate'
            key={`${paramKey}-dropdown`}
            className={cn(
              'absolute top-full z-[1] mt-1 flex w-max min-w-full flex-col items-start gap-2 rounded-lg bg-white px-6 py-4 shadow',
              [
                anchor === 'left' && 'left-0',
                anchor === 'center' && 'left-1/2',
                anchor === 'right' && 'right-0',
              ],
              [menuContainerClassName && menuContainerClassName]
            )}
          >
            {defaultLabel && (
              <button
                className={cn('text-sm hover:font-semibold', [
                  !paramValue && 'text-secondary font-medium',
                ])}
                onClick={() => handleChangeParamKey({ label: '', value: '' })}
              >
                {defaultLabel}
              </button>
            )}
            {options.map((option) => (
              <button
                key={option.label}
                onClick={() => handleChangeParamKey(option)}
                className={cn('text-sm hover:font-semibold', [
                  option.value === paramValue && 'font-bold',
                ])}
              >
                {option.render ?? option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
