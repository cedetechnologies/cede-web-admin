import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

export interface TableDataProps extends PropsWithChildren {
  className?: string;
}

const TableData: React.FC<TableDataProps> = ({ children, className }) => (
  <td className={cn('text-secondary-black px-4 text-left', className)}>
    {children}
  </td>
);

export default TableData;
