'use client';

import { FaCircleCheck } from 'react-icons/fa6';

import { Input } from '@/components/input';
import { InputProps } from '@/components/input/types';

type Props = Pick<InputProps, 'id' | 'value' | 'type' | 'label'>;

export default function VerificationInput({ id, value, label, type }: Props) {
  return (
    <Input
      id={id}
      value={value}
      label={label}
      endIcon={FaCircleCheck}
      type={type}
      disabled
      inputClassName='text-[#BDBDBD]'
      iconClassName='text-primary-green text-xl'
    />
  );
}
