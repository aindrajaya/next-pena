import { DocsHeader } from './DocsHeader'
import { PrevNextLinks } from './PrevNextLinks'
import { Prose } from './Prose'
import { TableOfContents } from './TableOfContents'
import { collectSections } from '../lib/sections'

export function DocsLayout({ children, frontmatter: { title }, nodes }) {
  let tableOfContents = collectSections(nodes)

  return (
    <>
      <div className="min-w-0 max-w-2xl flex-auto py-16 lg:max-w-none ">
        <article>
          <DocsHeader title={title} />
          <Prose>{children}</Prose>
        </article>
        <PrevNextLinks />
      </div>
      {/* <TableOfContents tableOfContents={tableOfContents} /> */}
    </>
  )
}
