const client = require('./0.mongo')

async function main() {
  await client.connect() // 디비 연결

  // db
  const db = client.db('weeksom')

  // Collection
  // const users = client.db('weeksom').collection('users')
  // const follow = client.db('weeksom').collection('follow')

  // Reset
  await db.collection('users').deleteMany({}) // 있던 정보를 매번 삭제
  await db.collection('follow').deleteMany({}) // 있던 정보를 매번 삭제

  // Init
  await db.collection('users').insertMany([
    {
      email: 'test1@kakao.com',
      password: 'qwer1234#',
      nickname: '알파카',
      profileImgKey: '',
      userinfo: '',
    },
    {
      email: 'test2@kakao.com',
      password: 'qwer1234#',
      nickname: '사자',
      profileImgKey: '',
      userinfo: '',
    },
  ])
  await db.collection('follow').insertMany([
    {
      email: 'test1@kakao.com',
      follow: [
        {
          following: ['test2@kakao.com', 'test3@kakao.com', 'test4@kakao.com'],
          follower: ['test2@kakao.com', 'test3@kakao.com', 'test5@kakao.com'],
        },
      ],
    },
  ])

  // 팔로우 수정 push pull
  const filter = { email: 'test1@kakao.com' }
  const updateDocument = {
    $pull: {
      'follow.$[].following': 'test2@kakao.com',
    },
  }
  await db.collection('follow').updateOne(filter, updateDocument)

  // find검색, project필드
  const cursor = db
    .collection('follow')
    .find({
      email: 'test1@kakao.com',
    })
    .project({ _id: 0, follower: 0 })
  await cursor.forEach(console.log)

  await client.close()
}

main()
