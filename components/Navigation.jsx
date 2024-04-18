import Link from "next/link";
import Image from "next/legacy/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import LogoPena from "../public/img/pena-text.png";

import { navigation } from "../lib/navigation";
import DynamicColorIcon from "./IconTail";
import { useRouter } from "next/router";

export function Navigation({ className, pathname }) {
  const [isHomepage, setIsHomepage] = useState(true);
  const [currentSection, setCurrentSection] = useState(navigation[0].id);
  const [contents, setContents] = useState(navigation);
  const [path, setPath] = useState(pathname);
  const [currentLink, setCurrentLink] = useState();

  function findLinkByHref(href, contents) {
    for (const section of contents) {
      // Check top-level links first
      const foundLink = section.links.find((link) => link.href === href);
      if (foundLink) {
        return foundLink;
      }

      // Check nested navigations if present
      for (const link of section.links) {
        if (link.navigations) {
          const nestedFound = link.navigations.find(
            (nestedLink) => nestedLink.href === href
          );
          if (nestedFound) {
            return nestedFound;
          }
        }
      }
    }
  }
  useEffect(() => {
    // console.log("Ini current sction : ", currentSection)
    // const newContent = navigation[currentSection]
    // console.log("Ini new content : ", newContent)
    // setContents([newContent])
    const currentPage =
      path === "/" ||
      path === "/docs/installation" ||
      pathname === "/" ||
      pathname === "/docs/installation";
    console.log("Ini pathname : ", pathname);
    setIsHomepage(currentPage);
    console.log("Ini currentpage : ", currentPage);
    if (currentPage) {
      console.log("Masuk ke sini. Ini navigation : ", navigation);
      setContents(navigation);
    } else {
      const newContent = navigation[currentSection];
      console.log("INi new content : ", newContent);
      const temp = findLinkByHref(path, navigation);
      setCurrentLink(temp);
    }
  }, [currentSection, pathname]);
  const onLinkClick = (link, id) => {
    setPath(link);
    setCurrentSection(id);
  };

  return (
    <div className="bg-background border-muted sidebar-width sticky top-16-screen py-8 px-12 lg:w-[420px]  hidden lg:block overflow-y-scroll">
      {/* <nav className={clsx('text-base lg:text-sm', className)}> */}
      <div className="relative flex flex-grow basis-0 items-center top-0 sticky z-10 mb-8">
        <Link href="/" aria-label="Home page">
          {/* <Logomark className="h-9 w-9 lg:hidden" /> */}
          {/* <Logo className="hidden h-9 w-auto fill-slate-700 lg:block dark:fill-pena-500" /> */}
          <Image src={LogoPena} alt="Pena Logo" width={75} height={40} />
        </Link>
      </div>
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
                        "flex w-full",
                        link.href === pathname
                          ? "font-semibold text-pena-500"
                          : "text-slate-500 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                      )}
                      // className="my-5 flex items-center space-x-4"
                    >
                      <div className="bg-surface-100 flex items-center justify-center">
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
            <div className="my-3 text-pena-500 flex flex-row gap-x-4">
              <div className="flex items-center align-center">
                <svg
                  class="text-red-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
            <p className="text-md">Overview</p>
          </div>
          <div className="flex flex-col gap-2.5 mt-8">
            {currentLink.navigations.map((link) => {
              return (
                <Link
                  key={link.title}
                  href={`${currentLink.href}${link.href}`}
                  className={clsx(
                    "flex w-full",
                    link.href === pathname
                      ? "font-semibold text-pena-500"
                      : "text-slate-500 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                  )}
                  // className="my-5 flex items-center space-x-4"
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
}
