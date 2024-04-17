import Link from 'next/link';
import Image from 'next/legacy/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import LogoPena from '../public/img/pena-text.png';

import { navigation } from '../lib/navigation';
import DynamicColorIcon from './IconTail';

export function Navigation({ className, onLinkClick }) {
  let pathname = usePathname();

  return (
    <div className='bg-background w-[20%] border-muted sidebar-width sticky top-16-screen py-8 pl-8 w-1/4 hidden lg:block overflow-y-scroll'>
      {/* <nav className={clsx('text-base lg:text-sm', className)}> */}
      <div className='relative flex flex-grow basis-0 items-center pb-8'>
        <Link href='/' aria-label='Home page'>
          {/* <Logomark className="h-9 w-9 lg:hidden" /> */}
          {/* <Logo className="hidden h-9 w-auto fill-slate-700 lg:block dark:fill-pena-500" /> */}
          <Image src={LogoPena} alt='Pena Logo' width={75} height={40} />
        </Link>
      </div>
      <ul role='list' className='space-y-9'>
        {navigation.map((section) => (
          <li style={{ marginTop: '1rem' }} key={section.title}>
            <h2 className='pt-2 text-xs text-slate-900 dark:text-white title-font'>
              {section.title}
            </h2>
            <ul
              role='list'
              className='space-y-2 lg:mt-3 lg:space-y-4 lg:border-slate-200 dark:border-slate-800'
            >
              {section.links.map((link) => (
                <li key={link.href} className='relative'>
                  <Link
                    href={link.href}
                    onClick={onLinkClick}
                    className={clsx(
                      'flex w-full',
                      link.href === pathname
                        ? 'mb-[-7px] font-semibold text-pena-500'
                        : 'mb-[-7px] text-slate-500 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
                    )}
                    // className="my-5 flex items-center space-x-4"
                  >
                    <div className='bg-surface-100 flex items-center justify-center'>
                      {/* <Image
                        className="rounded"
                        width={24}
                        height={24}
                        alt="name"
                        // src={"/img/icons/menu/rest.svg"}
                        // src={link.icon}
                        src={"/img/icons-pena/arch.svg"}
                      /> */}
                      <DynamicColorIcon svg={link.icon} />
                    </div>
                    <p className='text-foreground text-sm ml-2'>{link.title}</p>
                  </Link>
                </li>
              ))}
              <div className='h-px w-[70%] border-b pt-4 grey-color'></div>
            </ul>
          </li>
        ))}
      </ul>
      {/* </nav> */}
    </div>
  );
}
