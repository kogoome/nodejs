// @ts-check
/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

// /** @type {Post[]} */
// const posts = [
//   {
//     id: 'my_first_post',
//     title: 'My first post',
//     content: 'Hello!',
//   },
//   {
//     id: 'my_second_post',
//     title: '나의 두번째 포스트',
//     content: 'Second post',
//   },
// ]

/**
 * Post : 글
 *
 * Get /post 글 전체보기
 * Get /post/:id 특정아이디글보기
 * POST /post
 *
 */

/**
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {string | Object} body
 */

/**
 * @typedef Route
 * @property {RegExp} url
 * @property {'GET'|'POST'} method
 * @property {(matches: string[], body: Object.<string,*> | undefined) => Promise<APIResponse>} callback
 */

const fs = require('fs')

const DB_JSON_FILENAME = 'database.json'

/**
 * @returns {Promise<Post[]>}
 */
async function getPosts() {
  const json = await fs.promises.readFile('database.json', 'utf-8')
  return JSON.parse(json).posts
}

/**
 * @param {Post[]} posts
 */
async function savePosts(posts) {
  const content = {
    posts,
  }

  return fs.promises.writeFile(
    DB_JSON_FILENAME,
    JSON.stringify(content),
    'utf-8'
  )
}

/** @type {Route[]} */
const routes = [
  {
    url: /^\/posts$/,
    method: 'GET',
    callback: async () => ({
      // TODO: implement
      statusCode: 200,
      body: await getPosts(),
    }),
  },
  {
    url: /^\/posts\/([a-zA-Z0-9-_]+)$/,
    method: 'GET',
    callback: async (matches) => {
      const postId = matches[1] // 첫번째 regexResult는 아이디값
      if (!postId) {
        // 아이디가 없다면
        return {
          statusCode: 200,
          body: 'Not found.',
        }
      }
      const posts = await getPosts()
      // 아이디가 일치하는 포스트 검색
      const post = posts.find((_post) => _post.id === postId)
      if (!post) {
        // 포스트가 없다면
        return {
          statusCode: 200,
          body: 'Not found.',
        }
      }

      return {
        // 상태 번호와 해당아이디 포스트 반환
        statusCode: 200,
        body: post,
      }
    },
  },

  {
    url: /^\/posts$/,
    method: 'POST',
    callback: async (_, body) => {
      if (!body) {
        return {
          statusCode: 400,
          body: 'Ill-formed request.',
        }
      }

      /* eslint-disable-next-line prefer-destructuring */
      const newPost = {
        id: body.id,
        title: body.title,
        content: body.content,
      }

      const posts = await getPosts() // 기존 posts로 변수할당
      posts.push(newPost)
      savePosts(posts)
      // TODO: implement
      return {
        statusCode: 200,
        body: newPost,
      }
    },
  },
]

module.exports = {
  routes,
}
