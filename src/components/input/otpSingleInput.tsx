import { cn } from '@/lib/utils';

const OTPSingleInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return (
    <input
      {...props}
      className={cn(
        'rounded-[10px] border py-4 text-center',
        'focus:ring-secondary border-secondary-grey',
        [props.className && props.className]
      )}
      inputMode='numeric'
      style={{
        width: '100%',
        border: '1px solid #D1D1D2',
      }}
    />
  );
};

export default OTPSingleInput;
