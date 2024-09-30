import Image from 'next/image';
import Link from 'next/link';

import SidebarAnimatedContent from './sidebarAnimatedContent';

interface CedeLogoProps {
  isOpen?: boolean;
}

function CedeLogo({ isOpen = true }: CedeLogoProps) {
  return (
    <Link href='/'>
      <SidebarAnimatedContent isOpen={isOpen}>
        <figure className='relative aspect-[39/30] w-24'>
          <Image src='/svg/cedeHQ logo.svg' alt='Cede logo' fill={true} />
        </figure>
      </SidebarAnimatedContent>
    </Link>
  );
}

export default CedeLogo;
