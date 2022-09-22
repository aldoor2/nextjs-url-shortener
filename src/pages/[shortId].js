import { PrismaClient } from '@prisma/client'

export default function ShortIdPage() {
  return <div>ShortId Redirect...</div>
}

export async function getServerSideProps({ params }) {
  const prisma = new PrismaClient()
  const { shortId } = params

  const data = await prisma.Link.findUnique({
    where: { shortUrl: shortId },
  })

  prisma.$disconnect()

  if (!data) {
    return {
      redirect: { destination: "/" },
    }
  }

  return {
    redirect: {
      destination: data.url.includes('https://') ? (data.url) : `https://${data.url}`,
    },
  }
}