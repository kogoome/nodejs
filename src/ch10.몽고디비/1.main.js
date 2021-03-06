const client = require('./0.mongo')

async function main() {
  await client.connect() // 디비 연결

  // Collection
  const users = client.db('My_DB').collection('users')
  const cities = client.db('My_DB').collection('cities')

  // Reset
  await users.deleteMany({}) // 있던 정보를 매번 삭제
  await cities.deleteMany({}) // 있던 정보를 매번 삭제

  // Init
  await users.insertMany([
    {
      name: 'Foo',
      birth: 1999,
      contacts: [
        { type: 'phone', number: '+821012341233' },
        { type: 'home', number: '+821011112221' },
      ],
      city: '서울',
    },
    { name: 'Bar', birth: 1994, city: '부산' },
    { name: 'Baz', birth: 1989, city: '부산' },
    { name: 'Poo', birth: 1998, city: '서울' },
  ]) // 정보입력
  await cities.insertMany([
    {
      name: '서울',
      population: 999,
    },
    {
      name: '부산',
      population: 349,
    },
  ])
  // 시티를 검색, 하나로 합치는 작업
  const cursor = users.aggregate([
    // 파라매터 자리에서 ctrl + shift + space 누르면 도움말
    {
      $lookup: {
        // 룩업 어그리게이션 사용
        localField: 'city', // 시티정보를
        from: 'cities', // 시티즈 컬렉션의
        foreignField: 'name', // 네임값과 연결시켜
        as: 'city_info', // 시티인포라 하고 임배드
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
