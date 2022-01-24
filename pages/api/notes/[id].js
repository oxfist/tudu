import nc from 'next-connect'
import notes from '../../../src/data/data'

const NOT_FOUND = 404

const getNote = (id) => notes.find((n) => parseInt(id) === n.id)
const getNoteIndex = (id) => notes.findIndex((n) => parseInt(id) === n.id)

const handler = nc()
  .get((req, res) => {
    const note = getNote(req.query.id)

    if (!note) {
      res.status(NOT_FOUND)
      res.end()
      return
    }

    res.json({ data: note })
  })
  .patch((req, res) => {
    const note = getNote(req.query.id)

    if (!note) {
      res.status(NOT_FOUND)
      res.end()
      return
    }

    const i = getNoteIndex(req.query.id)
    const updatedNote = { ...note, ...req.body }

    notes[i] = updatedNote
    res.json({ data: updatedNote })
  })
  .delete((req, res) => {
    const note = getNote(req.query.id)

    if (!note) {
      res.status(NOT_FOUND)
      res.end()
      return
    }

    const i = getNoteIndex(req.query.id)

    notes.splice(i, 1)

    res.json({ data: re.query.id })
  })

export default handler
