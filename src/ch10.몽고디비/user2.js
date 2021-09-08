const client = require('./0.mongo')

async function main() {
  await client.connect() // 디비 연결

  // Collection
  const users = client.db('weeksom').collection('users')
  const follow = client.db('weeksom').collection('follow')

  // Reset
  await users.deleteMany({}) // 있던 정보를 매번 삭제
  await follow.deleteMany({}) // 있던 정보를 매번 삭제
  const date = new Date()
  // Init
  await users.insertMany([
    {
      _id: 'test1@kakao.com',
      password: 'qwer1234#',
      nickname: '알파카',
      profileImgKey: '',
      userinfo: '안녕하세요',
      count: {
        following_count: '',
        follower_count: '',
        board_count: '',
        newMsg_count: '',
      },
      created_at: date,
      updated_at: '',
      article_private: false,
    },
    {
      _id: 'test2@kakao.com',
      password: 'qwer1234#',
      nickname: '물범',
      profileImgKey: '',
      userinfo: '안녕하세요?',
      count: {
        following_count: '',
        follower_count: '',
        board_count: '',
        newMsg_count: '',
      },
      created_at: date,
      updated_at: '',
      article_private: false,
    },
  ]) // 정보입력
  await follow.insertMany([
    {
      user: 'test1@kakao.com',
      follow: [
        { type: 'user', email: 'test2@kakao.com' },
        { type: 'user', email: 'test3@kakao.com' },
      ],
    },
    {
      user: 'test2@kakao.com',
      follow: [
        { type: 'user', email: 'test3@kakao.com' },
        { type: 'user', email: 'test1@kakao.com' },
      ],
    },
  ])
  // 시티를 검색, 하나로 합치는 작업
  const cursor = users.aggregate([
    // 파라매터 자리에서 ctrl + shift + space 누르면 도움말
    {
      $lookup: {
        // 룩업 어그리게이션 사용
        localField: 'email', // 시티정보를
        from: 'follow', // 시티즈 컬렉션의
        foreignField: 'user', // 네임값과 연결시켜
        as: 'follow', // 시티인포라 하고 임배드
      },
    },
    // {
    //   $match: {
    //     $or: [
    //       { 'city_info.population': { $gte: 499 } },
    //       { birth: { $lte: 1992 } },
    //     ],
    //   },
    // },
    // { $count: '검색된 정보 수', },
  ])
  // eslint-disable-next-line no-console
  await cursor.forEach(console.log) // 커서에 잇는 문서 각각 콘솔출력
  await client.close()
}

main()
