type AnyFunction = (...args: never[]) => void;

export default function debounce(
  func: AnyFunction,
  delay: number
): AnyFunction {
  let timeoutId: NodeJS.Timeout;

  return function (...args: never[]) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
