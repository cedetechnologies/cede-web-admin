import getFlagUrl from '@/utils/cc_format';

export const AXIOS_TIMEOUT_TIME = 30000;
export const AXIOS_TIMEOUT_MSG = 'Request Timeout';
export const TOKEN_EXPIRED_MSG = 'session expired. please login again';
export const REFETCH_TIME = 43200000;

// IMAGE URL
export const IMAGE_PUBLIC_URL =
  `${process.env.NEXT_PUBLIC_BASE_URL}/images` as const;

// Redux Reducers Key
export const GLOBAL_API_REDUCER_PATH = 'globalApi' as const;
export const CHANGE_PASSWORD_REDUCER_PATH = 'changePassword' as const;

export const POST_METHOD = 'POST';
export const GET_METHOD = 'GET';
export const PUT_METHOD = 'PUT';
export const DELETE_METHOD = 'DELETE';
export const PATCH_METHOD = 'PATCH';

// FORGOT PASSWORD REDUCER PATH START
export const FORGOT_PASSWORD_REDUCER_PATH = 'forgot_password' as const;
// FORGOT PASSWORD REDUCER PATH END
export const LOGIN_REDUCER_PATH = 'login' as const;
export const BLACKLIST_USER_REDUCER_PATH = 'blacklistUser' as const;
export const TRANSACTION_DETAILS_REDUCER_PATH = 'transactionDetails' as const;
export const EDIT_EXCHANGE_RATE_REDUCER_PATH = 'editExchangeRate' as const;

export const CURRENCY_FROM_QUERY_KEY = 'currencyFrom';
export const CURRENCY_TO_QUERY_KEY = 'currencyTo';

export const BASE_CURRENCY_QUERY_KEY = 'baseCurrency';
export const QUOTE_CURRENCY_QUERY_KEY = 'quoteCurrency';

export const mockCurrencies = [
  { code: 'CAD', flag: getFlagUrl('CA'), name: 'Canadian Dollar' },
  { code: 'NGN', flag: getFlagUrl('NG'), name: 'Nigerian Naira' },
  { code: 'USD', flag: getFlagUrl('US'), name: 'United States Dollar' },
  // Add more currencies as needed
];
