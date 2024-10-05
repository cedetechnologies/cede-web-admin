import Image from 'next/image';
import { ChangeEventHandler } from 'react';

import { cn } from '@/lib/utils';

import Dropdown from '@/components/dropdown';
import { Input, InputLabel } from '@/components/input';

import { mockCurrencies } from '@/constant/appConstants';

type Props = {
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  currencies: typeof mockCurrencies;
  paramKey: string;
  defaultCurrencyValue?: string;
  inputLabel?: string;
};

export default function ChangeCurrencyInput({
  value,
  onChange,
  currencies,
  paramKey,
  defaultCurrencyValue,
  inputLabel: label,
}: Props) {
  const currencyOptions = currencies.map((cur) => ({
    value: cur.code,
    label: cur.code,
    render: (
      <div className='flex items-center gap-[6px]'>
        <div className='w-6 h-6'>
          <Image
            key={cur.code}
            src={cur.flag}
            alt={cur.code}
            width={24}
            height={24}
            className='rounded-[100%] w-6 h-6 object-cover'
          />
        </div>
        <p className=''>{cur.code}</p>
      </div>
    ),
  }));

  return (
    <div className='w-full'>
      {label && (
        <div className='flex flex-col items-start justify-center gap-1'>
          {label && !!label.length && <InputLabel id={label} label={label} />}
        </div>
      )}
      <div className='w-full flex items-center pl-4 pr-[14px] border bg-secondary-grey rounded-[20px] py-3'>
        <Input
          id={label ?? ''}
          value={value}
          onChange={onChange}
          disabled
          className={cn('w-full py-0')}
          containerClassName='border-none bg-transparent py-0'
        />

        <Dropdown
          label='Currency'
          paramKey={paramKey}
          options={currencyOptions}
          defaultValue={defaultCurrencyValue}
          containerClassName='w-fit'
          dropdownButtonClassName='border-none'
        />
      </div>
    </div>
  );
}
