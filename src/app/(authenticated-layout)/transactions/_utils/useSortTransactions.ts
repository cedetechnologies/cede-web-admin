import { useFormik } from 'formik';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { useQueryParams } from '@/hooks/useQueryParams';

import { FilterValues } from '@/components/filter/utils/types';

type Tab = 'name' | 'date' | 'amount' | '';

const useSortTransactions = () => {
  const [show, setShow] = useState(false);
  const [openTab, setOpenTab] = useState<Tab>('');
  const searchParams = useSearchParams();
  const router = useRouter();

  const { removeQueryParam } = useQueryParams();

  const formik = useFormik({
    initialValues: {
      from_date: '',
      to_date: '',
      name: '',
      amount: '',
    },
    onSubmit: () => {
      // Submit logic
    },
  });

  const createQueryString = useCallback((): string => {
    const params = new URLSearchParams(searchParams.toString());

    // Add filter params to query string
    if (formik.values.from_date)
      params.set('from_date', formik.values.from_date);
    else params.delete('from_date');

    if (formik.values.to_date) params.set('to_date', formik.values.to_date);
    else params.delete('to_date');

    if (formik.values.name) params.set('name', formik.values.name);
    else params.delete('name');

    if (formik.values.amount) params.set('amount', formik.values.amount);
    else params.delete('amount');

    return params.toString();
  }, [formik.values, searchParams]);

  const updateQueryParams = useCallback((): void => {
    const queryString = createQueryString();
    const fullUrl = `${window.location.pathname}?${queryString}`;
    router.push(fullUrl, { scroll: false });
  }, [createQueryString, router]);

  const handleInputChange = useCallback(
    (name: string, value: string): void => {
      formik.setFieldValue(name, value, false);
    },
    [formik]
  );

  useEffect(() => {
    updateQueryParams();
  }, [formik.values, updateQueryParams]);

  useEffect(() => {
    if (formik.values.from_date && formik.values.to_date) {
      close();
      setShow(false);
    }
  }, [formik.values.from_date, formik.values.to_date]);

  const removeFilter = (key: keyof FilterValues): void => {
    formik.setFieldValue(key, '');
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);
    router.push(`${window.location.pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  const fromDate = searchParams.get('from_date') ?? '';
  const toDate = searchParams.get('to_date') ?? '';
  const name = searchParams.get('name');
  const amount = searchParams.get('amount');

  const handleRefresh = () => {
    removeQueryParam(['amount', 'name', 'from_date', 'to_date']);
  };

  function close() {
    setShow(false);
    setOpenTab('');
  }

  function handleOpenTab(tab: Tab) {
    setOpenTab(tab);
  }

  function isTabOpen(tab: string) {
    return openTab === tab;
  }

  return {
    formik,
    show,
    setShow,
    handleInputChange,
    removeFilter,
    updateQueryParams,
    createQueryString,
    searchParams,
    fromDate,
    toDate,
    name,
    handleRefresh,
    isTabOpen,
    close,
    handleOpenTab,
    amount,
  };
};

export default useSortTransactions;
