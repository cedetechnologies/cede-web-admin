import { PropsWithChildren } from 'react';

import { PaddedContainer } from '@/components/lib';
import ActiveLink from '@/components/links/ActiveLink';

const settingsLinks = [
  { route: '', label: 'Profile', index: true },
  { route: 'teams', label: 'Teams', index: false },
  { route: 'activity', label: 'Activity', index: false },
  { route: 'developer', label: 'Developer', index: false },
];

export default function SettingsLayout({ children }: PropsWithChildren) {
  return (
    <PaddedContainer isScrollable>
      <div className='border-primary-grey mb-12 w-full flex items-center gap-2 border-b-2'>
        {settingsLinks.map((el) => (
          <ActiveLink
            key={el.label}
            href={`/settings${el.route && `/${el.route}`}`}
            className='-mb-[2px] cursor-pointer border-b-2 text-light-grey border-transparent pt-2 pb-4 px-6 font-medium'
            activeClassName='border-primary-pink text-primary-black'
            index={el.index}
          >
            {el.label}
          </ActiveLink>
        ))}
      </div>
      {children}
    </PaddedContainer>
  );
}
