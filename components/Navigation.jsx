import Link from "next/link";
import Image from "next/legacy/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import LogoPena from "../public/img/pena-text.png";

import { navigation } from "../lib/navigation";
import DynamicColorIcon from "./IconTail";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export function Navigation({ className, pathname, type }) {
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
    const currentPage =
      path === "/" || pathname === "/" || setIsHomepage(currentPage);
    if (currentPage) {
      setContents(navigation);
    } else {
      let temp = findLinkByHref(path, navigation);
      setCurrentLink(temp);
    }
  }, [currentSection, pathname]);
  const onLinkClick = (link, id) => {
    setPath(link);
    setCurrentSection(id);
  };

  return (
    <>
      {type === "topbar" && (
        <Topbar
          className="flex md:hidden"
          isHomepage={isHomepage}
          currentLink={currentLink}
          onLinkClick={onLinkClick}
          contents={contents}
          pathname={pathname}
        />
      )}
      {type === "sidebar" && (
        <Sidebar
          className="hidden md:flex"
          isHomepage={isHomepage}
          currentLink={currentLink}
          onLinkClick={onLinkClick}
          contents={contents}
          pathname={pathname}
        />
      )}
    </>
  );
}
