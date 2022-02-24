import { useRouter } from 'next/router'

const NotePage = ({ note }) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div sx={{ variant: 'containers.page' }}>
      <section>
        <h1>Note: {note.title}</h1>
        <p>{note.text}</p>
      </section>
    </div>
  )
}

export async function getServerSideProps({ params, req, res }) {
  const noteResponse = await fetch(
    `${process.env.SERVER_URL}/api/notes/${params.id}`
  )

  if (!noteResponse.ok) {
    return {
      redirect: {
        permanent: false,
        destination: '/notes',
      },
    }
  }

  const { data } = await noteResponse.json()

  if (data) {
    return {
      props: { note: data },
    }
  }
}

export default NotePage
