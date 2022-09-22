// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'


export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const { url } = req.body
  const shortUrl = Math.random()
    .toString(36)
    .substring(2, 7)

  try {
    const data = await prisma.link.create({
      data: { url, shortUrl },
    })

    prisma.$disconnect()

    return res.status(201).send(data)
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }

}
