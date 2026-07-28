/**
 * server/index.js
 * 
 * Serveur Express minimal pour l'API Instagram. Il ne fait que relayer les
 * requêtes vers `server/instagram.js` et renvoyer le JSON au front. Le token
 * Instagram n'est jamais exposé côté client, et nginx ne sert jamais ce
 * serveur : il est uniquement joignable par le front via la route /api/instagram
 * (nginx redirige vers localhost:4000).
 */

import express from "express"
import { getInstagramPosts } from "./instagram.js"

const app = express()
const PORT = process.env.PORT ?? 4000

app.get("/api/instagram", async (req, res) => {
  const limit = Number(req.query.limit) || 12
  const posts = await getInstagramPosts(limit)
  res.json(posts)
})

app.listen(PORT, () => {
  console.log(`API Instagram prête sur http://localhost:${PORT}`)
})