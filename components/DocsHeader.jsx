'use client';

import { usePathname } from 'next/navigation';

import { navigation } from '../lib/navigation';

export function DocsHeader({ title }) {
  let pathname = usePathname();
  let section = navigation.find((section) =>
    section.links.find((link) => link.href === pathname)
  );

  if (!title && !section) {
    return null;
  }

  return (
    <header className='mb-9 space-y-1'>
      {section && (
        <p className='mb-5 text-xl font-medium text-pena-500'>
          {section.title}
        </p>
      )}
      {title && (
        <h2 className='text-2xl font-normal tracking-tight text-slate-900 dark:text-pena-200'>
          {title}
        </h2>
      )}
    </header>
  );
}
