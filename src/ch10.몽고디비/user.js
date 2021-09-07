// @ts-check

const client = require('./mongo')

async function main() {
  // 디비 연결
  await client.connect()

  // 컬렉션 연결
  const users = client.db('weeksom').collection('users')
  const article = client.db('weeksom').collection('article')

  // Reset
  await users.deleteMany({})
  await article.deleteMany({})

  // init
  await users.insertMany([
    {
      email: 'test1@kakao.com',
      password: 'test1234#',
      nickname: '사자',
      follow: [],
      follower: [],
      like: [],
    },
    {
      email: 'test2@kakao.com',
      password: 'test1234#',
      nickname: '알파카',
      follow: [],
      follower: [],
      like: [],
    },
    {
      email: 'test3@kakao.com',
      password: 'test1234#',
      nickname: '물범',
      follow: [],
      follower: [],
      like: [],
    },
  ])

  // 팔로우 업데이트
  await users.updateOne(
    { email: 'test1@kakao.com' },
    { $set: { follow: ['test2@kakao.com'] } }
  )
  // await users.updateOne(
  //   { email: 'test2@kakao.com' },
  //   { $set: { follower: ['test1@kakao.com'] } },
  //   { upsert: true }
  // )

  // 언팔로우 업데이트

  // 검색
  const cursor = users.find({})

  // 출력
  await cursor.forEach(console.log)

  // 연결종료
  await client.close()
}

main()
