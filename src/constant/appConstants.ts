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

export const CURRENCY_FROM_QUERY_KEY = 'currencyFrom';
export const CURRENCY_TO_QUERY_KEY = 'currencyTo';
