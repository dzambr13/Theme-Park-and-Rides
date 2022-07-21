const express = require('express')
const routes = require('./routes')
const db = rqeuire('./db')
const logger = require('morgan')

const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())
app.use(logger('dev'))

app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connectioon error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
