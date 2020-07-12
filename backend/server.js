const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const genreRouter = require('./routes/genres')
const personRouter = require('./routes/persons')
const multimediaRouter = require('./routes/multimedia')

require('dotenv').config()

const app = express()

const uri = process.env.MONGO_URI
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
mongoose.connection.once('open', () => {
    console.log('MongoDB connected successfully!')
})

app.use(cors()) // added new middleware
app.use(express.json()) // allows to parse json

app.use('/genres', genreRouter)
app.use('/persons', personRouter)
app.use('/multimedia', multimediaRouter)

app.listen(5000, () => {
    console.log('Server is started in port 5000')
})