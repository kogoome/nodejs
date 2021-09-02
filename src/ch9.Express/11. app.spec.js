// // spec 테스트 규격

// /* eslint-disable no-undef */
// // eslint-disable-next-line node/no-unpublished-require
// const supertest = require('supertest')
// const app = require('./9. app')

// const request = supertest(app)

// // jest에서 이 함수있는 파일을 추적 테스팅
// test('retrieve user json', async () => {
//   // app에 다음 형태로 요청 테스트 실행
//   const result = await request.get('/users/11').accept('application/json')

//   // 결과값 바디에
//   expect(result.body).toMatchObject({
//     nickname: expect.any(String), // 닉네임이 스트링인가 알아보고싶다
//   })
// })

// test('retrive user page', async () => {
//   const result = await request.get('/users/11').accept('text/html')
//   expect(result.text).toMatch(/^<html>.*<\/html>$/)
// })

// test('update nickname', async () => {
//   const newNickname = 'newnickname'

//   // 닉네임 업데이트 테스트
//   const res = await request
//     .post('/users/11/nickname')
//     .send({ nickname: newNickname })
//   expect(res.status).toBe(200)

//   // 닉네임 정보 불러오기 테스트
//   const userResult = await request.get('/users/11').accept('application/json')
//   expect(userResult.status).toBe(200)
//   expect(userResult.body).toMatchObject({
//     nickname: newNickname,
//   })
// })
