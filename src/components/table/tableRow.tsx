import { PropsWithChildren } from 'react';

const TableRow: React.FC<PropsWithChildren> = ({ children }) => (
  <tr className='relative border-b border-[#D1D1D2] py-1.5'>{children}</tr>
);

export default TableRow;
