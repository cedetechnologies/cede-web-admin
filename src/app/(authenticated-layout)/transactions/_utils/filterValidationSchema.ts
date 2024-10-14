import * as Yup from 'yup';

import {
  CURRENCY,
  FROM_DATE,
  STATUS,
  TO_DATE,
} from '@/components/filter/utils/constant';

export const filterInitialValues: {
  [FROM_DATE]: string;
  [TO_DATE]: string;
  [CURRENCY]: string;
  [STATUS]: string;
} = {
  [FROM_DATE]: '',
  [TO_DATE]: '',
  [CURRENCY]: '',
  [STATUS]: '',
};

export const filterValidationSchema = Yup.object({
  [FROM_DATE]: Yup.string().nullable(),
  [TO_DATE]: Yup.string().nullable(),
  [CURRENCY]: Yup.string().nullable(),
  [STATUS]: Yup.string().nullable(),
});
