// @ts-check
/* eslint-disable no-restricted-syntax */

/**
 * @typeof Person
 *
 * @property {number} age
 * @property {string} city
 * @property {string | string[]} [pet]
 * */

/** @type {Person[]} */
const people = [
  { age: 20, city: '서울', pet: ['cat', 'dog'] },
  { age: 40, city: '부산' },
  { age: 31, city: '대구', pet: ['cat', 'dog'] },
  { age: 36, city: '서울' },
  { age: 27, city: '부산', pet: ['cat'] },
  { age: 24, city: '서울', pet: ['dog'] },
]

/**
 * 다음 문제를 풀어보자
 *
 * A. 30대 미만의 한명이라도 사는 모든 도시
 * */

function solveA() {
  /** @type {string[]} */
  const cities = []

  for (const person of people) {
    // 30살 미만인 사람들중
    if (person.age < 30) {
      // 등록된 도시정보중에 이번 사람의 도시정보와 동일한 값이 없다면 새로운 도시정보를 추가
      if (!cities.find((city) => person.city === city)) cities.push(person.city)
    }
  }
  return cities
}

function solveAModern() {
  const allcities = people // 사람들에서 30대미만의 사람들로 필터링
    .filter(({ age }) => age < 30)
    // 위 배열의 사람들을 도시와 매핑: 치역은 도시값들의 모임
    .map(({ city }) => city)

  // 배열을 집합으로 변환하면 중복제거
  const set = new Set(allcities)
  return Array.from(set)
}
// console.log('A : ', solveA())
// console.log('A_modern : ', solveAModern())

/** B. 각 도시별로 개와 고양이를 키우는 사람의 수
 * */

/** 만들 결과값
{
  "서울": {"dog": 2, "cat": 1, },
  "대구": {"dog": 1, "cat": 1, },
  "부산": {"cat": 1,},
} string : object.<string, number> 들의 배열객체
*/

// 만들 결과값을 타입으로 만들어주면 미리 타입검사를 할 수 있다
/** @typedef {Object.<string, Object.<string, number>>} hasPetNofCities */

function solveB() {
  // 결과 타입을 미리 적용
  /** @type {hasPetNofCities} */
  const result = {}

  // 사람 정보에서 도시와 펫 정보를 가져옴
  for (const person of people) {
    // 사람 정보를 city와 petOrPets로 분할
    const { city, pet: petOrPets } = person

    // 펫이 있다면
    if (petOrPets) {
      // 결과값의 도시를 받아와서
      const petsOfCity = result[city] || {}

      // 펫이 스트링이라면(배열이 아니라면)
      if (typeof petOrPets === 'string') {
        // 펫에 넣어두고
        const pet = petOrPets

        const origNumPetsOfCity = petsOfCity[pet] || 0
        petsOfCity[pet] = petsOfCity[pet] ? petsOfCity[pet] +1 : 1
      } else {
        for (const pet of petOrPets) {
          const origNumPetsOfCity = petsOfCity[pet] || 0
          petsOfCity[pet] = origNumPetsOfCity + 1
        }
      }

      result[city] = petsOfCity
    }
  }
  return result
}

function solveBB() {
  // 개와 고양이를 가진 도시를 찾아내 -> 
  // 그 도시에서 개와 고양이를 카운트해
  
  return people.map(({pet:petOrPets, city}) => {
    console.log(typeof petOrPets  === 'string')
    const pets = (typeof petOrPets === 'string' ? [] : petOrPets)
    
    return {
      city,
      pets,
    }
  })
}

console.log(solveBB())
