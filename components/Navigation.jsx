import Link from 'next/link'
import Image from 'next/legacy/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { navigation } from '../lib/navigation'
import DynamicColorIcon from './IconTail'

export function Navigation({ className, onLinkClick }) {
  let pathname = usePathname()

  return (
    <div
    className="bg-background border-muted sidebar-width sticky top-16
    h-screen overflow-y-scroll border-r py-8 px-6 sidebar-menu-container hidden lg:block"
    >
    {/* <nav className={clsx('text-base lg:text-sm', className)}> */}
      <ul role="list" className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-display font-medium text-slate-900 dark:text-white">
              {section.title}
            </h2>
            <ul
              role="list"
              className="mt-2 space-y-2 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800"
            >
              {section.links.map((link) => (
                <li key={link.href} className="relative">

                  <Link
                    href={link.href}
                    onClick={onLinkClick}
                    className={clsx(
                      'flex w-full pl-3.5',
                      link.href === pathname
                        ? 'font-semibold text-pena-500'
                        : 'text-slate-500 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300',
                    )}
                    // className="my-5 flex items-center space-x-4"
                  >
                    <div className="h-10 w-10 rounded bg-surface-100 flex items-center justify-center">
                      {/* <Image
                        className="rounded"
                        width={24}
                        height={24}
                        alt="name"
                        // src={"/img/icons/menu/rest.svg"}
                        // src={link.icon}
                        src={"/img/icons-pena/arch.svg"}
                      /> */}
                      <DynamicColorIcon svg={link.icon}/>
                    </div>
                    <p className="text-foreground font-normal mt-2">
                      {link.title}
                    </p>
                    
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    {/* </nav> */}
    </div>

  )
}