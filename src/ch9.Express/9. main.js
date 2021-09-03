// @ts-check

const app = require('./app')

const PORT = 5000

app.listen(PORT, () => {
  console.log(`express server listen port ${PORT}`)
})
