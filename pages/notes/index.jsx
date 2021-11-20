import Link from 'next/link'
import React from 'react'

const Page = () => (
  <div>
    <h1>Note index path</h1>
    <Link href="/notes/[id]" as={`/notes/1`}>
      <a>Note 1</a>
    </Link>
  </div>
)

export default Page
