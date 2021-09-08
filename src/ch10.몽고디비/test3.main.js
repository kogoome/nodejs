const client = require('./0.mongo')

async function main() {
  await client.connect() // 디비 연결

  // db
  const db = client.db('weeksom')

  // Reset
  await db.collection('users').deleteMany({})

  // Init
  await db.collection('users').insertMany([
    {
      email: 'test1@kakao.com',
      password: 'qwer1234#',
      nickname: '알파카',
      profileImgKey: '',
      userinfo: '',
      following: ['test2@kakao.com', 'test3@kakao.com', 'test4@kakao.com'],
      follower: ['test2@kakao.com', 'test3@kakao.com', 'test5@kakao.com'],
      article: [],
    },
    {
      email: 'test2@kakao.com',
      password: 'qwer1234#',
      nickname: '사자',
      profileImgKey: '',
      userinfo: '',
      following: ['test2@kakao.com', 'test3@kakao.com', 'test4@kakao.com'],
      follower: ['test2@kakao.com', 'test3@kakao.com', 'test5@kakao.com'],
      article: [],
    },
  ])

  // 팔로우 수정 push넣기 pull빼기
  const filter = { email: 'test2@kakao.com' }
  const updateDocument = {
    $pull: {
      following: 'test2@kakao.com',
    },
  }
  await db.collection('users').updateOne(filter, updateDocument)

  // find검색, project필드
  const cursor = db.collection('users').find({}).project({ _id: 0 })
  await cursor.forEach(console.log)

  await client.close()
}

main()
