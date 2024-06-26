"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/legacy/image";

import { Hero } from './Hero'
import { Logo, Logomark } from "./Logo";
import { MobileNavigation } from './MobileNavigation'
import { Navigation } from "./Navigation";
import { Search } from "./Search";
import { ThemeSelector } from "./ThemeSelector";
import LogoPena from "../public/img/pena-text.png";
import { Button } from "./Button";

function GitHubIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
    </svg>
  );
}

function Header() {
  let [isScrolled, setIsScrolled] = useState(false);
  let pathname = usePathname();
  let isReferencePage = pathname === "/reference";


  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        `sticky top-0 ${isReferencePage ? "mt-0" : "mt-8"} z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-4 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none`,
        isScrolled
          ? "dark:bg-gray-950/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-gray-950/75"
          : "dark:bg-gray-950"
      )}
    >
      <div className="mr-6 flex lg:hidden"><MobileNavigation /></div>
      {
        isReferencePage && 
        <div className="relative flex flex-grow basis-0 items-center pl-4 pt-2">
          <Link href="/" aria-label="Home page">
            {/* <Logomark className="h-9 w-9 lg:hidden" /> */}
            {/* <Logo className="hidden h-9 w-auto fill-slate-700 lg:block dark:fill-pena-500" /> */}
            <Image src={LogoPena} alt="Pena Logo" width={75} height={40} />
          </Link>
        </div>
      }

      {
        isReferencePage || 
        <div className="-my-5">
          <Search />
        </div>
      }
      <div className="hidden relative md:flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
      {
        isReferencePage ||
        <ThemeSelector className="relative z-10" />
      }
        <Link href="https://github.com" className="group" aria-label="GitHub">
          <GitHubIcon className="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
        </Link>
      </div>
    </header>
  );
}

export function Layout({ children }) {
  let pathname = usePathname();
  let isHomePage = pathname === "/";
  let isReferencePage = pathname === "/reference";

  return (
    <div className="flex w-full flex-row max-h-screen">
      
      {isReferencePage || <Navigation />}
      <div className={`flex flex-col w-full overflow-y-scroll ${isReferencePage ? "" : "px-4 lg:pl-8 lg:pr-0 xl:px-16"}`}>
      
        <Header />
        <div className="dark:bg-gray-950 bg-white">
          {isHomePage && <Hero />}  
        </div>

        
        <div className="relative flex w-full flex-auto justify-center">
          <div className="hidden lg:relative lg:block lg:flex-none">
            <div className="absolute inset-y-0 right-0 bg-slate-50 dark:hidden" />
            {/* <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
            <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block" /> */}
            {/* <div className="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16"> */}
            {/* </div> */}
          </div>
          {children}
          
        </div>
        {isReferencePage &&
          <div className="absolute bottom-10 left-36 lg:left-20">
            <Button href="/">Back to Home</Button>
          </div>
        } 
      </div>
    </div>
  );
}
