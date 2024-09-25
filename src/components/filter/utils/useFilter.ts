import { useFormik } from 'formik';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import {
  filterInitialValues,
  filterValidationSchema,
} from '@/components/filter/utils/filterValidationSchema';
import { FilterValues } from '@/components/filter/utils/types';

const useFilter = () => {
  const [show, setShow] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [showCurrency, setShowCurrency] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const formik = useFormik<FilterValues>({
    initialValues: filterInitialValues,
    validationSchema: filterValidationSchema,
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

    if (formik.values.currency) params.set('currency', formik.values.currency);
    else params.delete('currency');

    if (formik.values.status) params.set('status', formik.values.status);
    else params.delete('status');

    return params.toString();
  }, [formik.values, searchParams]);

  const updateQueryParams = useCallback((): void => {
    const queryString = createQueryString();
    const fullUrl = `${window.location.pathname}?${queryString}`;
    router.push(fullUrl, { scroll: false });
  }, [createQueryString, router]);

  const handleInputChange = useCallback(
    (name: keyof FilterValues, value: string): void => {
      formik.setFieldValue(name, value, false);
    },
    [formik]
  );

  useEffect(() => {
    updateQueryParams();
  }, [formik.values, updateQueryParams]);

  useEffect(() => {
    if (formik.values.from_date && formik.values.to_date) {
      setShowDate(false);
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

  const fromDate = searchParams.get('from_date');
  const toDate = searchParams.get('to_date');
  const currency = searchParams.get('currency');
  const status = searchParams.get('status');

  const handleRefresh = () => {
    window.location.reload(); // Refreshes the current page
  };

  return {
    formik,
    show,
    showDate,
    showStatus,
    showCurrency,
    setShow,
    setShowDate,
    setShowStatus,
    setShowCurrency,
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
  };
};

export default useFilter;
