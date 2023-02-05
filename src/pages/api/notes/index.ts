// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { Note } from 'features/notes/notes-slice'
import { readdir, readFile } from 'fs/promises'
import { getErrorMessage } from 'lib/get-error-message'
import type { NextApiRequest, NextApiResponse } from 'next'

async function handleGet(
  _req: NextApiRequest,
  res: NextApiResponse<Record<number, Note> | { error: string }>
): Promise<void> {
  try {
    const files = await readdir('./notes/', { encoding: 'utf-8' })
    const texts = await Promise.all(
      files.map(
        async (file) => await readFile(`./notes/${file}`, { encoding: 'utf-8' })
      )
    )
    const notes: Record<number, Note> = Object.fromEntries(
      files.map((file, index) => {
        const [title, idString] = file.split(/_(\d+)\.txt$/)
        const id = Number(idString)
        return [id, { id, title, text: texts[index] }]
      })
    )
    res.status(200).send(notes)
  } catch (error) {
    res.status(500).send({ error: getErrorMessage(error) })
  }
}

async function handlePost(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  res.status(200).send(1)
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Record<number, Note> | number | { error: string }>
): Promise<void> {
  switch (req.method) {
    case 'GET':
      await handleGet(req, res)
      break
    case 'POST':
      await handlePost(req, res)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).send({ error: `Method ${req.method ?? ''} Not Allowed` })
  }
}
