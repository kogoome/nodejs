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
    
    /** @type {Object.<string,*> | undefined} */
    const reqBody = (req.headers['content-type'] === 'application/json' &&
    (await new Promise((resolve, reject) => {
      req.setEncoding('utf-8')
      req.on('data', data => {
        try {
          resolve(JSON.parse(data))
        } catch {
          reject(new Error('Ill-formed json'))
        }
      })
    }))) || undefined
    
    // regexResult를 보내서 아이디가 일치하는 포스트 검색후 반환
    const result = await route.callback(regexResult, reqBody)
    res.statusCode = result.statusCode // 반환받은 상태번호 출력

    // 결과값 바디가 문자타입으로 존재하면
    if (typeof result.body === 'string') {
      res.end(result.body)// 바디값을 출력하며 응답종료
    } else {// 옵젝타입이면
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.end(JSON.stringify(result.body))// 파싱해서 출력
    }
  }

  main()
})

const PORT = 4000
server.listen(PORT, () => {
  console.log(`The server is listening at port: ${PORT}.`)
})


