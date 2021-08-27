// @ts-check
// 주석은 기울임
/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */
const posts = [
  {
    id: 'my_first_post',
    title: 'My first post',
    content: 'Hello!',
  },
  {
    id: 'my_second_post',
    title: '나의 두번째 포스트',
    content: 'Second post',
  },
]

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
 * @property {(matches: string[]) => Promise<APIResponse>} callback
 */

/** @type {Route[]} */
const routes = [
  {
    url: /^\/posts$/,
    method: 'GET',
    callback: async () => ({
      // TODO: implement
      statusCode: 200,
      body: posts,
    }),
  },

  {
    url: /^\/posts\/([a-zA-Z0-9-_]+)$/,
    method: 'GET',
    callback: async (matches) => {
      const postId = matches[1]
      if(!postId) {
        return {
          statusCode: 200,
          body: 'Not found.',
        }
      }

      const post = posts.find(_post => _post.id === postId)

      if (!post) {
        return {
          statusCode: 200,
          body: 'Not found.',
        }
      }

      return {
        statusCode:200,
        body:post,
      }
    },
  },

  {
    url: /^\/posts$/,
    method: 'POST',
    callback: async () => ({
      // TODO: implement
      statusCode: 200,
      body: {},
    }),
  },
]

module.exports = {
  routes,
}
