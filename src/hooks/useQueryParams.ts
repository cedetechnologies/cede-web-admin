'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export const useQueryParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQueryParam = (
    param: Record<string, string | number | boolean>,
    opts?: { scroll?: boolean }
  ) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    Object.keys(param).forEach((p) => params.set(p, String(param[p])));
    router.replace(`?${params.toString()}`, { scroll: false, ...opts });
  };

  const removeQueryParam = (param: string | string[]) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if (typeof param === 'string') {
      params.delete(param);
    } else {
      Object.keys(param).forEach((p) => params.delete(p));
    }
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return {
    query: searchParams,
    updateQueryParam,
    removeQueryParam,
  };
};
