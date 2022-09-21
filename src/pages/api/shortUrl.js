// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { url } = req.body;
  const shorUrl = Math.random()
    .toString(36)
    .substring(2, 6)

  // TODO: Database storage of shortened url

  res.json({ url, shorUrl })
}
