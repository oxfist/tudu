import nc from 'next-connect'
import notes from '../../../src/data/data'

const NOT_FOUND = 404

const handler = nc().get((req, res) => {
  const note = notes.find((n) => parseInt(req.query.id) === n.id)

  if (!note) {
    res.status(NOT_FOUND)
    res.end()
    return
  }

  res.json({ data: note })
})

export default handler
