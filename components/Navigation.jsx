import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import LogoPena from '../public/img/pena-text.png';
import DynamicColorIcon from './IconTail';

export function Navigation({ className, onLinkClick }) {
  const pathname = usePathname();

  const [openDropdown, setOpenDropdown] = useState(-1); // Default state set to -1 for no open dropdown

  const navigation = [
    {
      title: 'Introduction',
      links: [
        { title: 'Getting Started', href: '/', icon: 'start' },
        {
          title: 'Installation',
          href: '/docs/installation',
          icon: 'install',
          children: [
            {
              title: 'Windows Installation',
              href: '/docs/installation/windows',
            },
            { title: 'Mac Installation', href: '/docs/installation/mac' },
            { title: 'Linux Installation', href: '/docs/installation/linux' },
          ],
        },
      ],
    },
    // Other sections...
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown((prevIndex) => (prevIndex === index ? -1 : index)); // Toggle open dropdown index
  };

  const getDropdownIcon = (index) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className={`h-4 w-4 ml-auto text-gray-500 transform ${
          openDropdown === index ? 'rotate-90' : 'rotate-0'
        }`}
        viewBox='0 0 20 20'
        fill='currentColor'
        aria-hidden='true'
      >
        <path
          fillRule='evenodd'
          d='M10 3a.75.75 0 01.75.75V14l3.622-3.622a.75.75 0 111.06 1.06l-5.5 5.5a.75.75 0 01-1.06 0l-5.5-5.5a.75.75 0 111.06-1.06L9.25 14V3.75A.75.75 0 0110 3z'
          clipRule='evenodd'
        />
      </svg>
    );
  };

  return (
    <div className='bg-background w-[20%] border-muted sidebar-width sticky top-16-screen py-8 pl-8 w-1/4 hidden lg:block overflow-y-scroll'>
      <div className='relative flex flex-grow basis-0 items-center pb-8'>
        <Link href='/' aria-label='Home page'>
          <Image src={LogoPena} alt='Pena Logo' width={75} height={40} />
        </Link>
      </div>
      <ul role='list' className='space-y-9'>
        {navigation.map((section, index) => (
          <li key={section.title}>
            <h2 className='pt-2 text-xs text-slate-900 dark:text-white title-font'>
              {section.title}
            </h2>
            <ul className='space-y-2 lg:mt-3 lg:space-y-4 lg:border-slate-200 dark:border-slate-800'>
              {section.links.map((link, linkIndex) => (
                <li key={link.href} className='relative'>
                  {link.children ? (
                    <>
                      <div
                        className='flex items-center cursor-pointer'
                        onClick={() => toggleDropdown(index)}
                      >
                        <DynamicColorIcon svg={link.icon} />
                        <p className='text-foreground text-sm ml-2'>
                          {link.title}
                        </p>
                        {getDropdownIcon(index)}
                      </div>
                      {openDropdown === index && (
                        <ul className='pl-4 space-y-2'>
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onLinkClick}
                                className={clsx(
                                  'text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300'
                                )}
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={onLinkClick}
                      className={clsx(
                        'flex items-center',
                        link.href === pathname
                          ? 'font-semibold text-pena-500'
                          : 'text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300'
                      )}
                    >
                      <DynamicColorIcon svg={link.icon} />
                      <p className='text-foreground text-sm ml-2'>
                        {link.title}
                      </p>
                    </Link>
                  )}
                </li>
              ))}
              <div className='h-px w-[70%] border-b pt-4 grey-color'></div>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
