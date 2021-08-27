// @ts-check

// 프레임워크 없이 간단한 토이프로젝트 웹 서버 만들기
/**
 * 블로그 포스팅 서비스
 * - 로컬 파일을 데이터 베이스(JSON)
 * - 인증로직 제외
 * - RESTful API사용
 */

const http = require('http')
const { routes } = require('./api')

const server = http.createServer((req, res) => {
  const main = async () => {
    const route = routes.find(
      (_route) =>
        req.url &&
        req.method &&
        _route.url.test(req.url) &&
        _route.method === req.method
    )

    if (!route) {
      res.statusCode = 404
      res.end('Not found.')
      return
    }

    const regexResult = route.url.exec(req.url)

    if (!regexResult) {
      res.statusCode = 404
      res.end('Not found.')
      return
    }

    const result = await route.callback(regexResult)
    res.statusCode = result.statusCode

    if (typeof result.body === 'string') {
      res.end(result.body)
    } else {
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.end(JSON.stringify(result.body))
    }
  }

  main()
})

const PORT = 4000
server.listen(PORT, () => {
  console.log(`The server is listening at port: ${PORT}.`)
})


