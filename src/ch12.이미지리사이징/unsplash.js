import { createApi } from 'unsplash-js'
import fetch from 'node-fetch'
import dotenv from 'dotenv'

global.fetch = fetch
dotenv.config()

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  fetch,
})

async function main() {
  const result = await unsplash.search.getPhotos({ query: 'mountain' })
  console.log(result.response?.results)
}

main()
