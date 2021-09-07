// @ts-check

const client = require('./mongo')

async function main() {
  await client.connect()
}
