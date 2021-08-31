// @ts-check

/* eslint-disable no-new */
/* eslint-disable no-console */

setTimeout(()=> {
  const value1 = Math.random()
  console.log(value1)

  setTimeout(()=>{
    const value2 = Math.random()
    console.log(value2)

    setTimeout(()=>{
      const value3 = Math.random()
      console.log(value3)

      setTimeout(()=>{
        const value4 = Math.random()
        console.log(value1)
        console.log(value2)
        console.log(value3)
        console.log(value4)
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)