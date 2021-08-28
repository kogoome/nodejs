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
 * @property {(matches: string[], body: Object.<string,*> | undefined) => Promise<APIResponse>} callback
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
      const postId = matches[1] // 첫번째 regexResult는 아이디값
      if(!postId) { // 아이디가 없다면
        return {
          statusCode: 200,
          body: 'Not found.',
        }
      }
      
      // 아이디가 일치하는 포스트 검색
      const post = posts.find(_post => _post.id === postId)
      if (!post) {// 포스트가 없다면
        return {
          statusCode: 200,
          body: 'Not found.',
        }
      }

      return {// 상태 번호와 해당아이디 포스트 반환
        statusCode:200,
        body:post,
      }
    },
  },

  {
    url: /^\/posts$/,
    method: 'POST',
    callback: async (_,body) => {
      if (!body) {
        return {
          statusCode:400,
          body: 'Ill-formed request.'
        }
      }

      /** @type {string} */
      /* eslint-disable-next-line prefer-destructuring */
      const title = body.title
      const newPost = {
        id:body.id,
        title:body.title,
        content:body.content,
      }

      posts.push(newPost)
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
