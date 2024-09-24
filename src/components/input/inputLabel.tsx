import { cn } from '@/lib/utils';

interface InputLabelProps {
  id?: string;
  label?: string;
  className?: string;
}

const InputLabel = ({ id, label, className }: InputLabelProps) => {
  if (!id || !label) {
    return <></>;
  }
  return (
    <label
      htmlFor={id}
      className={cn(
        'text-primary-black text-xs font-figtree font-medium md:text-sm lg:text-sm',
        [className && className]
      )}
    >
      {label}
    </label>
  );
};

export default InputLabel;
