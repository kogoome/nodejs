
import http from 'http'
import { createApi } from 'unsplash-js'
import fetch from 'node-fetch'
import dotenv from 'dotenv'

global.fetch = fetch
dotenv.config()

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  fetch,
})

/**
 * @param {string} query  
 */
async function searchImg(query) {
  const result = await unsplash.search.getPhotos({ query })

  if (!result.response) {
    throw new Error('이미지를 찾을 수 없습니다')
  }

  const image = result.response.results[0]

  if (!image) {
    throw new Error('이미지가 없습니다')
  }
  return {
    description: image.description || image.alt_description,
    url: image.urls.regular,
  }
}

const server = http.createServer((req,res)=>{
  async function main() {
    const result = await searchImg('mountain')
    const resp = await fetch(result.url)
    resp.body.pipe(res) // 페치에서 스트림제공
  }
  
  main()
})

const PORT = 5000

server.listen(PORT,()=>{
  console.log(`localhost:${PORT}`)
})


