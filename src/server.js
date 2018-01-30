const express = require('express')

const app = express()
const PORT = 1337

app.get('/', (req, res) => {
    res.send('OK!')
})

app.listen(PORT)
console.log(`Listening on ${PORT}`)
