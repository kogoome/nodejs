/*
Spread syntax (...)
ES2015에서 새로 추가된 문법
병합, 구조 분배 할당등 다양하게 활용
*/

const personalData = {
  nickname: 'kkim',
  email: 'kkim@kakao.com',
}

const publicData = {
  age: 30,
}

const overrides = {
  nickname: 'kk',
  age: 25,
}

const shouldOverride = true
const user = {
  ...personalData,
  ...publicData,
  ...(shouldOverride ? overrides : null),
}

console.log(user)

const { nickname, ...userData } = user

const pets = ['dog', 'cat']
const predators = ['wolf', 'cougar']
const animals = [...pets, ...predators]
const [my, ...rest] = animals
/* console.log('my :', my)
console.log('rest :', rest)

console.log('...rest :', ...rest) */

function foo(head, ...rest) {
  console.log(head)
  console.log(rest)
}

foo(1, 2, 3, 4, 5)
