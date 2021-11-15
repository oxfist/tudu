import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter();

  const { params } = router.query;

  return (
    <h1>Note {params}</h1>
  )
}

export default Page
