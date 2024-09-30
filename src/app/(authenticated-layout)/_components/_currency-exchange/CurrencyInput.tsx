import Image from 'next/image';
import { ChangeEventHandler } from 'react';

import { cn } from '@/lib/utils';

import Dropdown from '@/components/dropdown';
import { Input } from '@/components/input';

import { formatAmount } from '@/utils/cc_format';

type Props = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  currencies: { code: string; flag: string }[];
  isEditable: boolean;
  paramKey: string;
  defaultCurrencyValue?: string;
};

export default function CurrencyInput({
  value,
  onChange,
  currencies,
  isEditable,
  paramKey,
  defaultCurrencyValue,
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
    <div className='w-full flex items-center pl-3 pr-[10px] lg:pl-[36px] lg:pr-[34px] bg-secondary-grey rounded-[20px] py-3'>
      <Input
        id=''
        value={formatAmount(value)}
        onChange={onChange}
        disabled={!isEditable}
        className={cn('w-full py-0 !text-3xl', [!isEditable && 'text-primary'])}
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
  );
}
