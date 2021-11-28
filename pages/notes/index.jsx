import Link from 'next/link'
import React from 'react'
import { title } from '../../styles/styles.module.css'

const Page = () => (
  <div>
    <h1 className={title}>Note index path</h1>
    <Link href="/notes/[id]" as={`/notes/1`}>
      <a>Note 1</a>
    </Link>
  </div>
)

export default Page
