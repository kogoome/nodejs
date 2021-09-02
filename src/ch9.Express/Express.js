// @ts-check

const app = require('./9. app')

const PORT = 5000

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/users/jack`)
})
