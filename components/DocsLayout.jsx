"use client"
import { DocsHeader } from './DocsHeader'
import { PrevNextLinks } from './PrevNextLinks'
import { Prose } from './Prose'
import { TableOfContents } from './TableOfContents'
import { collectSections } from '../lib/sections'
import { usePathname } from "next/navigation";

export function DocsLayout({ children, frontmatter: { title }, nodes }) {
  let tableOfContents = collectSections(nodes)
  let pathname = usePathname();
  let isHomePage = pathname === "/";
  let isReferencePage = pathname === "/reference";

  return (
    <>
      {/* <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16"> */}
      <div className={`min-w-0 max-w-2xl flex-auto py-16 lg:max-w-none 
        ${isReferencePage || isHomePage ? "" : "px-4 lg:pl-8 lg:pr-0 xl:px-16"}
      `}>
        <article>
          <DocsHeader title={title} />
          <Prose>{children}</Prose>
        </article>
        <PrevNextLinks />
      </div>
      {isHomePage || <TableOfContents tableOfContents={tableOfContents} />}
    </>
  )
}
