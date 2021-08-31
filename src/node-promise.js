// @ts-check

const fs = require('fs')


/** 
 * @param {string} fileName
 */

function readFileInPromise(fileName) {
  return new Promise((resolve, reject)=>{
    fs.readFile(fileName, 'utf-8', (error,value)=>{
      if (error) reject(error)
      resolve(value)
    })
  })
}

// fs.promises.readFile('.gitignore', 'utf-8')
// .then(value=>console.log(value))

// readFileInPromise('.gitignore')
// .then(value=>console.log(value))

async function main() {
  try {
    const result = await fs.promises.readFile('.gitignore', 'utf-8')
    console.log(result)
  } catch (error) {
    console.log('error', error)
  }
}

main()