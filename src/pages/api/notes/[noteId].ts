// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { Note } from 'features/notes/notes-slice'
import type { NextApiRequest, NextApiResponse } from 'next'

async function handleGet(req: NextApiRequest, res: NextApiResponse<Note>) {
  res.status(200).json({ id: 0, title: '', text: '' })
}

async function handlePut(req: NextApiRequest, res: NextApiResponse<number>) {
  res.status(200).send(1)
}

async function handleDelete(req: NextApiRequest, res: NextApiRequest<number>) {}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Note | number | { error: string }>
) {
  switch (req.method) {
    case 'GET':
      handleGet(req, res)
      break
    case 'PUT':
      handlePut(req, res)
      break
    case 'DELETE':
      handleDelete(req, res)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE'])
      res.status(405).send({ error: `Method ${req.method} Not Allowed` })
  }
}
