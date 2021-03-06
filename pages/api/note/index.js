import nc from 'next-connect'
import notes from '../../../src/data/data.js'

const handler = nc()
	.post((req, res) => {
		const note = {
			...req.body,
			id: notes.length
		}

		notes.push(note)
		res.json({data: note})
	})
	.get((req, res) => {
		res.json({data: notes})
	})
export default handler