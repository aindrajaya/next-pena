import Link from 'next/link';

import { Icon } from './Icon';

export function QuickLinks({ children }) {
  return (
    <div className='not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-3'>
      {children}
    </div>
  );
}

export function QuickLink({ title, description, href, icon }) {
  return (
    <div className='group relative rounded-xl border border-slate-200 dark:border-slate-800'>
      <div className='absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]' />
      <div className='relative overflow-hidden rounded-xl p-6'>
        <div class='flex items-center mb-6'>
          <div class='rounded p-2 bg-slate-800'>
            <Icon icon={icon} className='h-6 w-6' />
          </div>
          <h2 className='ml-4 text-base text-pena-900 dark:text-pena-500'>
            <Link href={href}>
              <span className='absolute -inset-px rounded-xl' />
              {title}
            </Link>
          </h2>
        </div>
        <p className='mt-1 text-sm text-slate-700 dark:text-slate-400'>
          {description}
        </p>
      </div>
    </div>
  );
}
