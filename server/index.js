
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')

const app = express()
const apiPort = 3000



app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

const route = require('./routes/router')

//db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', route)


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

