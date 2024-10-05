'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { LiaExchangeAltSolid } from 'react-icons/lia';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import Modal, { ModalProps } from '@/components/modal';

import ChangeCurrencyInput from '@/app/(authenticated-layout)/transactions/_components/ChangeCurrencyInput';
import {
  BASE_CURRENCY_QUERY_KEY,
  mockCurrencies,
  QUOTE_CURRENCY_QUERY_KEY,
} from '@/constant/appConstants';

export default function ChangeCurrenciesModal({ ...props }: ModalProps) {
  const router = useRouter();
  const [baseCurrencyLabel, setBaseCurrencyLabel] = useState('');
  const [quoteCurrencyLabel, setQuoteCurrencyLabel] = useState('');

  const searchParams = useSearchParams();
  const baseCurrency = searchParams.get(BASE_CURRENCY_QUERY_KEY) ?? '';
  const quoteCurrency = searchParams.get(QUOTE_CURRENCY_QUERY_KEY) ?? '';

  const switchCurrencies = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(BASE_CURRENCY_QUERY_KEY, quoteCurrency);
    params.set(QUOTE_CURRENCY_QUERY_KEY, baseCurrency);

    router.replace(`?${params.toString()}`, {
      scroll: false,
    });
  };

  useEffect(() => {
    const baseCurrencyCode = searchParams.get(BASE_CURRENCY_QUERY_KEY) ?? '';
    const quoteCurrencyCode = searchParams.get(QUOTE_CURRENCY_QUERY_KEY) ?? '';

    const baseCurrencyName = mockCurrencies.find(
      (currency) => currency.code === baseCurrencyCode
    )?.name;
    const quoteCurrencyName = mockCurrencies.find(
      (currency) => currency.code === quoteCurrencyCode
    )?.name;

    setBaseCurrencyLabel(baseCurrencyName ?? '');
    setQuoteCurrencyLabel(quoteCurrencyName ?? '');
  }, [searchParams]);

  return (
    <>
      <Modal {...props} className='h-auto w-4/5 lg:w-2/5 rounded-[16px]'>
        <section className='h-full w-full bg-bg-grey p-10 flex flex-col'>
          <div className='flex justify-between'>
            <p className='text-2xl font-semibold'>Change Currencies</p>
            <IconButton
              variant='ghost'
              icon={IoMdClose}
              onClick={props.handleCloseModal}
              className='text-2xl'
            />
          </div>

          <div className='mt-12 mb-10 w-4/5 mx-auto flex flex-col items-center gap-[10px]'>
            <ChangeCurrencyInput
              currencies={mockCurrencies}
              paramKey={BASE_CURRENCY_QUERY_KEY}
              value={baseCurrencyLabel}
              defaultCurrencyValue='CAD'
            />

            <div>
              <IconButton
                icon={LiaExchangeAltSolid}
                variant='ghost'
                onClick={switchCurrencies}
                className='text-3xl w-14 h-14 rotate-90 flex items-center justify-center rounded-[100%] bg-secondary-grey'
                style={{ boxShadow: '0px 1.51px 1.51px 0px #00000008' }}
              />
            </div>
            <ChangeCurrencyInput
              currencies={mockCurrencies}
              paramKey={QUOTE_CURRENCY_QUERY_KEY}
              value={quoteCurrencyLabel}
              defaultCurrencyValue='NGN'
            />
          </div>

          <Button
            onClick={props.handleCloseModal}
            className='mb-4 w-4/5 mx-auto py-4 rounded-lg text-center justify-center'
          >
            Confirm
          </Button>
        </section>
      </Modal>
    </>
  );
}
