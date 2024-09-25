export const pick = (object: Record<string, unknown>, keys: string[]) => {
  if (!Object.keys(object).length || !keys.length) return {};
  const obj: typeof object = {};
  keys.forEach((key) => (obj[key] = object[key]));
  return obj;
};

export const omit = (object: Record<string, unknown>, keys: string[]) => {
  if (!Object.keys(object).length || !keys.length) return {};
  keys.forEach((key) => delete object[key]);
  return object;
};

export const convertObjectToFormData = (obj: Record<string, unknown>) => {
  const formData = new FormData();
  Object.keys(obj).forEach((k) => formData.append(k, obj[k] as string | Blob));
  return formData;
};
