import Link from 'next/link';
import { Icon } from './Icon';
import {
  Bolt,
  BadgeCheck,
  Terminal,
  Pointer,
  PenTool,
  Play,
  Users,
  Pyramid,
  HardDriveDownload,
  BookMarked,
  BookType,
  HeartHandshake,
  UserCog,
} from 'lucide-react';

export function QuickLinks({ children }) {
  return (
    <div>
      <p className='text-xl font-bold'>Getting Started</p>
      <div className='not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-3'>
        {children}
      </div>
    </div>
  );
}

export function QuickLink({ title, description, href, icon }) {
  const getIconComponent = (icon) => {
    switch (icon) {
      case 'cursor':
        return <Play />;
      case 'pen':
        return <PenTool />;
      case 'terminal':
        return <BookMarked />;
      case 'user':
        return <UserCog />;
      case 'bold':
        return <HeartHandshake />;
      case 'arch':
        return <BookType />;
      case 'start':
        return <BadgeCheck />;
      default:
        return <HardDriveDownload />;
    }
  };

  return (
    <div className='group relative rounded-xl border border-slate-200 dark:border-slate-800'>
      <div className='relative overflow-hidden rounded-xl p-6'>
        <div className='flex items-center mb-6'>
          <div className='rounded p-2 bg-pena-400 text-white'>
            {' '}
            {/* Added text-white for white icon */}
            {getIconComponent(icon)}
          </div>
          <h2 className='ml-4 text-base text-pena-900 dark:text-pena-500'>
            <Link href={href}>{title}</Link>
          </h2>
        </div>
        <p className='mt-1 text-sm text-slate-700 dark:text-slate-400'>
          {description}
        </p>
      </div>
    </div>
  );
}
