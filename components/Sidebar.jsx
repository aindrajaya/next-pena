import Link from "next/link";
import Image from "next/legacy/image";
import React from "react";
import clsx from "clsx";
import LogoPena from "../public/img/pena-text.png";
import DynamicColorIcon from "./IconTail";
const Sidebar = ({
  isHomepage,
  currentLink,
  contents,
  onLinkClick,
  pathname,
}) => {
  return (
    <div className="bg-white h-screen border-muted sidebar-width absolute lg:sticky top-16-screen px-6 py-8 md:p-8 w-full lg:w-[380px] overflow-y-scroll">
      <div className="relative hidden md:flex flex-grow basis-0 items-center top-0 sticky z-10 mb-8">
        <Link href="/" aria-label="Home page">
          <Image src={LogoPena} alt="Pena Logo" width={75} height={40} />
        </Link>
      </div>
      {!isHomepage && (
        <Link href="/" className="flex flex-row gap-x-2 mb-8">
          <div className="flex items-center align-center">
            <svg
              fill="#ED8213"
              width="16px"
              height="16px"
              viewBox="0 0 200 200"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <path d="M160,89.75H56l53-53a9.67,9.67,0,0,0,0-14,9.67,9.67,0,0,0-14,0l-56,56a30.18,30.18,0,0,0-8.5,18.5c0,1-.5,1.5-.5,2.5a6.34,6.34,0,0,0,.5,3,31.47,31.47,0,0,0,8.5,18.5l56,56a9.9,9.9,0,0,0,14-14l-52.5-53.5H160a10,10,0,0,0,0-20Z" />
            </svg>
          </div>
          <p className="text-[12px] text-pena-500">Back to Home</p>
        </Link>
      )}

      {isHomepage && (
        <ul role="list" className="space-y-9">
          {contents.map((section) => (
            <li key={section.title}>
              <h2 className="text-s text-slate-900 dark:text-white title-font">
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
                      onClick={() => onLinkClick(link.href, section.id)}
                      className={clsx(
                        "flex w-full text-slate-500 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                      )}
                    >
                      <div className="bg-surface-100 flex items-center justify-center">
                        <DynamicColorIcon svg={link.icon} />
                      </div>
                      <p className="text-foreground text-sm ml-2">
                        {link.title}
                      </p>
                    </Link>
                  </li>
                ))}
                <div className="h-px w-full border-b pb-1 grey-color"></div>
              </ul>
            </li>
          ))}
        </ul>
      )}
      {!isHomepage && currentLink?.navigations?.length > 0 && (
        <>
          <div className="flex flex-col pb-4 border-b">
            <div className="mb-2 flex flex-row gap-x-4">
              <div className="flex items-center align-center">
                <svg
                  class="text-red-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="#ED8213"
                  fill="none"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <polyline points="12 4 4 8 12 12 20 8 12 4" />{" "}
                  <polyline points="4 12 12 16 20 12" />{" "}
                  <polyline points="4 16 12 20 20 16" />
                </svg>
              </div>

              <h2 className="text-xl">{currentLink.title}</h2>
            </div>
            <Link
              href={currentLink.href}
              className="text-sm md:text-md text-pena-500"
            >
              Overview
            </Link>
          </div>
          <div className="flex flex-col gap-2.5 mt-8">
            {currentLink.navigations.map((link) => {
              const href = currentLink.href + link.href;
              return (
                <Link
                  key={link.title}
                  href={`${currentLink.href}${link.href}`}
                  className={clsx(
                    "flex w-full",
                    href === pathname
                      ? "text-pena-500"
                      : "text-slate-500 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                  )}
                >
                  <p className="text-foreground text-sm ml-2">{link.title}</p>
                </Link>
              );
            })}
          </div>
        </>
      )}
      {/* </nav> */}
    </div>
  );
};

export default Sidebar;
