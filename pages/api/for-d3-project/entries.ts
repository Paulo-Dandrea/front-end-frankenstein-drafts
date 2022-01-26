import { NextApiRequest, NextApiResponse } from 'next'
import db from '~/utils/db'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const entries = await db.collection('dishes').get()
    const entriesData = entries.docs.map(entry => ({
      ...entry.data()
    }))
    res.status(200).json({ entriesData })
  } catch (e) {
    res.status(400).end()
  }
}
