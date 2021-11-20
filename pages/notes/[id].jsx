import Link from 'next/link'
import React from 'react'

const Page = () => {
  const notesArray = new Array(15).fill(1)
  const notes = notesArray.map((_, i) => ({
    id: i,
    title: `Note: ${i}`,
  }))

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <Link href="/notes">
          <a>
            <strong>Back to all Notes</strong>
          </a>
        </Link>
      </div>
      {notes.map((note) => (
        <div key={note.id}>
          <Link href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Page
