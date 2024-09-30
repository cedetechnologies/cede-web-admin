import { SidebarLinksType } from './Sidebar';
import SidebarLinkItem from './SidebarLinkItem';

interface SidebarLinkProps extends SidebarLinksType {
  isOpen: boolean;
}

const SidebarLink = (props: SidebarLinkProps) => {
  return (
    <li className='w-full'>
      {props.href && <SidebarLinkItem {...props} href={props.href} />}
    </li>
  );
};

export default SidebarLink;
