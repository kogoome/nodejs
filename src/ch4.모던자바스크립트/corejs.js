// @ts-check

// npm install core-js

require('core-js')

const complicatedArray = [1, [2, 3]]
const flattendArray = complicatedArray.flat()

// console.log(flattendArray)

const str = 'abcabc123'
const changed1 = str.replace('abc', '123')
// const changed2 = str.replaceAll('abc', '123')
// console.log(changed1)
// console.log(changed2)

/**
 * @param {number} duration 
 * @returns 
 */

function sleep(duration) {
  return new Promise((resolve)=>{
    console.log('sleep start')
    setTimeout(()=>{
      console.log('sleep done', duration)
      resolve(duration)
    }, duration)
  })
}

function alwaysReject() {
  return new Promise((resolve, reject)=>{
    reject()
  })
}

Promise.allSettled([ // 모든 프로미스가 끝났는지 검사
  sleep(1000),
  sleep(1500),
  sleep(2000),
  alwaysReject(),
]).then((value)=>{
  console.log("프로미스 모두 종료", value)
})
