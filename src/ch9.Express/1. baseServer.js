const express = require('express')

const app = express() // 익스프레스 앱 객체

const PORT = 5000

app.use((req, res) => {
  res.send('Hello Express!')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listen port ${PORT}`)
})
