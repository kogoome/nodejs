// @ts-check

/* eslint-disable no-new */
/* eslint-disable no-console */

function returnPromiseForTimeout() {
  return new Promise(resolve => {
    setTimeout(()=> {
      resolve(Math.random())
    }, 1000)
  })
  
}

returnPromiseForTimeout()
  .then((value) => {
    console.log('value', value)
    return returnPromiseForTimeout()
  }).then((value) => {
    console.log('value', value)
    return returnPromiseForTimeout()
  }).then((value) => {
    console.log('value', value)
    return returnPromiseForTimeout()
  }).then((value) => {
    console.log('value', value)
    return returnPromiseForTimeout()
  })

returnPromiseForTimeout()

