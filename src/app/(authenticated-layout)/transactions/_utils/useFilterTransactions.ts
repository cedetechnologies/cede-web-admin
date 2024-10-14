import { useFormik } from 'formik';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { useQueryParams } from '@/hooks/useQueryParams';

import { FilterValues } from '@/components/filter/utils/types';

type Tab = 'currency' | 'date' | 'type' | 'currency' | '' | 'status';

const useFilterTransactions = () => {
  const [show, setShow] = useState(false);
  const [openTab, setOpenTab] = useState<Tab>('');
  const searchParams = useSearchParams();
  const router = useRouter();

  const { removeQueryParam } = useQueryParams();

  const formik = useFormik({
    initialValues: {
      status: '',
      type: '',
      currency: '',
    },
    onSubmit: () => {
      // Submit logic
    },
  });

  const createQueryString = useCallback((): string => {
    const params = new URLSearchParams(searchParams.toString());

    // Add filter params to query string
    if (formik.values.currency) params.set('currency', formik.values.currency);
    else params.delete('currency');

    if (formik.values.status) params.set('status', formik.values.status);
    else params.delete('status');

    if (formik.values.type) params.set('type', formik.values.type);
    else params.delete('type');

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

  const removeFilter = (key: keyof FilterValues): void => {
    formik.setFieldValue(key, '');
    const params = new URLSearchParams(searchParams.toString());
    params.delete(key);
    router.push(`${window.location.pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  const fromDate = searchParams.get('from_date');
  const toDate = searchParams.get('to_date');
  const currency = searchParams.get('currency');
  const status = searchParams.get('status');
  const type = searchParams.get('type');

  const handleRefresh = () => {
    removeQueryParam(['currency', 'status', 'type', 'from_date', 'to_date']);
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
    currency,
    status,
    handleRefresh,
    isTabOpen,
    close,
    handleOpenTab,
    type,
  };
};

export default useFilterTransactions;
